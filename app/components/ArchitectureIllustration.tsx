"use client";

/**
 * Animated abstract architecture illustration for the MVP page.
 * Shows interconnected service nodes (Vercel, OpenAI, Neon, Stripe)
 * with animated data-flow paths, pulsing rings and floating particles.
 * Pure CSS animations — no JS runtime overhead.
 */

/* ── Service node definitions ── */
const SERVICES = [
  {
    id: "vercel",
    label: "Vercel",
    x: 420,
    y: 100,
    logo: (
      <path
        d="M12 2L2 19.5h20L12 2z"
        fill="white"
        fillOpacity={0.9}
      />
    ),
  },
  {
    id: "openai",
    label: "OpenAI",
    x: 140,
    y: 240,
    logo: (
      <g transform="translate(-1, -1) scale(1.08)">
        <path
          d="M20.56 10.73a6.55 6.55 0 00-.56-5.37A6.62 6.62 0 0012.83 1a6.6 6.6 0 00-6.28 4.47 6.55 6.55 0 00-4.38 3.17 6.62 6.62 0 00.81 7.76 6.55 6.55 0 00.56 5.37A6.62 6.62 0 0010.7 25.4a6.6 6.6 0 006.28-4.47 6.55 6.55 0 004.38-3.17 6.62 6.62 0 00-.81-7.76zM10.7 23.4a4.93 4.93 0 01-3.16-1.14l.16-.09 5.25-3.03a.86.86 0 00.43-.74v-7.4l2.22 1.28a.08.08 0 01.04.06v6.13a4.95 4.95 0 01-4.94 4.93zm-10.63-4.53a4.92 4.92 0 01-.59-3.32l.16.1 5.25 3.03a.85.85 0 00.86 0l6.41-3.7v2.56a.08.08 0 01-.03.07l-5.31 3.07a4.95 4.95 0 01-6.75-1.81zm-1.38-11.46a4.93 4.93 0 012.57-2.17v6.23a.85.85 0 00.43.74l6.41 3.7-2.22 1.28a.08.08 0 01-.07 0L.5 14.13a4.95 4.95 0 01-1.81-6.72zm18.27 4.25l-6.41-3.7 2.22-1.28a.08.08 0 01.07 0l5.31 3.07a4.94 4.94 0 01-.76 8.91v-6.26a.86.86 0 00-.43-.74zm2.21-3.35l-.16-.1-5.25-3.03a.85.85 0 00-.86 0l-6.41 3.7V6.32a.08.08 0 01.03-.07l5.31-3.06a4.95 4.95 0 017.34 5.12zm-13.9 4.56L3.01 12.6a.08.08 0 01-.04-.06V6.41a4.94 4.94 0 018.1-3.79l-.16.09L5.66 5.74a.86.86 0 00-.43.74l-.01 7.39zm1.2-2.6l2.86-1.65 2.86 1.65v3.3l-2.86 1.65-2.86-1.65v-3.3z"
          fill="white"
          fillOpacity={0.9}
          transform="translate(0.5, 0) scale(0.48)"
        />
      </g>
    ),
  },
  {
    id: "neon",
    label: "Neon",
    x: 700,
    y: 240,
    logo: (
      <g>
        <path
          d="M4 5.5a1.5 1.5 0 011.5-1.5h3.09a1.5 1.5 0 011.41 1l2.84 7.83V5.5A1.5 1.5 0 0114.34 4h3.16A1.5 1.5 0 0119 5.5v13.09a1.5 1.5 0 01-1.5 1.5h-3.09a1.5 1.5 0 01-1.41-1L10.16 11.26V18.5A1.5 1.5 0 018.66 20H5.5A1.5 1.5 0 014 18.5V5.5z"
          fill="white"
          fillOpacity={0.9}
          transform="translate(0.5, 0)"
        />
      </g>
    ),
  },
  {
    id: "stripe",
    label: "Stripe",
    x: 420,
    y: 380,
    logo: (
      <path
        d="M13.98 8.63c0-1.07.88-1.48 2.33-1.48 2.08 0 4.71.63 6.79 1.76V3.2A18.2 18.2 0 0016.31 2C11.2 2 7.73 4.58 7.73 8.95c0 6.73 9.27 5.65 9.27 8.55 0 1.26-1.1 1.67-2.63 1.67-2.27 0-5.18-.93-7.49-2.19v5.82A19.02 19.02 0 0014.37 24c5.23 0 8.82-2.59 8.82-6.99-.01-7.27-9.21-5.97-9.21-8.38z"
        fill="white"
        fillOpacity={0.9}
        transform="translate(-1, 0) scale(0.95)"
      />
    ),
  },
] as const;

/* ── Animated connection paths between services ── */
const CONNECTIONS = [
  { from: "vercel", to: "openai", path: "M380,120 C280,120 200,160 180,220" },
  { from: "vercel", to: "neon", path: "M460,120 C560,120 640,160 660,220" },
  { from: "vercel", to: "stripe", path: "M420,140 C420,220 420,300 420,360" },
  { from: "openai", to: "neon", path: "M200,260 C320,300 520,300 640,260" },
  { from: "openai", to: "stripe", path: "M180,280 C240,340 340,380 380,380" },
  { from: "neon", to: "stripe", path: "M660,280 C600,340 520,380 460,380" },
];

/* ── Floating ambient particles ── */
const PARTICLES = [
  { cx: 90, cy: 130, r: 2, delay: 0 },
  { cx: 750, cy: 150, r: 1.5, delay: 1.2 },
  { cx: 300, cy: 50, r: 1.8, delay: 2.4 },
  { cx: 550, cy: 430, r: 2, delay: 0.8 },
  { cx: 100, cy: 400, r: 1.5, delay: 3.1 },
  { cx: 730, cy: 410, r: 1.8, delay: 1.8 },
  { cx: 200, cy: 80, r: 1.2, delay: 0.5 },
  { cx: 640, cy: 60, r: 1.4, delay: 2.0 },
];

