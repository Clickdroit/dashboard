import React from "react";
import { LayoutDashboard, Plus, RefreshCw } from "lucide-react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

/**
 * En-tête principal du Dashboard.
 * Comprend le titre, le statut global et des boutons d'actions prêts à brancher.
 */
export function Header({
  title = "DevPulse Dashboard",
  subtitle = "Cockpit personnel & surveillance modulaire",
}: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6 mb-8">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <LayoutDashboard className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-neutral-100">
            {title}
          </h1>
          <p className="text-xs text-neutral-400">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* TODO: Connecter ces boutons aux futures actions (ex: actualiser tous les widgets, modal d'ajout de widget) */}
        <button
          type="button"
          aria-label="Rafraîchir les widgets"
          className="p-2 text-neutral-400 hover:text-neutral-200 rounded-lg hover:bg-neutral-800 transition"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Ajouter un widget</span>
        </button>
      </div>
    </header>
  );
}
