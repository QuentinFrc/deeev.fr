const techs = [
  "React",
  "TypeScript",
  "Next.js",
  "Supabase",
  "Figma",
  "Framer",
  "Tailwind CSS",
  "Vercel",
  "Prisma",
  "Storybook",
];

const FADE_MASK =
  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

export default function TechDivider() {
  return (
    <section className="relative py-10 md:py-14 border-y border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div
          className="overflow-hidden"
          style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
        >
          <div
            className="flex w-max gap-10 md:gap-16"
            style={{ animation: "marquee 35s linear infinite reverse" }}
          >
            {[...techs, ...techs].map((name, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-sm bg-white/[0.08]" />
                </div>
                <span className="font-mono text-sm text-white/[0.15] whitespace-nowrap select-none">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
