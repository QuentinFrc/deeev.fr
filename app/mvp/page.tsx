import Hero from "../components/Hero";
import LogosDivider from "../components/LogosDivider";
import OfferSection from "../components/OfferSection";
import TechDivider from "../components/TechDivider";
import KeyValuePoints from "../components/KeyValuePoints";
import CTASection from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import TimelineSteps from "../components/TimelineSteps";
import { SectionGutters } from "../components/Gutters";

export default function MVPPage() {
  return (
    <main>
      <SectionGutters accentColor="#f87171" animated={false}>
        <Hero
          label="face à vos users"
          h1={
            <>
              Votre produit face à vos{" "}
              <span className="uppercase font-accent tracking-normal text-[#f87171] [-webkit-text-fill-color:#f87171]">
                users
              </span>{" "}
              en 8&nbsp;semaines, 35k€.
            </>
          }
          subtitle="Un vrai logiciel, avec le socle complet. Prêt pour vos premiers clients."
          timeline="8 semaines"
          accentColor="#f87171"
          reassurance={[
            {
              icon: "target",
              title: "Prix fixe",
              description: "budget maîtrisé, pas de dépassement",
            },
            {
              icon: "zap",
              title: "8 semaines",
              description: "un produit complet, prêt pour vos premiers users",
            },
            {
              icon: "wrench",
              title: "Design + Ingénierie",
              description: "vos users peuvent s'inscrire et payer dès le jour 1",
            },
          ]}
        />
      </SectionGutters>
      <LogosDivider sourceHref="https://www.untitledui.com/react/resources/logos" />
      <SectionGutters accentColor="#f87171">
        <OfferSection variant="mvp" />
        <TimelineSteps
          accentColor="#f87171"
          steps={[
            {
              title: "Cadrage & Scope",
              description: "Atelier produit pour fixer les priorités, le périmètre fonctionnel et l'architecture cible.",
              duration: "Semaine 1",
            },
            {
              title: "Design UI/UX",
              description: "Maquettes Figma complètes, design system, et validation des parcours utilisateurs.",
              duration: "Semaines 2–3",
            },
            {
              title: "Développement",
              description: "Frontend, API, intégrations. Sprints courts avec démos régulières à chaque étape.",
              duration: "Semaines 4–7",
            },
            {
              title: "Livraison & Handoff",
              description: "Déploiement, documentation technique, et transfert complet. Produit autonome.",
              duration: "Semaine 8",
            },
          ]}
        />
      </SectionGutters>
      <SectionGutters accentColor="#f87171" animated={false}>
        <KeyValuePoints
          sectionTitle="Key Value Points"
          subtitle="Les 6 points qui rendent ce format MVP pragmatique et durable."
          accentColor="#f87171"
          points={[
            {
              icon: "crosshair",
              title: "Arbitrage Design × Tech",
              description:
                "On ne sépare jamais design et développement. Chaque décision UI/UX est pensée avec les contraintes techniques et inversement.",
            },
            {
              icon: "layers",
              title: "Architecture scalable dès le départ",
              description:
                "On code pour ce que vous êtes aujourd'hui, en préparant ce que vous serez demain. Pas de dette technique cachée, pas de refonte dans 6 mois.",
            },
            {
              icon: "eye",
              title: "Vision Produit, pas juste exécution",
              description:
                "Vous apportez votre métier. On challenge le scope, on priorise ce qui compte, on évite ce qui ne sert à rien.",
            },
            {
              icon: "zap",
              title: "Exécution rapide & prédictible",
              description:
                "Timeline et budget fixés en amont. On travaille en sprints courts avec des livrables visibles à chaque étape.",
            },
            {
              icon: "package",
              title: "Livrable clé en main",
              description:
                "MVP déployé, designé, documenté et handoffé. Vous repartez avec un produit prêt à évoluer.",
            },
            {
              icon: "rocket",
              title: "Expérience startup & SaaS",
              description:
                "On a vécu le cycle complet: idée → design → dev → production → itération. On sait ce que coûte un MVP mal cadré.",
            },
          ]}
        />
      </SectionGutters>
      <SectionGutters accentColor="#f87171" animated={false}>
        <TestimonialsSection
          sectionTitle="Testimonials"
          accentColor="#f87171"
          testimonials={[
            {
              label: "[Testimonial Quentin]",
              quote:
                "Quentin a su transformer nos besoins métier en architecture technique solide et évolutive. Il pense produit avant de penser code.",
              author: "Prénom N., Rôle, Entreprise (placeholder)",
            },
            {
              label: "[Testimonial Enzo]",
              quote:
                "Enzo a une capacité rare à comprendre rapidement nos enjeux et à les traduire en une interface qui fait sens pour nos utilisateurs dès le premier sprint.",
              author: "Prénom N., Rôle, Entreprise (placeholder)",
            },
            {
              label: "[Testimonial commun - SaaS B2B]",
              quote:
                "En faisant appel à Quentin et Enzo ensemble, on a eu l'impression d'avoir une équipe produit complète. Pas besoin de faire l'interface entre design et dev.",
              author: "Prénom N., Rôle, Entreprise (placeholder)",
            },
          ]}
        />
      </SectionGutters>
      <TechDivider />
      <SectionGutters accentColor="#f87171" animated={false}>
        <CTASection accentColor="#f87171" />
      </SectionGutters>
    </main>
  );
}
