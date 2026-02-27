export interface ValuePoint {
  title: string;
  description: string;
}

interface KeyValuePointsProps {
  sectionTitle: string;
  subtitle: string;
  points: ValuePoint[];
}

export default function KeyValuePoints({
  sectionTitle,
  subtitle,
  points,
}: KeyValuePointsProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-bricolage font-extrabold text-[34px] md:text-[46px] tracking-[-1.2px] uppercase gradient-text">
            {sectionTitle}
          </h2>
          <p className="font-geologica font-light text-base md:text-lg text-white/70 tracking-[-0.48px] max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {points.map((point) => (
            <article
              key={point.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-7 flex flex-col gap-3"
            >
              <h3 className="font-geologica font-medium text-base md:text-lg text-white tracking-[-0.42px]">
                {point.title}
              </h3>
              <p className="font-geologica font-light text-sm md:text-base text-white/65 leading-relaxed tracking-[-0.42px]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
