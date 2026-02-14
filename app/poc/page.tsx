import Hero from "../components/Hero";
import WhatSection from "../components/WhatSection";

export default function POCPage() {
  return (
      <Hero
        label="devant les invests"
        h1={<>Votre produit devant les{" "}<span className="font-accent tracking-normal uppercase text-[#34d399] [-webkit-text-fill-color:#34d399]">invests</span>{" "}en 3 semaines.</>}
        subtitle="Un POC suffisamment réel pour décrocher un «oui»."
        timeline="3 semaines"
        accentColor="#34d399"
        reassurance={[
          { icon: "target", title: "Prix fixe", description: "budget maîtrisé, pas de dépassement" },
          { icon: "zap", title: "3 semaines", description: "de l'idée au prototype concret" },
          { icon: "palette", title: "Design + Prototype", description: "suffisamment réel pour convaincre" },
        ]}
      />
  );
}
