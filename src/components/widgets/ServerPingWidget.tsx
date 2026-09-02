"use client";

import React from "react";
import { Activity } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import type { PingTarget, PingCheckResult } from "@/types/widget";

interface ServerPingWidgetProps {
  initialTarget?: PingTarget;
}

/**
 * Widget de surveillance et de ping de serveur.
 * 
 * Ce composant sert de point de départ architectural.
 * Tu peux y implémenter :
 * 1. L'appel à `/api/ping` via fetch (avec useEffect ou bouton manuel)
 * 2. Le calcul et l'affichage de la latence (ms)
 * 3. L'historique des pings récents sous forme de mini-barres ou de sparkline
 * 4. L'intervalle de rafraîchissement automatique (setInterval)
 */
export function ServerPingWidget({ initialTarget }: ServerPingWidgetProps) {
  // TODO: Définir les états pour le serveur cible, les résultats récents et le statut
  // const [target, setTarget] = useState<PingTarget>(initialTarget ?? {
  //   id: "1",
  //   name: "Serveur Principal",
  //   urlOrIp: "https://google.com",
  //   type: "http",
  //   checkInterval: 10,
  // });
  // const [results, setResults] = useState<PingCheckResult[]>([]);
  // const [isPinging, setIsPinging] = useState(false);

  // TODO: Fonction pour déclencher un ping vers l'API interne /api/ping
  // const triggerPing = async () => { ... };

  return (
    <WidgetCard
      title="Surveillance Serveur"
      description="Vérification de latence & disponibilité"
      icon={<Activity className="w-4 h-4 text-emerald-400" />}
    >
      <div className="flex flex-col items-center justify-center p-6 border border-dashed border-neutral-800 rounded-xl bg-neutral-950/40 text-center">
        <Activity className="w-8 h-8 text-neutral-600 mb-2 animate-pulse" />
        <p className="text-sm font-medium text-neutral-300">
          Widget Server Ping prêt à être codé !
        </p>
        <p className="text-xs text-neutral-500 mt-1 max-w-xs">
          Connecte ce composant à <code className="text-emerald-400">/api/ping</code> pour mesurer la latence et l&apos;état en temps réel.
        </p>
      </div>
    </WidgetCard>
  );
}
