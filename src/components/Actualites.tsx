'use client';

import React from "react";

const actualites = [
  {
    title: "Ouverture de notre nouveau centre à Lyon",
    summary: "Découvrez notre tout nouveau centre de formation dans le 3e arrondissement de Lyon.",
    link: "/actualites/ouverture-centre-lyon",
    date: "15 juillet 2025",
  },
  {
    title: "Lancement de la formation UX/UI",
    summary: "Une nouvelle formation pour les futurs concepteurs designers UI est désormais disponible.",
    link: "/actualites/lancement-formation-uxui",
    date: "8 juillet 2025",
  },
  {
    title: "Partenariat avec l'École Numérique",
    summary: "La Grande Classe signe un partenariat stratégique pour renforcer l’accès à la formation numérique.",
    link: "/actualites/partenariat-ecole-numerique",
    date: "1 juillet 2025",
  },
];

export default function Actualites() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Quoi de neuf chez La Grande Classe ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {actualites.map((actu, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{actu.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{actu.date}</p>
            <p className="text-gray-700 mb-4">{actu.summary}</p>
            <a
              href={actu.link}
              className="text-indigo-600 font-medium hover:underline"
            >
              Lire l’article →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
