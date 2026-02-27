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

export default function LogosDivider({
  logos = defaultLogos,
  sourceHref,
}: LogosDividerProps) {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-y border-white/[0.06]">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
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

      {sourceHref && (
        <div className="container mx-auto px-6 mt-6 relative z-20">
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
    </section>
  );
}
