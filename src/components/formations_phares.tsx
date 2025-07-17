import React from "react";

const formations = [
  {
    title: "Formation HCR",
    description: "Développez vos compétences dans l'hôtellerie et la restauration.",
  },
  {
    title: "Formation AEPE",
    description: "Préparez-vous au métier d'accompagnant éducatif petite enfance.",
  },
  {
    title: "Formation ESF",
    description: "Engagez-vous dans le social avec l’intervention en économie sociale et familiale.",
  },
  {
    title: "Concepteur Designer UI",
    description: "Maîtrisez le design d’interface et l’expérience utilisateur.",
  },
];

export default function NosFormationsPhares() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Nos formations phares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{formation.title}</h3>
            <p className="text-gray-600">{formation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
