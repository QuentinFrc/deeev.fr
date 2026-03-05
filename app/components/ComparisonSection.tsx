"use client";

/* ─────────────────────────────────────────────
   ComparisonSection — "Les autres" vs "deeev"
   Two integration-diagram panels contrasting
   competitor chaos with deeev's execution.
   ───────────────────────────────────────────── */

interface ComparisonSectionProps {
  accentColor?: string;
}

/* ── Tiny SVG icons ── */

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2.5 6.5L5 9L9.5 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M3 3L9 9M9 3L3 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const AlertIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M6 4V6.5M6 8.5V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5.13 1.87L1.05 9A1 1 0 001.92 10.5h8.16a1 1 0 00.87-1.5L6.87 1.87a1 1 0 00-1.74 0z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const GitIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="3" r="1.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="6" cy="9" r="1.5" stroke="currentColor" strokeWidth="1" />
    <path d="M6 4.5V7.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const RocketIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M6 1.5C6 1.5 3 4 3 7L4.5 8.5L6 7.5L7.5 8.5L9 7C9 4 6 1.5 6 1.5Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="5" r="0.75" fill="currentColor" />
  </svg>
);

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1" />
    <path d="M6 3.5V6L7.5 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const ChatIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 2.5H10V8.5H5.5L3 10.5V8.5H2V2.5Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BarChartIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="1.5" y="6" width="2" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
    <rect x="5" y="3.5" width="2" height="7" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
    <rect x="8.5" y="1.5" width="2" height="9" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

const ListIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M4 3H10M4 6H10M4 9H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <circle cx="2" cy="3" r="0.75" fill="currentColor" />
    <circle cx="2" cy="6" r="0.75" fill="currentColor" />
    <circle cx="2" cy="9" r="0.75" fill="currentColor" />
  </svg>
);

/* ── Reusable sub-components ── */

function StatusDot({ color, pulse = false }: { color: string; pulse?: boolean }) {
  return (
    <span className="relative flex items-center justify-center w-2 h-2">
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: color, opacity: 0.4, animationDuration: "2s" }}
        />
      )}
      <span
        className="relative block w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

function Badge({
  children,
  color,
  icon,
}: {
  children: React.ReactNode;
  color: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wide px-1.5 py-0.5 rounded-full border"
      style={{
        color,
        borderColor: `${color}25`,
        backgroundColor: `${color}0c`,
      }}
    >
      {icon}
      {children}
    </span>
  );
}

function SkeletonBar({ width = "100%", delay = "0s" }: { width?: string; delay?: string }) {
  return (
    <div
      className="h-[6px] rounded-full bg-white/[0.04]"
      style={{
        width,
        animation: `comp-skeleton-pulse 2.4s ${delay} ease-in-out infinite`,
      }}
    />
  );
}

function Spinner() {
  return (
    <div
      className="w-3 h-3 rounded-full border border-white/10 border-t-white/30"
      style={{ animation: "comp-spin 1.5s linear infinite" }}
    />
  );
}

