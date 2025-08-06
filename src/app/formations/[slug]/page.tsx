import Image from "next/image";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { formationThemes } from "@/lib/formations";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

async function getFormationBySlug(slug: string) {
  const allFormations = Object.values(formationThemes).flatMap((theme) => theme.formations);
  return allFormations.find((formation) => formation.slug === slug);
}

export default async function FormationDetail({ params }: Params) {
  const { slug } = await params;
  const formation = await getFormationBySlug(slug);

  if (!formation) return notFound();

  return (
    <div>
      <Navbar />
      <main>
        <div className="mt-5 mb-5 p-25 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{formation.title}</h1>
          <Image
            src={formation.image}
            alt={formation.title}
            width={800}
            height={400}
            className="rounded-xl mb-6 object-cover w-full h-auto"
          />
          <p className="text-lg text-gray-700">{formation.description}</p>
          <div className="mt-4 text-gray-600">Durée : {formation.duration}</div>
          <div className="mt-1 text-gray-600">Participants : {formation.participants}</div>
          <div className="mt-1 text-gray-600">Prix : {formation.price}</div>
          {/* Tu peux ajouter ici un bouton "S'inscrire" ou autres infos */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const allFormations = Object.values(formationThemes).flatMap((theme) => theme.formations);
  return allFormations.map((formation) => ({
    slug: formation.slug,
  }));
}