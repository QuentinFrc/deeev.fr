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
    caseStudyTitle: "CASE STUDY — SaaS B2B (collaboration 1 an+)",
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
    headline:
      "Tester avant de construire. Décider avec des faits, pas des hypothèses.",
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
    caseStudyTitle: "CASE STUDY — SaaS B2B (phase d'exploration)",
    caseStudyContext:
      "Contexte: avant de s'engager sur le développement complet, on a prototypé les flux les plus risqués pour valider les hypothèses UX et les choix d'architecture.",
    caseStudyPeople: [],
    caseStudyResult:
      "Résultat: décisions prises en 2 semaines au lieu de 2 mois. Le POC a directement orienté la roadmap du produit final.",
    caseStudyPlaceholder: "Placeholder prototype / wireflow / démo interactive",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {/* ── Hero Card ── */}
          <article
            className="md:col-span-2 relative overflow-hidden bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-10 flex flex-col gap-7 transition-colors duration-300 hover:border-white/[0.1]"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at top, ${accent}08 0%, transparent 55%)`,
              }}
            />
            <div
              className="absolute top-0 left-10 right-10 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${accent}60, transparent)`,
              }}
            />

            <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              {VARIANT_LABELS[variant]}
            </span>

            <h2 className="relative font-bricolage font-extrabold text-[30px] md:text-[42px] leading-[1.05] tracking-[-1.5px] gradient-text max-w-2xl">
              {content.headline}
            </h2>

            <p className="relative font-geologica font-light text-base md:text-lg text-white/55 max-w-xl leading-relaxed">
              {content.intro}
            </p>

            <a
              href="mailto:hello@deeev.fr"
              className="relative inline-flex items-center gap-2.5 font-geologica text-sm font-medium rounded-lg px-6 py-3 w-fit transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: accent, color: "#000" }}
            >
              {content.ctaLabel}
              <span className="opacity-60">&#8594;</span>
            </a>
          </article>

          {/* ── Timeline & Budget ── */}
          <article className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 md:p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.1]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 mb-7">
              Timeline &amp; Budget
            </span>

            <div className="flex flex-col gap-5 flex-1">
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
                  Durée
                </span>
                <p className="font-bricolage font-extrabold text-[22px] md:text-[26px] tracking-[-0.5px] text-white leading-tight">
                  {content.timeline}
                </p>
              </div>

              <div className="w-full h-px bg-white/[0.06]" />

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
                  Budget
                </span>
                <p className="font-bricolage font-extrabold text-[22px] md:text-[26px] tracking-[-0.5px] text-white leading-tight">
                  {content.budget}
                </p>
              </div>
            </div>

            <p className="font-geologica font-light text-[13px] text-white/30 leading-relaxed mt-6">
              {content.timelineNote}
            </p>
          </article>

          {/* ── Périmètre ── */}
          <article className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 md:p-8 flex flex-col gap-5 transition-colors duration-300 hover:border-white/[0.1]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Périmètre livrable
            </span>
            <ul className="flex flex-col gap-3.5">
              {content.perimeter.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: accent }}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-geologica font-light text-sm text-white/60 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* ── Objectifs & Gains ── */}
          <article className="md:col-span-2 relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 md:p-8 flex flex-col gap-5 transition-colors duration-300 hover:border-white/[0.1]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Objectifs &amp; Gains
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {content.goals.map((goal, i) => (
                <li key={goal} className="flex items-start gap-3">
                  <span
                    className="font-mono text-xs font-medium mt-px shrink-0 tabular-nums"
                    style={{ color: accent, opacity: 0.6 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-geologica font-light text-sm text-white/60 leading-relaxed">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* ── Case Study ── */}
          <article className="md:col-span-3 relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 md:p-9 flex flex-col gap-6 transition-colors duration-300 hover:border-white/[0.1]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              {content.caseStudyTitle}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-geologica font-light text-sm text-white/55 leading-relaxed">
                  {content.caseStudyContext}
                </p>

                {content.caseStudyPeople.length > 0 && (
                  <ul className="flex flex-col gap-2 border-l border-white/[0.06] pl-4">
                    {content.caseStudyPeople.map((item) => (
                      <li
                        key={item}
                        className="font-geologica font-light text-sm text-white/50 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="font-geologica font-light text-sm text-white/55 leading-relaxed">
                  {content.caseStudyResult}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center gap-3">
                <svg
                  className="w-8 h-8 text-white/10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="font-mono text-[10px] text-white/15 tracking-wide">
                  {content.caseStudyPlaceholder}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
