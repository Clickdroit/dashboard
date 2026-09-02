import React from "react";

interface WidgetCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/**
 * Conteneur générique réutilisable pour tous les widgets du Dashboard.
 * Fournit une structure visuelle cohérente (titre, icône, actions, contenu).
 */
export function WidgetCard({
  title,
  description,
  icon,
  headerAction,
  className = "",
  children,
}: WidgetCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md p-5 shadow-sm transition hover:border-neutral-700 ${className}`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-4">
        <div className="flex items-center gap-2.5">
          {icon && <span className="text-neutral-400">{icon}</span>}
          <div>
            <h3 className="font-semibold text-neutral-100 text-sm">{title}</h3>
            {description && (
              <p className="text-xs text-neutral-400">{description}</p>
            )}
          </div>
        </div>
        {headerAction && <div>{headerAction}</div>}
      </div>

      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