/* ── Card wrapper ── */
function DiagramCard({
  children,
  className = "",
  style,
  glow,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glow?: string;
}) {
  return (
    <div
      className={`relative rounded-xl border border-white/[0.06] p-3 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 100%)",
        boxShadow: glow
          ? `0 0 24px -4px ${glow}15, inset 0 1px 0 0 rgba(255,255,255,0.04)`
          : "inset 0 1px 0 0 rgba(255,255,255,0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Connection line (hidden on mobile) ── */
function ConnectionLine({
  variant = "solid",
  color = "rgba(255,255,255,0.06)",
}: {
  variant?: "solid" | "dashed";
  color?: string;
}) {
  return (
    <div
      className="self-center h-px flex-1 min-w-3 hidden sm:block"
      style={{
        background: variant === "dashed" ? "none" : color,
        borderTop: variant === "dashed" ? `1px dashed ${color}` : undefined,
      }}
    />
  );
}

/* ── Card row: 2-col on sm+, stacked on mobile ── */
function CardRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-stretch gap-2">
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   LEFT PANEL — "Les autres" (competitors)
   ═══════════════════════════════════════════ */

function CompetitorPanel() {
  const errorColor = "#ef4444";
  const warnColor = "#f59e0b";
  const muted = "rgba(255,255,255,0.08)";

  return (
    <div className="flex flex-col gap-3">
      {/* Panel header */}
      <div className="flex items-center gap-2 mb-1">
        <StatusDot color={errorColor} />
        <span className="font-geologica font-medium text-[13px] text-white/50">
          Les autres
        </span>
      </div>

      {/* Row 1: Project Status + Deploy */}
      <CardRow>
        {/* Project status — skeleton */}
        <DiagramCard className="flex-1">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-white/20"><BarChartIcon /></span>
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              Projet
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <SkeletonBar width="85%" />
            <SkeletonBar width="60%" delay="0.3s" />
            <SkeletonBar width="72%" delay="0.6s" />
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <Spinner />
            <span className="font-mono text-[9px] text-white/15">Chargement...</span>
          </div>
        </DiagramCard>

        <ConnectionLine variant="dashed" color={muted} />

        {/* Deploy card — error */}
        <DiagramCard className="flex-1">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-white/20"><RocketIcon /></span>
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              Deploy
            </span>
          </div>
          <Badge color={errorColor} icon={<XIcon />}>
            Build failed
          </Badge>
          <div className="mt-2 flex flex-col gap-1">
            <span className="font-mono text-[8px] text-white/12 leading-tight">
              Error: SIGTERM
            </span>
            <span className="font-mono text-[8px] text-white/12 leading-tight">
              Exit code 1 — 0 of 3 tasks
            </span>
          </div>
        </DiagramCard>
      </CardRow>

      {/* Row 2: Issue tracker + Timeline */}
      <CardRow>
        {/* Issue tracker — empty */}
        <DiagramCard className="flex-1">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-white/20"><ListIcon /></span>
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              Tickets
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 py-1 border-b border-white/[0.03] last:border-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/[0.06]" />
                <SkeletonBar width={`${55 + i * 12}%`} delay={`${i * 0.2}s`} />
              </div>
            ))}
          </div>
          <span className="block mt-2 font-mono text-[8px] text-white/12">
            0 / 24 résolu
          </span>
        </DiagramCard>

        <ConnectionLine variant="dashed" color={muted} />

        {/* Timeline — stuck */}
        <DiagramCard className="flex-1">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-white/20"><ClockIcon /></span>
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              Timeline
            </span>
          </div>
          <div className="flex items-center justify-between mb-1.5">
            <Badge color={warnColor} icon={<AlertIcon />}>
              Retard
            </Badge>
            <span className="font-mono text-[8px] text-white/15">Sem. 18</span>
          </div>
          {/* Progress bar — stuck */}
          <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "28%",
                background: `linear-gradient(90deg, ${warnColor}50, ${warnColor}25)`,
              }}
            />
          </div>
          <span className="block mt-1.5 font-mono text-[8px] text-white/12">
            28% — « on est bientôt bons »
          </span>
        </DiagramCard>
      </CardRow>

      {/* Row 3: Changelog + Communication */}
      <CardRow>
        {/* Changelog — empty */}
        <DiagramCard className="flex-1">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-white/20"><GitIcon /></span>
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              Changelog
            </span>
          </div>
          <div className="flex flex-col items-center justify-center py-3 gap-1.5">
            <span className="text-white/10 text-[16px] leading-none">∅</span>
            <span className="font-mono text-[8px] text-white/12">Aucune mise à jour</span>
          </div>
        </DiagramCard>

        <ConnectionLine variant="dashed" color={muted} />

        {/* Communication — dead */}
        <DiagramCard className="flex-1">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-white/20"><ChatIcon /></span>
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              Updates
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/[0.06]" />
              <SkeletonBar width="70%" />
            </div>
            <span className="font-mono text-[8px] text-white/12">
              Dernier msg : il y a 3 sem.
            </span>
          </div>
        </DiagramCard>
      </CardRow>
    </div>
  );
}

/* ═══════════════════════════════════════════
   RIGHT PANEL — "deeev" (us)
   ═══════════════════════════════════════════ */

function DeeevPanel({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Panel header */}
      <div className="flex items-center gap-2 mb-1">
        <StatusDot color={accent} pulse />
        <span className="font-geologica font-medium text-[13px] text-white/80">
          deeev
        </span>
      </div>

      {/* Row 1: Project insights + Deploy */}
      <CardRow>
        {/* Project insights — rich data */}
        <DiagramCard className="flex-1" glow={accent}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span style={{ color: accent }}><BarChartIcon /></span>
            <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
              Insights
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            <div>
              <span
                className="block font-bricolage font-extrabold text-[18px] tracking-tight leading-none"
                style={{ color: accent }}
              >
                12
              </span>
              <span className="font-mono text-[8px] text-white/30">features livrées</span>
            </div>
            <div>
              <span className="block font-bricolage font-extrabold text-[18px] tracking-tight text-white/90 leading-none">
                98%
              </span>
              <span className="font-mono text-[8px] text-white/30">uptime prod</span>
            </div>
            <div>
              <span className="block font-bricolage font-extrabold text-[18px] tracking-tight text-white/90 leading-none">
                5
              </span>
              <span className="font-mono text-[8px] text-white/30">semaines</span>
            </div>
            <div>
              <span className="block font-bricolage font-extrabold text-[18px] tracking-tight text-white/90 leading-none">
                0
              </span>
              <span className="font-mono text-[8px] text-white/30">dette technique</span>
            </div>
          </div>
        </DiagramCard>

        <ConnectionLine color={`${accent}30`} />

        {/* Deploy — success */}
        <DiagramCard className="flex-1" glow={accent}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span style={{ color: accent }}><RocketIcon /></span>
            <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
              Deploy
            </span>
          </div>
          <Badge color={accent} icon={<CheckIcon />}>
            Production
          </Badge>
          <div className="mt-2 flex flex-col gap-1">
            <span className="font-mono text-[8px] text-white/30 leading-tight">
              v1.2.0 — 4 min ago
            </span>
            <span className="font-mono text-[8px] text-white/30 leading-tight">
              ✓ Build · ✓ Tests · ✓ Deploy
            </span>
          </div>
        </DiagramCard>
      </CardRow>

      {/* Row 2: Tickets + Timeline */}
      <CardRow>
        {/* Issue tracker — complete */}
        <DiagramCard className="flex-1" glow={accent}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span style={{ color: accent }}><ListIcon /></span>
            <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
              Tickets
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {["Auth & Permissions", "Dashboard", "API endpoints"].map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-1.5 py-1 border-b border-white/[0.04] last:border-0"
                style={{
                  animation: `comp-fade-in 0.4s ${0.1 + i * 0.12}s both`,
                }}
              >
                <span style={{ color: accent }}><CheckIcon /></span>
                <span className="font-mono text-[9px] text-white/45">{t}</span>
              </div>
            ))}
          </div>
          <span className="block mt-2 font-mono text-[8px]" style={{ color: `${accent}90` }}>
            24 / 24 fermés
          </span>
        </DiagramCard>

        <ConnectionLine color={`${accent}30`} />

        {/* Timeline — done */}
        <DiagramCard className="flex-1" glow={accent}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span style={{ color: accent }}><ClockIcon /></span>
            <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
              Timeline
            </span>
          </div>
          <div className="flex items-center justify-between mb-1.5">
            <Badge color={accent} icon={<CheckIcon />}>
              Livré
            </Badge>
            <span className="font-mono text-[8px] text-white/30">Sem. 5</span>
          </div>
          {/* Progress bar — 100% */}
          <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "100%",
                background: `linear-gradient(90deg, ${accent}, ${accent}90)`,
                animation: "comp-progress-fill 1.5s 0.3s ease-out both",
              }}
            />
          </div>
          <span className="block mt-1.5 font-mono text-[8px] text-white/30">
            100% — dans les temps
          </span>
        </DiagramCard>
      </CardRow>

      {/* Row 3: Changelog + Commits */}
      <CardRow>
        {/* Changelog — rich */}
        <DiagramCard className="flex-1" glow={accent}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span style={{ color: accent }}><GitIcon /></span>
            <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
              Changelog
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { v: "1.2.0", label: "Dashboard analytics" },
              { v: "1.1.0", label: "Auth system" },
              { v: "1.0.0", label: "API v2 + Payments" },
            ].map((entry, i) => (
              <div
                key={entry.v}
                className="flex items-center gap-1.5"
                style={{ animation: `comp-fade-in 0.4s ${0.2 + i * 0.15}s both` }}
              >
                <span
                  className="font-mono text-[8px] px-1 py-px rounded"
                  style={{ backgroundColor: `${accent}15`, color: `${accent}cc` }}
                >
                  {entry.v}
                </span>
                <span className="font-mono text-[9px] text-white/40">{entry.label}</span>
              </div>
            ))}
          </div>
        </DiagramCard>

        <ConnectionLine color={`${accent}30`} />

        {/* Activity — live commits */}
        <DiagramCard className="flex-1" glow={accent}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span style={{ color: accent }}><ChatIcon /></span>
            <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
              Activité
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { time: "2 min", msg: "feat: add export CSV" },
              { time: "1h", msg: "fix: auth token refresh" },
              { time: "3h", msg: "deploy: v1.2.0 prod" },
            ].map((c, i) => (
              <div
                key={c.msg}
                className="flex items-start gap-1.5"
                style={{ animation: `comp-fade-in 0.4s ${0.1 + i * 0.12}s both` }}
              >
                <span className="font-mono text-[7px] text-white/15 pt-px shrink-0 w-[26px] text-right">
                  {c.time}
                </span>
                <span className="font-mono text-[9px] text-white/40 leading-tight">
                  {c.msg}
                </span>
              </div>
            ))}
          </div>
        </DiagramCard>
      </CardRow>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════ */

export default function ComparisonSection({
  accentColor = "#34d399",
}: ComparisonSectionProps) {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Subtle radial glow behind the deeev panel */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/4 rounded-full blur-[160px] opacity-[0.08] pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      <div className="container mx-auto px-6">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
            Pourquoi nous
          </span>
          <h2 className="font-bricolage font-extrabold text-[30px] md:text-[42px] leading-[1.05] tracking-[-1.5px] gradient-text max-w-2xl">
            Ce que vous évitez.
            <br />
            Ce que vous gagnez.
          </h2>
          <p className="font-geologica font-light text-sm text-white/40 leading-relaxed max-w-xl">
            Même projet, même ambition — deux réalités. À gauche, le parcours classique. À
            droite, ce qu'on livre.
          </p>
        </div>

        {/* ── Two panels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Competitor panel — desaturated, muted */}
          <div
            className="rounded-2xl border border-white/[0.04] p-4 md:p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.012) 0%, rgba(255,255,255,0.003) 100%)",
            }}
          >
            <CompetitorPanel />
          </div>

          {/* Deeev panel — alive, emerald glow */}
          <div
            className="rounded-2xl border p-4 md:p-6"
            style={{
              borderColor: `${accentColor}15`,
              background: `
                linear-gradient(180deg, ${accentColor}06 0%, transparent 60%),
                linear-gradient(180deg, rgba(255,255,255,0.012) 0%, rgba(255,255,255,0.003) 100%)
              `,
            }}
          >
            <DeeevPanel accent={accentColor} />
          </div>
        </div>
      </div>

      {/* ── Inline keyframes for component animations ── */}
      <style jsx global>{`
        @keyframes comp-skeleton-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes comp-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes comp-fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes comp-progress-fill {
          from { width: 0; }
        }
      `}</style>
    </section>
  );
}
