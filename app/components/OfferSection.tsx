import type { ReactNode } from "react";

interface OfferSectionProps {
  variant: "poc" | "mvp";
}

type OfferContent = {
  headline: string;
  intro: string;
  timeline: string;
  budget: string;
  sections: { body: ReactNode }[];
};

const B = ({ children }: { children: ReactNode }) => (
  <strong className="text-foreground/80 font-medium">{children}</strong>
);
const C = ({ children }: { children: ReactNode }) => (
  <code className="font-mono text-[12px] text-foreground/50 bg-foreground/[0.04] px-1.5 py-0.5 rounded">
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

const CONTENT: Record<OfferSectionProps["variant"], OfferContent> = {
  mvp: {
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
              <Mention name="Quentin" initials="Q" color="#f87171" /> sur
              l'architecture frontend, le SDK et les composants core.{" "}
              <Mention name="Enzo" initials="E" color="#f87171" /> sur le design
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
  },
  poc: {
    headline:
      "Tester avant de construire. Décider avec des faits, pas des hypothèses.",
    intro:
      "On isole la question critique de votre projet - et on y répond en quelques semaines.",
    timeline: "1 à 3 semaines",
    budget: "3 000 – 10 000 EUR",
    sections: [
      {
        body: (
          <>
            <p>
              On démarre par un atelier de problématique pour isoler la bonne
              question. Ensuite, on construit un prototype ou démo interactive —
              suffisamment réel pour tester, pas assez pour perdre du temps.
            </p>
            <p>
              À la sortie : des résultats concrets avec nos recommandations, et
              un <B>plan d'action post-POC</B> clair — MVP, pivot ou abandon.
            </p>
          </>
        ),
      },
      {
        body: (
          <>
            <p>
              Un POC sert à répondre à une question précise : faisabilité
              technique, validation d'un flux UX critique, ou obtention d'un
              Go / No-Go éclairé avant d'engager du budget.
            </p>
            <p>
              C'est aussi un outil pour{" "}
              <B>convaincre un investisseur ou partenaire</B> avec du concret,
              et pour éviter des mois de dev sur une hypothèse qui ne tient pas.
            </p>
          </>
        ),
      },
      {
        body: (
          <>
            <p>
              Avant de s'engager sur le développement complet, on a prototypé
              les flux les plus risqués pour valider les hypothèses UX et les
              choix d'architecture.
            </p>
            <p>
              Résultat : des décisions prises en 2 semaines au lieu de 2 mois.
              Le POC a directement orienté la <C>roadmap</C> du produit final.
            </p>
          </>
        ),
      },
    ],
  },
};

const ACCENT_COLORS: Record<OfferSectionProps["variant"], string> = {
  mvp: "#f87171",
  poc: "#34d399",
};

const VARIANT_LABELS: Record<OfferSectionProps["variant"], string> = {
  mvp: "Minimum Viable Product",
  poc: "Proof of Concept",
};

export default function OfferSection({ variant }: OfferSectionProps) {
  const content = CONTENT[variant];
  const accent = ACCENT_COLORS[variant];

  return (
    <section className="py-16 md:py-28 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/25">
            {VARIANT_LABELS[variant]}
          </span>

          <h2 className="font-bricolage font-extrabold text-[30px] md:text-[42px] leading-[1.05] tracking-[-1.5px] gradient-text max-w-2xl">
            {content.headline}
          </h2>

          {/* Badge pills for duration + pricing */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide px-2 py-1 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] text-foreground/50">
              <span style={{ color: accent }}><ClockIcon /></span>
              {content.timeline}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide px-2 py-1 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] text-foreground/50">
              <span style={{ color: accent }}><TagIcon /></span>
              {content.budget}
            </span>
          </div>
        </div>

        {/* ── Prose content ── */}
        <div className="flex flex-col gap-6 max-w-2xl">
          {content.sections.map((section, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 font-geologica font-light text-sm text-foreground/50 leading-relaxed"
            >
              {section.body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
