import Navbar from '@/components/Nav'
import Footer from "@/components/Footer";
import Image from 'next/image';
import Link from "next/link";
import { BookOpen, Clock, Users, Award } from 'lucide-react'
import { formationThemes } from "@/lib/formations";

export default function FormationPage() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Formations Professionnelles
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Développez vos
              <span className="text-blue-600"> compétences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Rejoignez nos formations spécialisées et boostez votre carrière dans le développement web.
              Encadrement expert, projets pratiques et certification à la clé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="font-semibold text-2xl text-blue-600">1500+</div>
                <div className="text-sm text-gray-600">Étudiants formés</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="font-semibold text-2xl text-green-600">96%</div>
                <div className="text-sm text-gray-600">Taux de réussite</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="font-semibold text-2xl text-purple-600">4.9/5</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="font-semibold text-2xl text-orange-600">5</div>
                <div className="text-sm text-gray-600">Domaines d'expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations par Thème */}
        <section className="">
          <div className="w-full">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            {Object.entries(formationThemes).map(([themeKey, theme]) => (
              <div
                key={themeKey}
                className={`py-28 px-16 shadow-inner bg-gradient-to-br ${theme.colors.accent}/10`}
              >
                {/* En-tête du thème */}
                <div className="text-center mb-12">
                  <h2 className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent mb-2 tracking-wider leading-normal pb-2`}>
                    {theme.title}
                  </h2>
                  <div className={`h-1.5 w-32 bg-gradient-to-r ${theme.colors.primary} mx-auto rounded-full`}></div>
                </div>

                {/* Grille des formations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {theme.formations.map((formation) => (
                    <div key={formation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col">
                      <div className="h-48 relative overflow-hidden">
                        {/* Image avec effet de zoom */}
                        <Image
                          src={formation.image}
                          alt={formation.title}
                          fill
                          className="object-cover object-[50%_10%] transition-transform duration-300 group-hover:scale-110 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Badge niveau */}
                        <div className="absolute bottom-4 left-4">
                          <span className={`inline-block backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white ${
                            formation.open 
                              ? 'bg-green-500 bg-opacity-90' 
                              : 'bg-red-500 bg-opacity-90'
                          }`}>
                            {formation.open ? 'Session ouverte' : 'Session fermée'}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {formation.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                          {formation.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            {formation.duration}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            {formation.participants} participants max
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Award className="w-4 h-4" />
                            Certification incluse
                          </div>
                        </div>

                        <div className="flex justify-end mt-auto">
                          <Link
                            href={`/formations/${formation.slug}`}
                            className={`${theme.colors.button} text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer`}
                          >
                            S'inscrire
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}