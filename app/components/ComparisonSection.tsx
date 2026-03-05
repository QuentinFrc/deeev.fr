"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  NODES,
  HUB,
  CONNECTIONS_A,
  CONNECTIONS_B,
  COLORS,
  computeBezierPath,
  type DiagramNode,
  type NodeContent,
} from "./comparison-data";

/* ─────────────────────────────────────────────
   ComparisonSection — Integration diagram
   Scroll-driven transition: State A (problems)
   → State B (solutions hub-and-spoke)
   ───────────────────────────────────────────── */

interface ComparisonSectionProps {
  accentColor?: string;
}

/* ── Viewbox constants ── */
const VB_W = 1000;
const VB_H = 562;

/* ── Tiny reusable sub-components ── */

function StatusDot({ color, pulse = false }: { color: string; pulse?: boolean }) {
  return (
    <span className="relative flex items-center justify-center w-2 h-2">
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: color, opacity: 0.4, animationDuration: "2s" }}
        />
      )}
      <span className="relative block w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wide px-1.5 py-0.5 rounded-full border whitespace-nowrap"
      style={{
        color,
        borderColor: `${color}25`,
        backgroundColor: `${color}0c`,
      }}
    >
      {children}
    </span>
  );
}

/* ── Single diagram node ── */

function DiagramNodeEl({
  node,
  accent,
}: {
  node: DiagramNode;
  accent: string;
}) {
  const colorA = COLORS[node.colorA];
  const leftPct = (node.x / VB_W) * 100;
  const topPct = (node.y / VB_H) * 100;

  return (
    <div
      data-node={node.id}
      className="diagram-node absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        willChange: "transform, opacity",
      }}
    >
      <div
        className="diagram-node-card rounded-xl border border-white/[0.06] px-3 py-2.5 min-w-[130px] max-w-[170px] transition-all duration-700"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 100%)",
          boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* State A content */}
        <div className="node-state-a transition-opacity duration-500">
          <div className="flex items-center gap-1.5 mb-1.5">
            <StatusDot color={colorA} />
            <span className="font-mono text-[10px] text-white/40 font-medium truncate">
              {node.stateA.label}
            </span>
          </div>
          <Badge color={colorA}>{node.stateA.badge}</Badge>
          <p className="mt-1.5 font-geologica text-[9px] text-white/25 leading-tight">
            {node.stateA.detail}
          </p>
        </div>

        {/* State B content */}
        <div className="node-state-b transition-opacity duration-500 absolute inset-0 px-3 py-2.5 opacity-0">
          <div className="flex items-center gap-1.5 mb-1.5">
            <StatusDot color={accent} pulse />
            <span className="font-mono text-[10px] text-white/70 font-medium truncate">
              {node.stateB.label}
            </span>
          </div>
          <Badge color={accent}>{node.stateB.badge}</Badge>
          <p className="mt-1.5 font-geologica text-[9px] text-white/40 leading-tight">
            {node.stateB.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Hub node (State B only) ── */

function HubNode({ accent }: { accent: string }) {
  const leftPct = (HUB.x / VB_W) * 100;
  const topPct = (HUB.y / VB_H) * 100;

  return (
    <div
      data-node="hub"
      className="diagram-hub absolute -translate-x-1/2 -translate-y-1/2 opacity-0 scale-90 transition-all duration-700 ease-out"
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        willChange: "transform, opacity",
      }}
    >
      <div
        className="rounded-2xl border px-5 py-3.5 flex items-center gap-2.5"
        style={{
          borderColor: `${accent}30`,
          background: `linear-gradient(135deg, ${accent}12 0%, ${accent}06 100%)`,
          boxShadow: `0 0 40px -8px ${accent}20, inset 0 1px 0 0 rgba(255,255,255,0.06)`,
        }}
      >
        <StatusDot color={accent} pulse />
        <span
          className="font-bricolage font-extrabold text-[16px] tracking-tight"
          style={{ color: accent }}
        >
          deeev
        </span>
      </div>
    </div>
  );
}

/* ── SVG connection paths ── */

