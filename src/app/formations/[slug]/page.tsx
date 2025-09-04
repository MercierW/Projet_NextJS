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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-5 relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4 leading-tight">{formation.title}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Développez vos compétences avec cette formation professionnelle
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      <main className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            {/* Image Section */}
            <div className="relative">
              <Image
                src={formation.image}
                alt={formation.title}
                width={1200}
                height={600}
                className="w-full h-80 object-cover object-[50%_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Description */}
                <div className="lg:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">À propos de cette formation</h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      {formation.description}
                    </p>
                    
                    {/* Features/Benefits */}
                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">Ce que vous allez apprendre</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center text-blue-700">
                          <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Concepts fondamentaux
                        </div>
                        <div className="flex items-center text-blue-700">
                          <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Exercices pratiques
                        </div>
                        <div className="flex items-center text-blue-700">
                          <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Projets concrets
                        </div>
                        <div className="flex items-center text-blue-700">
                          <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Certification
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar with details and CTA */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    {/* Formation Details Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Détails de la formation</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm text-gray-500">Durée</p>
                            <p className="font-semibold text-gray-900">{formation.duration}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <div>
                            <p className="text-sm text-gray-500">Participants</p>
                            <p className="font-semibold text-gray-900">{formation.participants}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm text-gray-500">Statut</p>
                            <p className={`font-semibold ${formation.open === "Session Ouverte" ? "text-green-600" : "text-red-600"}`}>
                              {formation.open}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-4">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                        S&apos;inscrire maintenant
                      </button>
                      
                      <button className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Demander des informations
                      </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-8 text-center">
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Satisfait ou remboursé
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        4.8/5 - 247 avis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-18 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à commencer votre formation ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Rejoignez notre communauté d'apprenants et transformez votre carrière dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Voir toutes les formations
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Nous contacter
              </button>
            </div>
          </div>
        </section>
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