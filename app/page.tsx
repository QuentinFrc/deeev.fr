import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* MVP side */}
      <Link
        href="/mvp"
        className="group relative flex-1 flex items-center justify-center overflow-hidden transition-all duration-500 md:hover:flex-[1.3] md:has-[~:hover]:flex-[0.7]"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f87171] blur-[200px] opacity-20" />
        </div>

        {/* Separator line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 md:hidden" />
        <div className="absolute top-0 right-0 bottom-0 w-px bg-white/10 hidden md:block" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-8 py-24 md:py-0 text-center">
          <span className="font-mono text-xs tracking-widest uppercase text-white/30">
            8 semaines
          </span>
          <h2 className="font-bricolage font-extrabold text-5xl md:text-6xl lg:text-7xl uppercase gradient-text">
            MVP
          </h2>
          <p className="font-geologica font-light text-2xl text-white/50 max-w-xs group-hover:text-white/70 transition-colors duration-500">
            Face à vos <span className="font-accent text-3xl text-[#f87171]">users</span>
          </p>
          <span className="font-geologica text-sm text-white/20 group-hover:text-white/60 transition-colors duration-500">
            Découvrir &rarr;
          </span>
        </div>
      </Link>

      {/* POC side */}
      <Link
        href="/poc"
        className="group relative flex-1 flex items-center justify-center overflow-hidden transition-all duration-500 md:hover:flex-[1.3] md:has-[~:hover]:flex-[0.7]"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#34d399] blur-[200px] opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-8 py-24 md:py-0 text-center">
          <span className="font-mono text-xs tracking-widest uppercase text-white/30">
            3 semaines
          </span>
          <h2 className="font-bricolage font-extrabold text-5xl md:text-6xl lg:text-7xl uppercase gradient-text">
            POC
          </h2>
          <p className="font-geologica font-light text-2xl text-white/50 max-w-xs group-hover:text-white/70 transition-colors duration-500">
            Devant les <span className="font-accent text-3xl text-[#34d399]">invests</span>
          </p>
          <span className="font-geologica text-sm text-white/20 group-hover:text-white/60 transition-colors duration-500">
            Découvrir &rarr;
          </span>
        </div>
      </Link>
    </main>
  );
}
