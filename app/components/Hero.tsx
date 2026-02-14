"use client";

import Image from "next/image";

// Hero images
const logoBackground = "https://www.figma.com/api/mcp/asset/45fcb658-0af0-4cc6-9d41-35499044cd1e";
const heroImageEnzo = "/hero-enzo.png";
const heroImageQuentin = "/hero-quentin.png";

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.25"/>
      <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.25"/>
      <circle cx="10" cy="10" r="2" fill="currentColor"/>
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2L4 11.5H10L9 18L16 8.5H10L11 2Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 3.5C11.12 2.87 9.5 3.04 8.27 4.27C6.77 5.77 6.6 8.05 7.76 9.74L3.5 14L4.5 15L5.5 16L9.76 11.74C11.45 12.9 13.73 12.73 15.23 11.23C16.46 10 16.63 8.38 16 7L13.5 9.5L12 9L10.5 7.5L11 6L13.5 3.5H12.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C10.55 18 11 17.55 11 17V16.5C11 16.22 11.11 15.97 11.29 15.79C11.47 15.61 11.5 15.33 11.35 15.1C10.93 14.45 11.38 13.5 12.15 13.5H14C16.21 13.5 18 11.71 18 9.5C18 5.36 14.42 2 10 2Z" stroke="currentColor" strokeWidth="1.25"/>
      <circle cx="6.5" cy="9" r="1" fill="currentColor"/>
      <circle cx="9" cy="6" r="1" fill="currentColor"/>
      <circle cx="13" cy="6" r="1" fill="currentColor"/>
      <circle cx="15" cy="9" r="1" fill="currentColor"/>
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  target: <TargetIcon />,
  zap: <ZapIcon />,
  wrench: <WrenchIcon />,
  palette: <PaletteIcon />,
};

export interface ReassuranceItem {
  icon: string;
  title: string;
  description: string;
}

interface HeroProps {
  label: string;
  h1: React.ReactNode;
  subtitle: string;
  timeline: string;
  reassurance: ReassuranceItem[];
  accentColor?: string;
}

export default function Hero({ label, h1, subtitle, timeline, reassurance, accentColor }: HeroProps) {
  return (
    <section className="relative">
      {/* Background with subtle lines pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`
          }}
        />
      </div>

      {/* Accent glow behind photos */}
      {accentColor && (
        <div
          className="absolute bottom-0 left-[60%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-30 pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />
      )}

      {/* Decorative images - bottom right, facing each other */}
      <div className="absolute bottom-0 left-1/2 w-max -space-x-64 pointer-events-none grayscale">
        <div className="relative inline-block w-[485px] h-[730px] translate-y-8 mask-[radial-gradient(ellipse_90%_90%_at_25%_50%,black_70%,transparent)]">
          <Image
            src={heroImageQuentin}
            alt=""
            fill
            className="object-cover object-top scale-x-[-1]"
            unoptimized
          />
        </div>
        <div className="relative inline-block w-[485px] h-[730px] mask-[radial-gradient(ellipse_80%_80%_at_25%_25%,black_70%,transparent)]">
          <Image
            src={heroImageEnzo}
            alt=""
            fill
            className="object-cover object-top scale-x-[-1]"
            unoptimized
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-16 container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col gap-64">
          {/* Hero content */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <span className="text-sm font-medium tracking-widest uppercase text-white/40 font-geologica">
              {label} — {timeline}
            </span>

            {/* Headline */}
            <h1 className="font-bricolage font-extrabold text-balance text-[40px] md:text-[52px] lg:text-[64px] leading-18 tracking-[-0.03em] gradient-text max-w-[900px]">
              {h1}
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/80 font-light tracking-[-0.54px] font-geologica max-w-[600px]">
              {subtitle}
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg w-fit hover:bg-white/90 transition-colors mt-2">
              <span className="text-base font-medium tracking-[-0.48px] font-geologica">
                Réserver un appel découverte
              </span>
            </button>
          </div>

          {/* Reassurance items */}
          <div className="flex flex-col gap-3">
            {reassurance.map((item) => (
              <div key={item.title} className="flex gap-2 items-center">
                <div className="w-5 h-5 flex items-center justify-center text-white">
                  {iconMap[item.icon]}
                </div>
                <p className="text-base tracking-[-0.48px] text-white/60 font-light font-geologica">
                  <span className="font-medium text-white">{item.title}</span>
                  {" "}{item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer timestamp */}
        <div>
          <span className="font-mono text-sm text-white/40">
            From Paris, France (UTC+1) - {new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </section>
  );
}
