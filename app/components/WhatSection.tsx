"use client";

import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  className?: string;
};

function Card({ title, description, className }: CardProps) {
  return (
    <div className={cn("rounded-xl shadow-sm p-1 flex flex-col overflow-hidden h-full", className)}>
      {/* Illustration placeholder */}
      <div className="bg-gray-50 h-48 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 bg-gray-100 rounded-lg" />
          <div className="text-center">
            <p className="text-sm font-medium text-black">mon-projet.zip</p>
            <p className="text-xs text-black/60">
              Dernière ouverture
              <br />
              le 23/07/22
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col gap-1">
        <p className="font-geologica font-medium text-base text-black tracking-[-0.48px]">
          {title}
        </p>
        <p className="font-geologica font-light text-base text-black/80 tracking-[-0.48px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhatSection() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <span className="font-geologica font-light text-sm text-black/32 tracking-[-0.42px] uppercase">
              #what
            </span>
            <h2 className="font-bricolage font-extrabold text-[40px] leading-none tracking-[-1.2px] uppercase text-black">
              Ce qui freine votre produit
            </h2>
            <p className="font-geologica font-light text-base text-black/80 tracking-[-0.48px] max-w-2xl">
              Avant de parler d&apos;outils ou de méthodes, mettons le doigt sur ce qui freine vraiment votre croissance.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 max-w-6xl">
            <Card
              className="md:col-span-2"
              title="Vous restez bloqué à l'idée"
              description="Vous avez la vision, mais pas les ressources pour livrer rapidement un POC ou un MVP."
            />
            <Card
              className="md:col-span-2"
              title="Votre équipe n'existe pas"
              description="Entre freelances à piloter comme des ressources et agences figées dans leurs forfaits, il n'existe pas cette équipe hybride, autonome, qui avancerai avec vous comme si elle était déjà en interne."
            />
            <Card
              className="md:col-span-2"
              title="Vous avez Vibe-Codé jusqu'au plafond de verre"
              description="On vous a vendu le rêve : quelques clics en no-code, un peu d'IA magique, et votre startup devait naître en un week-end. Ça n'a pas fonctionné…"
            />
            <Card
              className="md:col-span-3"
              title="Vos cycles n'aboutissent pas"
              description="Entre itérations et blocages techniques, rien ne sort au bon moment. Vous restez coincé dans un « work in progress » permanent."
            />
            <Card
              className="md:col-span-3"
              title="Votre produit n'inspire pas confiance"
              description="Vous avez déjà un produit, mais il sonne faux : code vieillissant, design bricolé, expérience confuse. Chaque démo devient un moment gênant où vous espérez que personne ne remarque les failles."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
