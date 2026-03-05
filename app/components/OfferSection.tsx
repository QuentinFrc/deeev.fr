import type { ReactNode } from "react";

interface OfferSectionProps {
  /** Optional fig label for the preview frame (e.g. "Fig. 1.1") */
  previewLabel?: string;
}

type OfferContent = {
  headline: string;
  intro: string;
  timeline: string;
  budget: string;
  sections: { body: ReactNode }[];
};

const B = ({ children }: { children: ReactNode }) => (
  <strong className="text-white/80 font-medium">{children}</strong>
);
const C = ({ children }: { children: ReactNode }) => (
  <code className="font-mono text-[12px] text-white/50 bg-white/[0.04] px-1.5 py-0.5 rounded">
    {children}
  </code>
);

/* Inline avatar chip: tiny circle + @name in foreground color */
const Mention = ({
  name,
  initials,
  color = "#fff",
}: {
  name: string;
  initials: string;
  color?: string;
}) => (
  <span className="inline-flex items-center gap-1 align-baseline">
    <span
      className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full text-[9px] font-medium leading-none shrink-0 translate-y-[2px]"
      style={{ backgroundColor: `${color}18`, color }}
    >
      {initials}
    </span>
    <span className="text-foreground font-medium">@{name}</span>
  </span>
);

/* Small icon for badges */
const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const TagIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const ACCENT_COLOR = "#34d399";

const CONTENT: OfferContent = {
  headline: "De votre vision produit à un produit qui tourne.",
  intro:
    "On prend votre métier en input. On sort un MVP scalable, évolutif, et prêt à confronter le marché.",
  timeline: "6 à 10 semaines",
  budget: "15 000 – 35 000 EUR",
  sections: [
    {
      body: (
        <>
          <p>
            On commence par un atelier de cadrage produit pour fixer le scope
            et les priorités. Ensuite, on enchaîne sur le design UI/UX complet
            dans Figma, suivi du développement frontend + API.
          </p>
          <p>
            Le livrable inclut le déploiement sur votre infra (ou la nôtre),
            plus un <B>handoff complet</B> avec documentation technique. Vous
            repartez avec un produit autonome, pas une dépendance.
          </p>
        </>
      ),
    },
    {
      body: (
        <>
          <p>
            L'objectif principal : confronter votre idée au marché réel. Un
            MVP qui tourne, c'est aussi un outil pour lever des fonds avec une
            démo qui convainc, et pour recruter vos premiers utilisateurs dès
            le jour 1.
          </p>
          <p>
            Côté tech, on <B>valide l'architecture avant de scaler</B> — pas
            de dette cachée, pas de refonte dans 6 mois. L'idée c'est de
            réduire le risque d'investissement en livrant vite quelque chose de
            solide.
          </p>
        </>
      ),
    },
    {
      body: (
        <>
          <p>
            Plateforme SaaS B2B — de l'idée au produit en production.{" "}
            <Mention name="Quentin" initials="Q" color="#34d399" /> sur
            l'architecture frontend, le SDK et les composants core.{" "}
            <Mention name="Enzo" initials="E" color="#34d399" /> sur le design
            system complet, les UX flows et l'identité produit.
          </p>
          <p>
            Résultat : un pipeline complet{" "}
            <C>design → dev → livraison</C>, produit toujours en évolution
            active. Stack pensée pour tenir dans le temps.
          </p>
        </>
      ),
    },
  ],
};

/* ── Preview showcase frame ── */
const PlayIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white/30"
  >
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

function PreviewFrame({
  label,
  accentColor,
}: {
  label: string;
  accentColor: string;
}) {
  return (
    <div
      className="relative rounded-2xl border border-white/[0.08] overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 90% 70% at 55% 40%, ${accentColor}18, transparent 65%),
          radial-gradient(ellipse 60% 90% at 75% 55%, ${accentColor}0c, transparent 55%),
          linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)
        `,
        boxShadow: `
          0 0 0 1px ${accentColor}06,
          0 2px 40px -8px ${accentColor}10,
          inset 0 1px 0 0 rgba(255,255,255,0.04)
        `,
      }}
    >
      {/* Fig label */}
      <span
        className="absolute top-4 left-5 font-mono text-[10px] uppercase tracking-[0.15em] z-10"
        style={{ color: `${accentColor}60` }}
      >
        {label}
      </span>

      {/* Placeholder content area */}
      <div className="relative aspect-[4/3] flex items-center justify-center">
        <div className="relative flex flex-col items-center gap-3">
          <div
            className="w-16 h-16 rounded-2xl border border-white/[0.08] flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`,
              boxShadow: `0 4px 24px ${accentColor}0a`,
            }}
          >
            <PlayIcon />
          </div>
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
            Preview
          </span>
        </div>
      </div>
    </div>
  );
}

export default function OfferSection({ previewLabel }: OfferSectionProps) {
  const content = CONTENT;
  const accent = ACCENT_COLOR;
  const figLabel = previewLabel ?? "demo-deeev-mvp.mp4";

  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-6">
        {/* ── 2-col grid: prose left + preview right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-16 items-start">
          {/* Left column: header + prose */}
          <div>
            {/* ── Section header ── */}
            <div className="flex flex-col gap-6 mb-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                Minimum Viable Product
              </span>

              <h2 className="font-bricolage font-extrabold text-[30px] md:text-[42px] leading-[1.05] tracking-[-1.5px] gradient-text">
                {content.headline}
              </h2>

              {/* Badge pills for duration + pricing */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50">
                  <span style={{ color: accent }}><ClockIcon /></span>
                  {content.timeline}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50">
                  <span style={{ color: accent }}><TagIcon /></span>
                  {content.budget}
                </span>
              </div>
            </div>

            {/* ── Prose content ── */}
            <div className="flex flex-col gap-6">
              {content.sections.map((section, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 font-geologica font-light text-sm text-white/50 leading-relaxed"
                >
                  {section.body}
                </div>
              ))}
            </div>
          </div>

          {/* Right column: preview frame */}
          <div className="self-end">
            <PreviewFrame label={figLabel} accentColor={accent} />
          </div>
        </div>
      </div>
    </section>
  );
}
