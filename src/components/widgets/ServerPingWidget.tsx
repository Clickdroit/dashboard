"use client";

import React, { useState, useEffect, useRef } from "react";
import { Activity, Play, RefreshCw, Globe, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { WidgetCard } from "./WidgetCard";

interface PingHistoryItem {
  id: string;
  latencyMs: number | null;
  status: "online" | "slow" | "offline";
  timestamp: string;
}

interface PingResponse {
  target: string;
  resolvedUrl: string;
  status: "online" | "slow" | "offline";
  latencyMs: number | null;
  statusCode: number | null;
  statusText?: string;
  timestamp: string;
  error: string | null;
}

const PRESETS = [
  { name: "Google", url: "google.com" },
  { name: "Cloudflare", url: "1.1.1.1" },
  { name: "GitHub", url: "github.com" },
];

export function ServerPingWidget() {
  const [target, setTarget] = useState("google.com");
  const [isPinging, setIsPinging] = useState(false);
  const [currentResult, setCurrentResult] = useState<PingResponse | null>(null);
  const [history, setHistory] = useState<PingHistoryItem[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(false);

  // Fonction pour exécuter le ping
  const executePing = async (urlToPing: string = target) => {
    if (!urlToPing.trim() || isPinging) return;

    setIsPinging(true);
    try {
      const res = await fetch(`/api/ping?url=${encodeURIComponent(urlToPing.trim())}`);
      const data: PingResponse = await res.json();

      setCurrentResult(data);

      setHistory((prev) => [
        ...prev.slice(-9), // Conserve les 10 derniers
        {
          id: Math.random().toString(36).substring(7),
          latencyMs: data.latencyMs,
          status: data.status,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (err: any) {
      setCurrentResult({
        target: urlToPing,
        resolvedUrl: urlToPing,
        status: "offline",
        latencyMs: null,
        statusCode: null,
        timestamp: new Date().toISOString(),
        error: err.message || "Erreur de connexion",
      });
    } finally {
      setIsPinging(false);
    }
  };

  // Gestion du rafraîchissement automatique
  useEffect(() => {
    if (!autoRefresh) return;

    // Premier ping immédiat
    executePing();

    const interval = setInterval(() => {
      executePing();
    }, 10000); // toutes les 10 secondes

    return () => clearInterval(interval);
  }, [autoRefresh, target]);

  return (
    <WidgetCard
      title="Surveillance Serveur"
      description="Mesure de latence & état d'un serveur distant"
      icon={<Activity className="w-4 h-4 text-emerald-400" />}
      headerAction={
        <label className="flex items-center gap-1.5 text-xs text-neutral-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.checked)}
            className="rounded border-neutral-700 bg-neutral-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-neutral-900 cursor-pointer"
          />
          <span>Auto (10s)</span>
        </label>
      }
    >
      <div className="flex flex-col gap-4">
        {/* Formulaire de saisie de l'hôte / IP / URL */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && executePing()}
              placeholder="ex: 1.1.1.1 ou google.com"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
          <button
            type="button"
            onClick={() => executePing()}
            disabled={isPinging || !target.trim()}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-neutral-950 font-medium text-xs transition"
          >
            {isPinging ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>Ping</span>
          </button>
        </div>

        {/* Raccourcis / Préréglages rapides */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-neutral-500">Préréglages :</span>
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => {
                setTarget(preset.url);
                executePing(preset.url);
              }}
              className="px-2 py-0.5 text-[11px] rounded-md bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Résultat du test */}
        {currentResult ? (
          <div className="flex flex-col gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-850">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {currentResult.status === "online" && (
                  <>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">En ligne</span>
                  </>
                )}
                {currentResult.status === "slow" && (
                  <>
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="text-xs font-semibold text-amber-400">Latence élevée</span>
                  </>
                )}
                {currentResult.status === "offline" && (
                  <>
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs font-semibold text-rose-400">Injoignable</span>
                  </>
                )}
              </div>

              {currentResult.statusCode && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono">
                  HTTP {currentResult.statusCode}
                </span>
              )}
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-bold font-mono tracking-tight text-neutral-100">
                  {currentResult.latencyMs !== null ? `${currentResult.latencyMs}` : "---"}
                </span>
                {currentResult.latencyMs !== null && (
                  <span className="text-xs text-neutral-400 ml-1">ms</span>
                )}
              </div>
              <span className="text-[11px] text-neutral-500 truncate max-w-[150px]">
                {currentResult.resolvedUrl}
              </span>
            </div>

            {currentResult.error && (
              <div className="flex items-center gap-1.5 text-[11px] text-rose-400/90 bg-rose-500/10 border border-rose-500/20 p-2 rounded-lg">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{currentResult.error}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 border border-dashed border-neutral-800 rounded-xl bg-neutral-950/20 text-center">
            <Clock className="w-6 h-6 text-neutral-600 mb-1.5" />
            <p className="text-xs text-neutral-400">
              Saisis une URL ou IP ci-dessus et clique sur Ping pour tester.
            </p>
          </div>
        )}

        {/* Historique des pings récents (Mini sparkline) */}
        {history.length > 0 && (
          <div>
            <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1.5">
              <span>Historique récent</span>
              <span>{history.length} requêtes</span>
            </div>
            <div className="flex items-end gap-1.5 h-10 bg-neutral-950/40 p-1.5 rounded-lg border border-neutral-850">
              {history.map((item) => {
                const maxLatency = 500;
                const heightPercent = item.latencyMs
                  ? Math.min(100, Math.max(15, (item.latencyMs / maxLatency) * 100))
                  : 100;

                const bgColor =
                  item.status === "online"
                    ? "bg-emerald-500/80 hover:bg-emerald-400"
                    : item.status === "slow"
                    ? "bg-amber-500/80 hover:bg-amber-400"
                    : "bg-rose-500/80 hover:bg-rose-400";

                return (
                  <div
                    key={item.id}
                    title={`${item.timestamp} : ${item.latencyMs !== null ? `${item.latencyMs}ms` : "Échec"}`}
                    style={{ height: `${heightPercent}%` }}
                    className={`flex-1 rounded-sm transition-all ${bgColor} cursor-pointer`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </WidgetCard>
  );
}
