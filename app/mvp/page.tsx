import Hero from "../components/Hero";
import WhatSection from "../components/WhatSection";

export default function MVPPage() {
  return (
      <Hero
        label="face à vos users"
        h1={<>Votre produit face à vos{" "}<span className="uppercase font-accent tracking-normal text-[#f87171] [-webkit-text-fill-color:#f87171]">users</span>{" "}en 8 semaines.</>}
        subtitle="Un vrai logiciel, avec le socle complet. Prêt pour vos premiers clients."
        timeline="8 semaines"
        accentColor="#f87171"
        reassurance={[
          { icon: "target", title: "Prix fixe", description: "budget maîtrisé, pas de dépassement" },
          { icon: "zap", title: "8 semaines", description: "un produit complet, prêt pour vos premiers users" },
          { icon: "wrench", title: "Design + Ingénierie", description: "vos users peuvent s'inscrire et payer dès le jour 1" },
        ]}
      />
  );
}
