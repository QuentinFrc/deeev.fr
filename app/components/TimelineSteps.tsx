export interface TimelineStep {
  title: string;
  description: string;
  duration: string;
}

interface TimelineStepsProps {
  steps: TimelineStep[];
  accentColor?: string;
}

export default function TimelineSteps({
  steps,
  accentColor = "#ffffff",
}: TimelineStepsProps) {
  return (
    <section className="px-6 md:px-20 pb-16 md:pb-28 mt-8 md:mt-12">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
        >
          {steps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.title}
                className="relative flex flex-col gap-5 pr-6 md:pr-10"
              >
                {/* ── Dot + segment line ── */}
                <div className="flex items-center">
                  {/* Dot container — outer ring + inner fill */}
                  <div className="relative z-10 shrink-0">
                    {/* Soft glow behind first dot */}
                    {isFirst && (
                      <div
                        className="absolute inset-[-4px] rounded-full blur-[6px]"
                        style={{ background: `${accentColor}20` }}
                      />
                    )}
                    <div
                      className="relative w-[11px] h-[11px] rounded-full"
                      style={{
                        background: isFirst ? accentColor : `rgba(var(--fg-channel), 0.10)`,
                        boxShadow: isFirst
                          ? `0 0 0 3px ${accentColor}15`
                          : `0 0 0 3px rgba(var(--fg-channel), 0.03)`,
                      }}
                    />
                  </div>

                  {/* Segment line — extends from dot to end of column */}
                  {!isLast && (
                    <div
                      className="h-px flex-1 ml-2.5"
                      style={{
                        background: isFirst
                          ? `linear-gradient(to right, ${accentColor}30, rgba(var(--fg-channel), 0.06))`
                          : `linear-gradient(to right, rgba(var(--fg-channel), 0.06), rgba(var(--fg-channel), 0.04))`,
                      }}
                    />
                  )}
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-geologica font-medium text-[14px] md:text-[15px] text-foreground/90 tracking-[-0.3px] leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-geologica font-light text-[12px] md:text-[13px] text-foreground/35 leading-relaxed tracking-[-0.2px]">
                    {step.description}
                  </p>
                </div>

                {/* ── Duration ── */}
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/20 mt-auto pt-2">
                  {step.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
