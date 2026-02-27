export interface Testimonial {
  label: string;
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  sectionTitle: string;
  subtitle?: string;
  testimonials: Testimonial[];
  accentColor?: string;
}

export default function TestimonialsSection({
  sectionTitle,
  subtitle,
  testimonials,
  accentColor = "#ffffff",
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-6 flex flex-col gap-10">
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

        <ul className="flex flex-col gap-8 max-w-2xl">
          {testimonials.slice(0, 5).map((item) => (
            <li key={item.label} className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0"
                  style={{
                    backgroundColor: `${accentColor}18`,
                    color: accentColor,
                  }}
                >
                  {item.author.charAt(0)}
                </div>
                <span className="font-geologica text-sm text-white/70">
                  {item.author}
                </span>
              </div>
              <p className="font-geologica text-sm text-white/40 leading-relaxed pl-[34px] line-clamp-2">
                {item.quote}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
