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
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="font-bricolage font-extrabold text-[34px] md:text-[46px] tracking-[-1.2px] gradient-text">
            {sectionTitle}
          </h2>
          {subtitle && (
            <p className="font-geologica font-light text-sm text-white/40 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl">
          {points.map((point, i) => (
            <article
              key={point.title}
              className="group relative p-3 md:p-4 flex flex-col gap-1.5"
            >
              <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <AnimatedIcon
                  name={point.icon ?? String(i + 1).padStart(2, "0")}
                  color={accentColor}
                  size={22}
                />
              </div>

              <h3 className="font-geologica font-medium text-[15px] text-white tracking-[-0.3px]">
                {point.title}
              </h3>

              <p className="font-geologica font-light text-[13px] text-white/40 leading-relaxed tracking-[-0.2px]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
