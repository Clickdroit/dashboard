import React from "react";

interface WidgetGridProps {
  children: React.ReactNode;
}

/**
 * Grille responsive pour organiser les widgets en colonnes modulaires.
 */
export function WidgetGrid({ children }: WidgetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {children}
    </div>
  );
}
