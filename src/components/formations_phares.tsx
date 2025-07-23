'use client';

import React from "react";
import Link from "next/link";

const formations = [
  {
    title: "Formation HCR",
    description: "Développez vos compétences dans l'hôtellerie et la restauration.",
    slug: "/formations/hcr", // Ajustez selon votre structure d'URLs
  },
  {
    title: "Formation AEPE",
    description: "Préparez-vous au métier d'accompagnant éducatif petite enfance.",
    slug: "/formations/aepe",
  },
  {
    title: "Formation ESF",
    description: "Engagez-vous dans le social avec l'intervention en économie sociale et familiale.",
    slug: "/formations/esf",
  },
  {
    title: "Concepteur Designer UI",
    description: "Maîtrisez le design d'interface et l'expérience utilisateur.",
    slug: "/formations/designer-ui",
  },
];

export default function NosFormationsPhares() {
  return (
    <section className="py-26 px-4 bg-gradient-to-b from-blue-50 via-white to-gray-50 shadow-top">
      <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Nos <span className="bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">formations</span> phares
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Découvrez nos formations populaires.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {formations.map((formation, index) => (
          <Link href={formation.slug} key={index}>
            <div className="formation-card bg-white hover:bg-blue-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {formation.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {formation.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <style jsx>{`
        .shadow-top {
          box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .formation-card {
          transform-origin: center bottom;
        }
      `}</style>
    </section>
  );
}