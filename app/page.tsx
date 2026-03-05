import Hero from "./components/Hero";
import LogosDivider from "./components/LogosDivider";
import ComparisonSection from "./components/ComparisonSection";
import OfferSection from "./components/OfferSection";
import TechDivider from "./components/TechDivider";
import KeyValuePoints from "./components/KeyValuePoints";
import CTASection from "./components/CTASection";
import TestimonialsSection from "./components/TestimonialsSection";
import TimelineSteps from "./components/TimelineSteps";
import { SectionGutters } from "./components/Gutters";

export default function Home() {
  return (
    <main>
      <SectionGutters accentColor="#34d399" animated={false}>
        <Hero
          label="face à vos users"
          h1={
            <>
              From idea to MVP your users can actually try{" "}
              <span className="uppercase font-accent tracking-normal text-[#34d399] [-webkit-text-fill-color:#34d399]">
                in 5 weeks
              </span>
              .
            </>
          }
          subtitle="We design and build the first real version of your product."
          timeline="5 weeks • €15k–30k • demo-ready"
          accentColor="#34d399"
          reassurance={[
            {
              icon: "target",
              title: "Prix fixe",
              description: "budget maîtrisé, pas de dépassement",
            },
            {
              icon: "zap",
              title: "5 semaines",
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
      <ComparisonSection accentColor="#34d399" />
      <OfferSection />
      <TimelineSteps
        accentColor="#34d399"
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
      <KeyValuePoints
        sectionTitle="Ce qui fait la différence."
        subtitle="Les 6 points qui rendent ce format MVP pragmatique et durable."
        accentColor="#34d399"
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
      <TestimonialsSection
        sectionTitle="Ce qu'ils en disent."
        subtitle="Retours de fondateurs, CTO et product managers qui ont travaillé avec nous."
        accentColor="#34d399"
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
          {
            label: "[Testimonial Startup Fintech]",
            quote:
              "On avait un deadline investisseurs dans 2 mois. Ils ont livré un MVP fonctionnel avec paiement intégré en 7 semaines. Le board a été bluffé.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial CTO]",
            quote:
              "La qualité du code livré est celle qu'on attend d'une équipe senior en interne. Zéro dette technique, documentation claire, on a pu itérer seuls dès le handoff.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial Product Manager]",
            quote:
              "Ce qui change tout, c'est qu'ils challengent le scope. On est arrivés avec 40 features, ils nous ont aidés à en garder 12 — les bonnes.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial CEO]",
            quote:
              "Premier call le lundi, maquettes le vendredi, prototype cliquable la semaine suivante. On n'avait jamais vu cette vélocité.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial Fondateur]",
            quote:
              "Ils ont compris notre métier plus vite que des devs qui bossaient avec nous depuis 6 mois. Le produit reflète exactement notre vision.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial Head of Engineering]",
            quote:
              "L'architecture livrée est propre, testée, documentée. On a pu onboarder notre équipe interne dessus en moins d'une semaine.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
        ]}
      />
      <TechDivider />
      <SectionGutters accentColor="#34d399" animated={false}>
        <CTASection accentColor="#34d399" />
      </SectionGutters>
    </main>
  );
}
