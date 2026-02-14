"use client";

import Silk from "@/components/Silk";

export default function CTASection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Silk background */}
      <div
        className="absolute inset-0 mask-[radial-gradient(ellipse_512px_50%_at_50%_50%,black,transparent)]"
      >
        <Silk
          color="#af70d8ff"
          speed={8}
          scale={1.5}
          noiseIntensity={1.2}
          rotation={3}
          
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-64">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center max-w-2xl">
            <span className="font-mono font-light text-sm text-white/50 tracking-wide uppercase">
              #CTA
            </span>
            <h2 className="font-bricolage font-extrabold text-[32px] md:text-[40px] leading-[1.05] tracking-[-1.2px] uppercase text-white">
              Construisez votre prochain succès maintenant
            </h2>
            <p className="font-geologica font-normal text-base text-white/80 max-w-xl">
              Vous avez la vision, nous avons l&apos;expertise technique.
              <br />
              Le match parfait pour concrétiser votre réussite de demain.
            </p>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
            <span className="font-geologica font-medium text-base tracking-[-0.48px]">
              Concrétisons votre projet
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
