interface LogosDividerProps {
  logos?: string[];
  sourceHref?: string;
}

const defaultLogos = [
  "[Logo Placeholder A]",
  "[Logo Placeholder B]",
  "[Logo Placeholder C]",
  "[Logo Placeholder D]",
  "[Logo Placeholder E]",
  "[Logo Placeholder F]",
];

const FADE_MASK =
  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

export default function LogosDivider({
  logos = defaultLogos,
  sourceHref,
}: LogosDividerProps) {
  return (
    <section className="relative py-10 md:py-14 border-y border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div
          className="overflow-hidden"
          style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
        >
          <div
            className="flex w-max gap-12 md:gap-20"
            style={{ animation: "marquee 40s linear infinite" }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="font-bricolage font-extrabold text-xl md:text-2xl text-white/[0.1] uppercase tracking-widest whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {sourceHref && (
          <div className="mt-6">
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              source: {sourceHref}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