/* ── Decorative orbit rings ── */
function OrbitRing({ cx, cy, r, delay, accent }: { cx: number; cy: number; r: number; delay: number; accent: string }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={accent}
      strokeWidth="0.5"
      strokeOpacity="0.12"
      strokeDasharray="6 8"
      className="arch-orbit"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

/* ── Service node with logo, rings and glow ── */
function ServiceNode({
  x,
  y,
  label,
  logo,
  accent,
  delay,
}: {
  x: number;
  y: number;
  label: string;
  logo: React.ReactNode;
  accent: string;
  delay: number;
}) {
  return (
    <g
      className="arch-node"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Glow */}
      <circle cx={x} cy={y} r="52" fill={`url(#glow-${label})`} opacity="0.5" />

      {/* Outer pulsing ring */}
      <circle
        cx={x}
        cy={y}
        r="40"
        fill="none"
        stroke={accent}
        strokeWidth="0.8"
        strokeOpacity="0.15"
        className="arch-pulse-ring"
        style={{ animationDelay: `${delay + 0.5}s` }}
      />

      {/* Inner ring */}
      <circle
        cx={x}
        cy={y}
        r="32"
        fill="none"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.08"
      />

      {/* Node body */}
      <circle
        cx={x}
        cy={y}
        r="28"
        fill="#101010"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <circle
        cx={x}
        cy={y}
        r="28"
        fill="url(#nodeGradient)"
      />

      {/* Logo */}
      <g transform={`translate(${x - 12}, ${y - 12}) scale(1)`}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          {logo}
        </svg>
      </g>

      {/* Label */}
      <text
        x={x}
        y={y + 50}
        textAnchor="middle"
        fill="white"
        fillOpacity="0.4"
        fontSize="10"
        fontFamily="var(--font-geist-mono), monospace"
        letterSpacing="0.1em"
        className="uppercase"
      >
        {label}
      </text>
    </g>
  );
}

/* ── Animated connection with flowing data particles ── */
function Connection({
  path,
  accent,
  delay,
}: {
  path: string;
  accent: string;
  delay: number;
}) {
  return (
    <g>
      {/* Base path */}
      <path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.04"
      />
      {/* Animated flow */}
      <path
        d={path}
        fill="none"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.2"
        strokeDasharray="4 20"
        className="arch-flow"
        style={{ animationDelay: `${delay}s` }}
      />
      {/* Traveling particle */}
      <circle r="2.5" fill={accent} opacity="0.6" className="arch-particle-travel" style={{ animationDelay: `${delay}s` }}>
        <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
          <mpath href={`#flow-${delay}`} />
        </animateMotion>
      </circle>
      {/* Hidden path for animateMotion */}
      <path id={`flow-${delay}`} d={path} fill="none" stroke="none" />
    </g>
  );
}

/* ── Main component ── */
export default function ArchitectureIllustration({ accentColor = "#f87171" }: { accentColor?: string }) {
  return (
    <div className="relative w-full max-w-[860px] mx-auto">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${accentColor}08, transparent 70%)`,
        }}
      />

      <svg
        viewBox="0 0 840 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Architecture infrastructure animée : Vercel, OpenAI, Neon et Stripe interconnectés"
        role="img"
      >
        <defs>
          {/* Node body gradient */}
          <radialGradient id="nodeGradient" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0.01" />
          </radialGradient>

          {/* Per-service glow gradients */}
          {SERVICES.map((s) => (
            <radialGradient key={s.id} id={`glow-${s.label}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.15" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
          ))}

          {/* Central radial fade */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.06" />
            <stop offset="70%" stopColor={accentColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background grid dots */}
        <g opacity="0.15">
          {Array.from({ length: 21 }).map((_, col) =>
            Array.from({ length: 12 }).map((_, row) => (
              <circle
                key={`${col}-${row}`}
                cx={col * 42}
                cy={row * 42 + 6}
                r="0.6"
                fill="white"
              />
            ))
          )}
        </g>

        {/* Central glow */}
        <ellipse cx="420" cy="240" rx="260" ry="180" fill="url(#centerGlow)" />

        {/* Decorative orbit rings */}
        <OrbitRing cx={420} cy={240} r={120} delay={0} accent={accentColor} />
        <OrbitRing cx={420} cy={240} r={190} delay={2} accent={accentColor} />
        <OrbitRing cx={420} cy={240} r={260} delay={4} accent="white" />

        {/* Connections */}
        {CONNECTIONS.map((conn, i) => (
          <Connection
            key={`${conn.from}-${conn.to}`}
            path={conn.path}
            accent={accentColor}
            delay={i * 0.7}
          />
        ))}

        {/* Service nodes */}
        {SERVICES.map((service, i) => (
          <ServiceNode
            key={service.id}
            x={service.x}
            y={service.y}
            label={service.label}
            logo={service.logo}
            accent={accentColor}
            delay={i * 0.2}
          />
        ))}

        {/* Floating ambient particles */}
        {PARTICLES.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={i % 2 === 0 ? accentColor : "white"}
            opacity="0.25"
            className="arch-float-particle"
            style={{ animationDelay: `${p.delay}s` }}
          />
        ))}

        {/* Central label */}
        <text
          x="420"
          y="245"
          textAnchor="middle"
          fill="white"
          fillOpacity="0.08"
          fontSize="13"
          fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="0.25em"
        >
          YOUR PRODUCT
        </text>
      </svg>
    </div>
  );
}
