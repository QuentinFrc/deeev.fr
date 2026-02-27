"use client";

import type { ReactNode } from "react";

const COLS = 4;

const STREAKS = [
  { col: 2, height: 32, duration: 12, delay: 0 },
  { col: 4, height: 20, duration: 12, delay: 5 },
] as const;

const SECTION_MASK =
  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, transparent 100%)";

interface SectionGuttersProps {
  children: ReactNode;
  accentColor?: string;
  animated?: boolean;
}

export function SectionGutters({ children, accentColor = "#ffffff", animated = true }: SectionGuttersProps) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex justify-center px-6 md:px-20"
        style={{ maskImage: SECTION_MASK, WebkitMaskImage: SECTION_MASK }}
      >
        <div className="relative w-full max-w-[1200px] h-full">
          {/* Plain lines */}
          <div
            className="absolute inset-0 grid h-full"
            style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          >
            {Array.from({ length: COLS + 1 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-px bg-white/[0.04]"
                style={{
                  gridColumn: i < COLS ? i + 1 : COLS,
                  justifySelf: i < COLS ? "start" : "end",
                }}
              />
            ))}
          </div>

          {/* Animated streaks */}
          {animated && STREAKS.map((streak) => (
            <div
              key={streak.col}
              className="absolute w-[3px]"
              style={{
                left: `calc(${((streak.col - 1) / COLS) * 100}% - 1px)`,
                height: streak.height,
                background: `linear-gradient(to bottom, transparent, ${accentColor}25 15%, ${accentColor}60 50%, ${accentColor}25 85%, transparent)`,
                boxShadow: `0 0 6px 1px ${accentColor}10`,
                borderRadius: 2,
                animation: `gutter-streak ${streak.duration}s ${streak.delay}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Gutters() {
  return null;
}
