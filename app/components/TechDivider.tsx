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

export default function TechDivider() {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-y border-foreground/[0.06]">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex w-max gap-10 md:gap-16"
        style={{ animation: "marquee 35s linear infinite reverse" }}
      >
        {[...techs, ...techs].map((name, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-foreground/[0.06] flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 rounded-sm bg-foreground/[0.08]" />
            </div>
            <span className="font-mono text-sm text-foreground/[0.15] whitespace-nowrap select-none">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
