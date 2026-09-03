import { NextRequest, NextResponse } from "next/server";

/**
 * Route API pour tester l'accessibilité et la latence d'un serveur distant.
 * Supporte les domaines, adresses IP et URLs complètes.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const rawTarget = searchParams.get("url")?.trim() || "";

  if (!rawTarget) {
    return NextResponse.json(
      { error: "Veuillez spécifier une cible (ex: ?url=google.com ou ?url=1.1.1.1)" },
      { status: 400 }
    );
  }

  // Nettoyage et normalisation de l'URL
  let targetUrl = rawTarget;
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = `https://${targetUrl}`;
  }

  const timeoutMs = parseInt(searchParams.get("timeout") || "4000", 10);
  const startTime = performance.now();

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    let response: Response;

    try {
      // 1. Tente une requête HEAD légère
      response = await fetch(targetUrl, {
        method: "HEAD",
        signal: controller.signal,
        headers: { "User-Agent": "PulseBoard-Ping/1.0" },
        cache: "no-store",
      });
    } catch (headErr: any) {
      // 2. Si le HTTPS ou HEAD échoue (ex: IP sans certificat SSL), tente en GET ou HTTP
      if (headErr.name !== "AbortError" && targetUrl.startsWith("https://") && !rawTarget.startsWith("https://")) {
        const httpFallback = `http://${rawTarget}`;
        response = await fetch(httpFallback, {
          method: "GET",
          signal: controller.signal,
          headers: { "User-Agent": "PulseBoard-Ping/1.0" },
          cache: "no-store",
        });
        targetUrl = httpFallback;
      } else {
        throw headErr;
      }
    } finally {
      clearTimeout(timer);
    }

    const latencyMs = Math.round(performance.now() - startTime);
    const status = latencyMs > 400 ? "slow" : "online";

    return NextResponse.json({
      target: rawTarget,
      resolvedUrl: targetUrl,
      status,
      latencyMs,
      statusCode: response.status,
      statusText: response.statusText,
      timestamp: new Date().toISOString(),
      error: null,
    });
  } catch (err: any) {
    const isTimeout = err.name === "AbortError" || err.message?.includes("aborted");

    return NextResponse.json({
      target: rawTarget,
      resolvedUrl: targetUrl,
      status: "offline",
      latencyMs: null,
      statusCode: null,
      timestamp: new Date().toISOString(),
      error: isTimeout ? `Délai d'attente dépassé (${timeoutMs}ms)` : (err.message || "Serveur injoignable"),
    });
  }
}
