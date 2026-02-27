"use client";

import Link from "next/link";
import Silk from "@/components/Silk";
import CTAButton from "./CTAButton";

interface CTASectionProps {
  accentColor?: string;
}

export default function CTASection({ accentColor = "#af70d8ff" }: CTASectionProps) {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="max-w-[1352px] mx-auto flex flex-col gap-10">
        {/* CTA card */}
        <div className="relative bg-[#161616] rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* Silk background constrained to card */}
          <div className="absolute inset-0 opacity-50 mask-[radial-gradient(ellipse_600px_60%_at_50%_50%,black,transparent)]">
            <Silk
              color={accentColor}
              speed={8}
              scale={1.5}
              noiseIntensity={1.2}
              rotation={3}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8">
            <div className="flex flex-col items-center gap-8 text-center max-w-2xl mx-auto">
              <h2 className="font-bricolage font-extrabold text-[32px] md:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-1.56px] uppercase gradient-text">
                Voyez concrètement ce qu&apos;on livre
              </h2>
              <p className="font-geologica font-light text-base md:text-lg text-white/60 tracking-[-0.48px] max-w-xl leading-relaxed">
                Une vidéo courte qui montre le process, les livrables
                et le résultat final&nbsp;— en détail.
              </p>
              <CTAButton />
            </div>
          </div>
        </div>

        {/* Footer links */}
        <footer className="flex items-center justify-between flex-wrap gap-y-4 gap-x-8 px-2">
          <Link
            href="/poc"
            className="font-geologica font-light text-sm text-white/25 hover:text-white/60 transition-colors tracking-[-0.42px]"
          >
            POC — 3&nbsp;semaines
          </Link>
          <Link
            href="/mvp"
            className="font-geologica font-light text-sm text-white/25 hover:text-white/60 transition-colors tracking-[-0.42px]"
          >
            MVP — 8&nbsp;semaines
          </Link>
          <a
            href="mailto:hello@deeev.fr"
            className="font-geologica font-light text-sm text-white/25 hover:text-white/60 transition-colors tracking-[-0.42px]"
          >
            hello@deeev.fr
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-geologica font-light text-sm text-white/25 hover:text-white/60 transition-colors tracking-[-0.42px]"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </section>
  );
}
