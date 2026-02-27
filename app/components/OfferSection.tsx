interface OfferSectionProps {
  variant: "poc" | "mvp";
}

type OfferContent = {
  headline: string;
  intro: string;
  ctaLabel: string;
  timeline: string;
  budget: string;
  timelineNote: string;
  perimeter: string[];
  goals: string[];
  caseStudyTitle: string;
  caseStudyContext: string;
  caseStudyPeople: string[];
  caseStudyResult: string;
  caseStudyPlaceholder: string;
};

const CONTENT: Record<OfferSectionProps["variant"], OfferContent> = {
  mvp: {
    headline: "De votre vision produit à un produit qui tourne.",
    intro:
      "On prend votre métier en input. On sort un MVP scalable, évolutif, et prêt à confronter le marché.",
    ctaLabel: "Discutons de votre projet",
    timeline: "6 à 10 semaines",
    budget: "15 000 - 35 000 EUR",
    timelineNote:
      "Périmètre fixé en amont. Pas de surprise en cours de route.",
    perimeter: [
      "Atelier de cadrage produit",
      "Design UI/UX complet (Figma)",
      "Développement frontend + API",
      "Déploiement",
      "Handoff & documentation",
    ],
    goals: [
      "Confronter votre idée au marché réel",
      "Lever des fonds avec une démo qui convainc",
      "Recruter vos premiers utilisateurs",
      "Valider l'architecture avant de scaler",
      "Réduire le risque d'investissement tech",
    ],
    caseStudyTitle: "CASE STUDY - SaaS B2B (collaboration 1 an+)",
    caseStudyContext:
      "Contexte: Plateforme SaaS B2B - de l'idée au produit en production.",
    caseStudyPeople: [
      "Quentin: architecture frontend, SDK, composants core.",
      "Enzo: design system complet, UX flows, identité produit.",
    ],
    caseStudyResult:
      "Résultat: pipeline complet design -> dev -> livraison, produit toujours en évolution active. Stack pensée pour tenir dans le temps.",
    caseStudyPlaceholder: "Placeholder screenshot ou maquette du produit",
  },
  poc: {
    headline: "Tester avant de construire. Décider avec des faits, pas des hypothèses.",
    intro:
      "On isole la question critique de votre projet - et on y répond en quelques semaines.",
    ctaLabel: "Posez-nous votre question",
    timeline: "1 à 3 semaines",
    budget: "3 000 - 10 000 EUR",
    timelineNote:
      "Périmètre ciblé, objectif unique, réponse claire à la sortie.",
    perimeter: [
      "Atelier de problématique",
      "Prototype ou démo interactive",
      "Résultats & recommandations",
      "Plan d'action post-POC",
    ],
    goals: [
      "Valider la faisabilité technique",
      "Tester l'UX sur un flux critique",
      "Obtenir un Go / No-Go éclairé",
      "Convaincre un investisseur ou partenaire",
      "Éviter des mois de dev sur une mauvaise hypothèse",
    ],
    caseStudyTitle: "CASE STUDY - SaaS B2B (phase d'exploration)",
    caseStudyContext:
      "Contexte: avant de s'engager sur le développement complet, on a prototypé les flux les plus risqués pour valider les hypothèses UX et les choix d'architecture.",
    caseStudyPeople: [],
    caseStudyResult:
      "Résultat: décisions prises en 2 semaines au lieu de 2 mois. Le POC a directement orienté la roadmap du produit final.",
    caseStudyPlaceholder: "Placeholder prototype / wireflow / démo interactive",
  },
};

export default function OfferSection({ variant }: OfferSectionProps) {
  const content = CONTENT[variant];

  return (
    <section className="py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <article className="md:col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-9 flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-white/35">
              HERO
            </span>
            <h2 className="font-bricolage font-extrabold text-[30px] md:text-[40px] leading-tight tracking-[-1.2px] gradient-text max-w-3xl">
              {content.headline}
            </h2>
            <p className="font-geologica font-light text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              {content.intro}
            </p>
            <a
              href="mailto:hello@deeev.fr"
              className="inline-flex items-center gap-2 font-geologica text-sm md:text-base text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg px-5 py-3 w-fit transition-colors"
            >
              CTA
              <span className="text-white/70">→</span>
              {content.ctaLabel}
            </a>
          </article>

          <article className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 flex flex-col gap-5">
            <span className="font-mono text-xs uppercase tracking-widest text-white/35">
              TIMELINE & BUDGET
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-geologica text-base text-white">
                <span className="text-white/65">⏱</span> {content.timeline}
              </p>
              <p className="font-geologica text-base text-white">
                <span className="text-white/65">💶</span> {content.budget}
              </p>
            </div>
            <p className="font-geologica font-light text-sm md:text-base text-white/65 leading-relaxed">
              {content.timelineNote}
            </p>
          </article>

          <article className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/35">
              PÉRIMÈTRE LIVRABLE
            </span>
            <ul className="flex flex-col gap-2">
              {content.perimeter.map((item) => (
                <li
                  key={item}
                  className="font-geologica font-light text-sm md:text-base text-white/75 leading-relaxed"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="md:col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/35">
              OBJECTIFS & GAINS
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {content.goals.map((goal) => (
                <li
                  key={goal}
                  className="font-geologica font-light text-sm md:text-base text-white/75 leading-relaxed"
                >
                  → {goal}
                </li>
              ))}
            </ul>
          </article>

          <article className="md:col-span-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 flex flex-col gap-5">
            <span className="font-mono text-xs uppercase tracking-widest text-white/35">
              {content.caseStudyTitle}
            </span>
            <p className="font-geologica font-light text-sm md:text-base text-white/70 leading-relaxed">
              {content.caseStudyContext}
            </p>
            {content.caseStudyPeople.length > 0 && (
              <ul className="flex flex-col gap-1">
                {content.caseStudyPeople.map((item) => (
                  <li
                    key={item}
                    className="font-geologica font-light text-sm md:text-base text-white/70 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <p className="font-geologica font-light text-sm md:text-base text-white/70 leading-relaxed">
              {content.caseStudyResult}
            </p>

            <div className="mt-1 rounded-xl border border-dashed border-white/[0.15] bg-black/25 min-h-[180px] md:min-h-[240px] flex items-center justify-center px-6">
              <p className="font-geologica font-light text-sm text-white/40 text-center">
                {content.caseStudyPlaceholder}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
