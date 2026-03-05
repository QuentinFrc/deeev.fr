/* ─────────────────────────────────────────────
   Data definitions for the integration diagram
   ───────────────────────────────────────────── */

export interface NodeContent {
  label: string;
  badge: string;
  detail: string;
}

export interface DiagramNode {
  id: string;
  /** Position in the 1000×562 viewBox coordinate space */
  x: number;
  y: number;
  stateA: NodeContent;
  stateB: NodeContent;
  /** Color used in State A */
  colorA: "error" | "warning";
}

export interface DiagramConnection {
  from: string;
  to: string;
  /** Which state this connection belongs to */
  state: "a" | "b";
}

/* ── Color tokens ── */
export const COLORS = {
  error: "#ef4444",
  warning: "#f59e0b",
  accent: "#34d399",
  muted: "rgba(255,255,255,0.06)",
} as const;

/* ── Hub node (State B only) ── */
export const HUB = { id: "hub", x: 480, y: 280 } as const;

/* ── Problem / Solution nodes ── */
export const NODES: DiagramNode[] = [
  {
    id: "agency",
    x: 120,
    y: 100,
    colorA: "warning",
    stateA: {
      label: "Agence web",
      badge: "3-6 mois",
      detail: "Process interminable, roadmap gonflée",
    },
    stateB: {
      label: "Sprint 5 sem.",
      badge: "Livré",
      detail: "Scope fixe, budget fixe, produit live",
    },
  },
  {
    id: "freelance",
    x: 320,
    y: 68,
    colorA: "error",
    stateA: {
      label: "Freelance",
      badge: "Fragmenté",
      detail: "Pas de duo design / dev",
    },
    stateB: {
      label: "Duo Design + Dev",
      badge: "Intégré",
      detail: "UX et architecture pensées ensemble",
    },
  },
  {
    id: "nocode",
    x: 550,
    y: 124,
    colorA: "warning",
    stateA: {
      label: "No-code",
      badge: "Limité",
      detail: "Plafond technique, réécriture obligatoire",
    },
    stateB: {
      label: "Code pro",
      badge: "Scalable",
      detail: "Architecture propre, zéro dette technique",
    },
  },
  {
    id: "throwaway",
    x: 780,
    y: 84,
    colorA: "error",
    stateA: {
      label: "Code jetable",
      badge: "Casse",
      detail: "Hacks rapides, crash en production",
    },
    stateB: {
      label: "Archi solide",
      badge: "Production",
      detail: "Code testé, documenté, évolutif",
    },
  },
  {
    id: "internal",
    x: 140,
    y: 400,
    colorA: "error",
    stateA: {
      label: "Équipe interne",
      badge: "150k+ / an",
      detail: "Recrutement 3 mois, salaires, management",
    },
    stateB: {
      label: "Prix fixe",
      badge: "15-30k",
      detail: "Budget maîtrisé, zéro surprise",
    },
  },
  {
    id: "ttm",
    x: 480,
    y: 460,
    colorA: "error",
    stateA: {
      label: "Time-to-market",
      badge: "4-8 mois",
      detail: "Pas de feedback, zéro traction",
    },
    stateB: {
      label: "MVP en 5 sem.",
      badge: "5 semaines",
      detail: "Face à vos users en 35 jours",
    },
  },
  {
    id: "provider",
    x: 800,
    y: 420,
    colorA: "warning",
    stateA: {
      label: "Prestataire",
      badge: "Écrans",
      detail: "On livre du code, pas un produit",
    },
    stateB: {
      label: "Vision produit",
      badge: "Produit",
      detail: "Scope challengé, priorités claires",
    },
  },
];

/* ── Connections ── */

/** State A: tangled broken connections between problem nodes */
export const CONNECTIONS_A: DiagramConnection[] = [
  { from: "agency", to: "freelance", state: "a" },
  { from: "freelance", to: "nocode", state: "a" },
  { from: "nocode", to: "throwaway", state: "a" },
  { from: "agency", to: "internal", state: "a" },
  { from: "internal", to: "ttm", state: "a" },
  { from: "ttm", to: "provider", state: "a" },
];

/** State B: clean hub-and-spoke from deeev hub to each node */
export const CONNECTIONS_B: DiagramConnection[] = NODES.map((n) => ({
  from: "hub",
  to: n.id,
  state: "b" as const,
}));

/* ── Helper: compute a cubic Bézier path between two points ── */
export function computeBezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  // Control point offset: bend perpendicular to the line
  const cx = Math.abs(dx) * 0.4;
  const cy = Math.abs(dy) * 0.4;

  // Predominantly horizontal → vertical control offset
  // Predominantly vertical → horizontal control offset
  if (Math.abs(dx) > Math.abs(dy)) {
    return `M ${x1},${y1} C ${x1 + cx},${y1}, ${x2 - cx},${y2}, ${x2},${y2}`;
  }
  return `M ${x1},${y1} C ${x1},${y1 + cy}, ${x2},${y2 - cy}, ${x2},${y2}`;
}
