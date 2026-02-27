import Hero from "../components/Hero";
import LogosDivider from "../components/LogosDivider";
import OfferSection from "../components/OfferSection";
import TechDivider from "../components/TechDivider";
import KeyValuePoints from "../components/KeyValuePoints";
import CTASection from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import TimelineSteps from "../components/TimelineSteps";

export default function POCPage() {
  return (
    <main>
      <Hero
        label="devant les invests"
        h1={
          <>
            Votre produit devant les{" "}
            <span className="font-accent tracking-normal uppercase text-[#34d399] [-webkit-text-fill-color:#34d399]">
              invests
            </span>{" "}
            en 3&nbsp;semaines, 13k€.
          </>
        }
        subtitle="Un POC suffisamment réel pour décrocher un « oui »."
        timeline="3 semaines"
        accentColor="#34d399"
        reassurance={[
          {
            icon: "target",
            title: "Prix fixe",
            description: "budget maîtrisé, pas de dépassement",
          },
          {
            icon: "zap",
            title: "3 semaines",
            description: "de l'idée au prototype concret",
          },
          {
            icon: "palette",
            title: "Design + Prototype",
            description: "suffisamment réel pour convaincre",
          },
        ]}
      />
      <LogosDivider />
      <OfferSection variant="poc" />
      <TimelineSteps
        accentColor="#34d399"
        steps={[
          {
            title: "Atelier problématique",
            description: "On isole la question critique — technique, UX ou marché — et on définit le protocole de test.",
            duration: "Jour 1–2",
          },
          {
            title: "Prototype & Design",
            description: "Maquette interactive ou démo fonctionnelle, suffisamment réelle pour tester.",
            duration: "Semaine 1",
          },
          {
            title: "Test & Itération",
            description: "Confrontation aux utilisateurs ou à la contrainte technique. Boucle courte de feedback.",
            duration: "Semaine 2",
          },
          {
            title: "Verdict & Plan d'action",
            description: "Résultats concrets, recommandations, et décision claire : MVP, pivot ou abandon.",
            duration: "Semaine 3",
          },
        ]}
      />
      <KeyValuePoints
        sectionTitle="Key Value Points"
        subtitle="Les 6 points qui font du POC un outil de décision rapide et utile."
        accentColor="#34d399"
        points={[
          {
            icon: "shield",
            title: "Réduction du risque",
            description:
              "Un POC bien cadré vous évite d'investir des mois de dev sur une hypothèse fausse. On identifie le point de friction critique et on y répond d'abord.",
          },
          {
            icon: "crosshair",
            title: "Question unique, réponse claire",
            description:
              "On ne fait pas un POC fourre-tout. On isole une hypothèse - technique, UX ou marché - et on la teste avec rigueur. Le livrable final, c'est une décision.",
          },
          {
            icon: "loop",
            title: "Design & Tech dès le départ",
            description:
              "Même pour un POC, séparer design et dev ralentit tout. On travaille en boucle courte: maquette -> feedback -> intégration -> test.",
          },
          {
            icon: "zap",
            title: "Vitesse d'exécution",
            description:
              "1 à 3 semaines, pas 3 mois. On est habitués à travailler sous contrainte de temps sans sacrifier la qualité du rendu.",
          },
          {
            icon: "compass",
            title: "Orientation post-POC",
            description:
              "On ne vous laisse pas avec un prototype sans lendemain. Chaque POC se termine par un plan d'action: MVP, pivot ou abandon.",
          },
          {
            icon: "brain",
            title: "Connaissance du domaine SaaS",
            description:
              "On a suffisamment construit pour savoir ce qui tient dans le temps et ce qui casse. On vous évite les pièges classiques de l'early-stage.",
          },
        ]}
      />
      <TestimonialsSection
        sectionTitle="Testimonials"
        accentColor="#34d399"
        testimonials={[
          {
            label: "[Testimonial Quentin]",
            quote:
              "Quentin a cette capacité à aller droit au but: identifier ce qui compte vraiment et livrer dessus rapidement. Sur notre POC, il nous a fait économiser des semaines de dev inutile.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial Enzo]",
            quote:
              "Ce qui est impressionnant chez Enzo, c'est sa capacité à matérialiser une idée floue en quelque chose qu'on peut tester en quelques jours. Nos utilisateurs test ont immédiatement compris le concept.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
          {
            label: "[Testimonial commun - SaaS B2B]",
            quote:
              "On a commandé un POC, on a eu l'impression d'avoir un cofondateur technique et produit pendant 3 semaines. Le résultat a directement alimenté nos discussions investisseurs.",
            author: "Prénom N., Rôle, Entreprise (placeholder)",
          },
        ]}
      />
      <TechDivider />
      <CTASection accentColor="#34d399" />
    </main>
  );
}
