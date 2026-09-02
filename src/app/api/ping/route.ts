import { NextRequest, NextResponse } from "next/server";

/**
 * Route API pour tester l'accessibilité et la latence d'un serveur.
 * 
 * TODO pour tes prochains commits :
 * 1. Récupérer l'URL ou l'adresse IP depuis la requête (query param ou body)
 * 2. Mesurer le temps d'exécution avec `performance.now()`
 * 3. Effectuer un `fetch(url, { method: "HEAD", signal: AbortSignal.timeout(...) })`
 * 4. Renvoyer le statut ('online' | 'offline'), la latence (ms) et le statusCode HTTP
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const targetUrl = searchParams.get("url") || "https://google.com";

  // Squelette de réponse en attendant ton implémentation :
  return NextResponse.json({
    message: "Endpoint de ping prêt à être implémenté !",
    target: targetUrl,
    status: "pending",
    timestamp: new Date().toISOString(),
    // TODO: retourne la vraie latence et le statut une fois le code écrit
    latencyMs: null,
  });
}
