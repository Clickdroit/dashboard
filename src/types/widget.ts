/**
 * Types de base pour l'architecture du Dashboard modulaire
 */

export type WidgetType = 
  | 'server-ping'
  | 'system-info'
  | 'quick-notes'
  | 'github-streak'
  | 'weather'
  | 'custom';

export interface WidgetMetadata {
  id: string;
  type: WidgetType;
  title: string;
  description?: string;
  enabled: boolean;
  colSpan?: 1 | 2 | 3 | 4; // Largeur sur la grille (1 à 4 colonnes)
  rowSpan?: 1 | 2;
}

/**
 * Types spécifiques pour le widget de Ping / Surveillance de serveur
 */
export type ServerStatus = 'online' | 'offline' | 'slow' | 'pending';

export interface PingTarget {
  id: string;
  name: string;
  urlOrIp: string;
  type: 'http' | 'tcp';
  checkInterval: number; // Intervalle en secondes
}

export interface PingCheckResult {
  timestamp: string;
  status: ServerStatus;
  latencyMs: number | null;
  statusCode?: number;
  errorMessage?: string;
}

export interface ServerPingWidgetState {
  target: PingTarget;
  currentStatus: ServerStatus;
  lastLatency: number | null;
  history: PingCheckResult[]; // Pour alimenter un graphique de latence
  isChecking: boolean;
}
