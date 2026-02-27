export interface Testimonial {
  label: string;
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  sectionTitle: string;
  testimonials: Testimonial[];
  accentColor?: string;
}

export default function TestimonialsSection({
  sectionTitle,
  testimonials,
  accentColor = "#ffffff",
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-28 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <h2 className="font-bricolage font-extrabold text-[34px] md:text-[46px] tracking-[-1.2px] uppercase gradient-text">
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {testimonials.map((item) => (
            <article
              key={item.label}
              className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-7 md:p-8 flex flex-col gap-5 transition-colors duration-300 hover:border-white/[0.12] overflow-hidden"
            >
              {/* Decorative quotation mark */}
              <span
                className="absolute -top-1 right-5 font-bricolage text-[80px] leading-none select-none pointer-events-none"
                style={{ color: accentColor, opacity: 0.05 }}
              >
                &ldquo;
              </span>

              <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                {item.label}
              </span>

              <blockquote className="relative font-geologica font-light text-[15px] md:text-base text-white/60 leading-relaxed italic">
                {item.quote}
              </blockquote>

              <div className="relative flex items-center gap-3 mt-auto pt-1">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0"
                  style={{
                    backgroundColor: `${accentColor}18`,
                    color: accentColor,
                  }}
                >
                  {item.author.charAt(0)}
                </div>
                <p className="font-geologica text-[13px] text-white/35">
                  {item.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