function getNodeCenter(id: string): { x: number; y: number } {
  if (id === "hub") return { x: HUB.x, y: HUB.y };
  const node = NODES.find((n) => n.id === id);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

function SvgConnections({ accent }: { accent: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {/* State A connections — dashed, muted red/warning */}
      {CONNECTIONS_A.map((conn) => {
        const from = getNodeCenter(conn.from);
        const to = getNodeCenter(conn.to);
        const d = computeBezierPath(from.x, from.y, to.x, to.y);
        return (
          <path
            key={`a-${conn.from}-${conn.to}`}
            className="conn-a transition-all duration-700"
            d={d}
            stroke={COLORS.error}
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="6 4"
            fill="none"
          />
        );
      })}

      {/* State B connections — solid, accent, glow */}
      {CONNECTIONS_B.map((conn) => {
        const from = getNodeCenter(conn.from);
        const to = getNodeCenter(conn.to);
        const d = computeBezierPath(from.x, from.y, to.x, to.y);
        return (
          <path
            key={`b-${conn.from}-${conn.to}`}
            className="conn-b transition-all duration-700"
            d={d}
            stroke={accent}
            strokeWidth="1.5"
            strokeOpacity="0"
            strokeDasharray="500"
            strokeDashoffset="500"
            fill="none"
            style={{ filter: `drop-shadow(0 0 4px ${accent}30)` }}
          />
        );
      })}
    </svg>
  );
}

/* ── Mobile card list ── */

function MobileCard({
  node,
  accent,
}: {
  node: DiagramNode;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const colorA = COLORS[node.colorA];

  return (
    <div
      ref={ref}
      data-visible="false"
      className="mobile-card rounded-xl border border-white/[0.06] p-4 transition-all duration-700"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 100%)",
      }}
    >
      {/* State A */}
      <div className="mobile-state-a transition-all duration-500">
        <div className="flex items-center gap-2 mb-2">
          <StatusDot color={colorA} />
          <span className="font-mono text-[11px] text-white/40 font-medium">
            {node.stateA.label}
          </span>
          <Badge color={colorA}>{node.stateA.badge}</Badge>
        </div>
        <p className="font-geologica text-[11px] text-white/25 leading-relaxed">
          {node.stateA.detail}
        </p>
      </div>
      {/* State B — revealed when visible */}
      <div className="mobile-state-b opacity-0 max-h-0 overflow-hidden transition-all duration-500">
        <div className="h-px bg-white/[0.06] my-3" />
        <div className="flex items-center gap-2 mb-2">
          <StatusDot color={accent} pulse />
          <span className="font-mono text-[11px] text-white/70 font-medium">
            {node.stateB.label}
          </span>
          <Badge color={accent}>{node.stateB.badge}</Badge>
        </div>
        <p className="font-geologica text-[11px] text-white/40 leading-relaxed">
          {node.stateB.detail}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════ */

export default function ComparisonSection({
  accentColor = "#34d399",
}: ComparisonSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const rafRef = useRef<number>(0);

  const updateDiagram = useCallback(
    (progress: number) => {
      const container = diagramRef.current;
      if (!container) return;

      // Determine state: A < 0.3, transition 0.3-0.7, B > 0.7
      const stateB = progress > 0.5;

      // Update container data attribute for CSS-driven transitions
      container.setAttribute("data-state", stateB ? "b" : "a");

      // Continuous progress for smooth interpolation
      container.style.setProperty("--diagram-progress", String(progress));

      // Update State A connection opacity (fade out)
      const connsA = container.querySelectorAll<SVGPathElement>(".conn-a");
      const aOpacity = Math.max(0, 1 - progress * 2.5);
      connsA.forEach((p) => {
        p.style.strokeOpacity = String(aOpacity * 0.25);
      });

      // Update State B connections (draw in)
      const connsB = container.querySelectorAll<SVGPathElement>(".conn-b");
      const bProgress = Math.max(0, (progress - 0.3) / 0.5);
      connsB.forEach((p) => {
        const drawProgress = Math.min(1, bProgress);
        p.style.strokeOpacity = String(drawProgress * 0.6);
        p.style.strokeDashoffset = String(500 * (1 - drawProgress));
      });

      // Update nodes: swap A/B content
      const nodes = container.querySelectorAll<HTMLDivElement>(".diagram-node");
      nodes.forEach((n) => {
        const stateAEl = n.querySelector<HTMLDivElement>(".node-state-a");
        const stateBEl = n.querySelector<HTMLDivElement>(".node-state-b");
        if (stateAEl && stateBEl) {
          stateAEl.style.opacity = stateB ? "0" : "1";
          stateBEl.style.opacity = stateB ? "1" : "0";
        }
        // Glow on state B
        const card = n.querySelector<HTMLDivElement>(".diagram-node-card");
        if (card) {
          card.style.boxShadow = stateB
            ? `0 0 24px -4px ${accentColor}15, inset 0 1px 0 0 rgba(255,255,255,0.06)`
            : "inset 0 1px 0 0 rgba(255,255,255,0.04)";
          card.style.borderColor = stateB
            ? `${accentColor}20`
            : "rgba(255,255,255,0.06)";
        }
      });

      // Hub node appearance
      const hub = container.querySelector<HTMLDivElement>(".diagram-hub");
      if (hub) {
        const hubProgress = Math.max(0, (progress - 0.35) / 0.3);
        hub.style.opacity = String(Math.min(1, hubProgress));
        hub.style.transform = `translate(-50%, -50%) scale(${0.9 + 0.1 * Math.min(1, hubProgress)})`;
      }
    },
    [accentColor],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        // Progress from 0 when section enters to 1 when section is scrolled past center
        const progress = Math.min(
          1,
          Math.max(0, (vh - rect.top) / (vh + rect.height * 0.4)),
        );
        if (Math.abs(progress - progressRef.current) > 0.001) {
          progressRef.current = progress;
          updateDiagram(progress);
        }
      });
    };

    // Initial check
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateDiagram]);

  return (
    <section ref={sectionRef} className="py-16 md:py-28 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] opacity-[0.06] pointer-events-none"
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
            droite, ce qu&apos;on livre.
          </p>
        </div>

        {/* ── Desktop: Integration diagram ── */}
        <div
          ref={diagramRef}
          data-state="a"
          className="hidden md:block relative w-full"
          style={{ aspectRatio: `${VB_W}/${VB_H}` }}
        >
          <SvgConnections accent={accentColor} />
          {NODES.map((node) => (
            <DiagramNodeEl key={node.id} node={node} accent={accentColor} />
          ))}
          <HubNode accent={accentColor} />
        </div>

        {/* ── Mobile: Vertical card list ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {NODES.map((node) => (
            <MobileCard key={node.id} node={node} accent={accentColor} />
          ))}
        </div>
      </div>

      {/* ── Inline keyframes ── */}
      <style jsx global>{`
        .mobile-card[data-visible="true"] .mobile-state-b {
          opacity: 1;
          max-height: 200px;
        }
        .mobile-card[data-visible="true"] {
          border-color: ${accentColor}20;
          box-shadow: 0 0 24px -4px ${accentColor}10;
        }
      `}</style>
    </section>
  );
}
