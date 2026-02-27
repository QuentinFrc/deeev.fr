import AnimatedIcon from "./AnimatedIcon";

export interface ValuePoint {
  title: string;
  description: string;
  icon?: string;
}

interface KeyValuePointsProps {
  sectionTitle: string;
  subtitle: string;
  points: ValuePoint[];
  accentColor?: string;
}

export default function KeyValuePoints({
  sectionTitle,
  subtitle,
  points,
  accentColor = "#ffffff",
}: KeyValuePointsProps) {
  return (
    <section className="py-16 md:py-28 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-bricolage font-extrabold text-[34px] md:text-[46px] tracking-[-1.2px] uppercase gradient-text">
            {sectionTitle}
          </h2>
          <p className="font-geologica font-light text-base md:text-lg text-white/50 tracking-[-0.48px] max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {points.map((point, i) => (
            <article
              key={point.title}
              className="group relative card-depth border border-white/[0.07] border-t-white/[0.13] rounded-2xl p-7 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-white/[0.12] hover:border-t-white/[0.2] hover:-translate-y-[2px]"
            >
              {/* Accent line — always visible, brightens on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                }}
              />

              <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <AnimatedIcon
                  name={point.icon ?? String(i + 1).padStart(2, "0")}
                  color={accentColor}
                  size={28}
                />
              </div>

              <h3 className="font-geologica font-medium text-[15px] md:text-base text-white tracking-[-0.3px]">
                {point.title}
              </h3>

              <p className="font-geologica font-light text-sm text-white/45 leading-relaxed tracking-[-0.2px]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
