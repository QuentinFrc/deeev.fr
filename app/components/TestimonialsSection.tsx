export interface Testimonial {
  label: string;
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  sectionTitle: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  sectionTitle,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-bricolage font-extrabold text-[34px] md:text-[46px] tracking-[-1.2px] uppercase gradient-text">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {testimonials.map((item) => (
            <article
              key={item.label}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-7 flex flex-col gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-white/35">
                {item.label}
              </span>
              <blockquote className="font-geologica font-light text-sm md:text-base text-white/75 leading-relaxed">
                "{item.quote}"
              </blockquote>
              <p className="font-geologica text-sm text-white/45">
                {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
