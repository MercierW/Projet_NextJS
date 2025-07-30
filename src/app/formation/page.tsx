import { ArrowLeft, BookOpen, Clock, Users, Award } from 'lucide-react'
import Navbar from '@/components/Nav'
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function FormationPage() {
  const formationThemes = {
    restauration: {
      title: "Restauration",
      colors: {
        primary: "from-orange-400 to-red-500",
        accent: "bg-orange-100 text-orange-800",
        button: "bg-orange-600 hover:bg-orange-700",
        text: "text-orange-600",
        badge: "bg-orange-600"
      },
      formations: [
        {
          id: 1,
          title: "Commercialisation et Services en Hôtel-Café-Restaurant",
          description: "Apprenez les bases du service en salle, de l'accueil client et des bonnes pratiques en hôtellerie et restauration.",
          duration: "10 semaines",
          open: "Session Ouverte",
          participants: 15,
          price: "1 800€",
          image: "/img_hcr_02.png"
        },
        {
          id: 2,
          title: "Production et Service en Restauration",
          description: "Apprenez les techniques de préparation, de remise en température et de service en restauration collective ou rapide.",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 14,
          price: "1 600€",
          image: "/img_psr_08.png"
        },
        {
          id: 3,
          title: "Commercialisation et Services en Restauration",
          description: "Développez vos compétences en accueil client, service en salle, techniques de vente et mise en valeur de l'offre de restauration.",
          duration: "14 semaines",
          open: "Session Fermée",
          participants: 12,
          price: "1 900€",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=300&fit=crop&auto=format&q=80"
        }
      ]
    },
    administration: {
      title: "Administration",
      colors: {
        primary: "from-blue-400 to-indigo-500",
        accent: "bg-blue-100 text-blue-800",
        button: "bg-blue-600 hover:bg-blue-700",
        text: "text-blue-600",
        badge: "bg-blue-600"
      },
      formations: [
        {
          id: 4,
          title: "Formation Employé(e) Administratif(ve) et d'Accueil",
          description: "Apprenez les bases de l'accueil, de la gestion administrative et de la communication professionnelle.",
          duration: "14 semaines",
          open: "Session Ouverte",
          participants: 12,
          price: "1 950€",
          image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6791?w=600&h=300&fit=crop&auto=format&q=80"
        },
        {
          id: 5,
          title: "Assistant(e) Comptable",
          description: "Acquérez les bases de la comptabilité, la gestion des écritures et le suivi administratif des comptes.",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 20,
          price: "1 500€",
          image: "/images/formations/assistant-comptable.jpg"
        },
        {
          id: 6,
          title: "Gestion Comptable et Fiscale",
          description: "Maîtrisez les principes de la comptabilité, la fiscalité d'entreprise et les obligations légales.",
          duration: "12 semaines",
          open: "Session Fermée",
          participants: 20,
          price: "1 500€",
          image: "/images/formations/gestion-comptable-fiscale.jpg"
        }
      ]
    },
    social: {
      title: "Social",
      colors: {
        primary: "from-green-400 to-emerald-500",
        accent: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700",
        text: "text-green-600",
        badge: "bg-green-600"
      },
      formations: [
        {
          id: 7,
          title: "Formation ESF : Économie Sociale et Familiale",
          description: "Formez-vous à l'accompagnement des publics dans les domaines du quotidien : alimentation, logement et insertion sociale.",
          duration: "16 semaines",
          open: "Session Ouverte",
          participants: 10,
          price: "2 000 €",
          image: "/img_11.png"
        },
        {
          id: 8,
          title: "Accompagnant Éducatif Petite Enfance",
          description: "Préparez-vous au CAP AEPE et développez vos compétences en accueil, soins et éveil du jeune enfant.",
          duration: "10 semaines",
          open: "Session Ouverte",
          participants: 25,
          price: "1 200€",
          image: "/img_08.png"
        },
        {
          id: 9,
          title: "Accompagnement et Soins à la Personne",
          description: "Formez-vous aux gestes professionnels pour accompagner les personnes en perte d'autonomie au quotidien.",
          duration: "10 semaines",
          open: "Session Ouverte",
          participants: 25,
          price: "1 200€",
          image: "/images/formations/soins-personne.jpg"
        }
      ]
    },
    management: {
      title: "Management",
      colors: {
        primary: "from-purple-400 to-pink-500",
        accent: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700",
        text: "text-purple-600",
        badge: "bg-purple-600"
      },
      formations: [
        {
          id: 10,
          title: "Management Commercial Opérationnel",
          description: "Développez vos compétences en gestion, vente et animation d'une unité commerciale",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 20,
          price: "1 500€",
          image: "/images/formations/mco.jpg"
        },
        {
          id: 11,
          title: "Gestion de Projet Agile",
          description: "Maîtrisez les méthodologies Scrum et Kanban pour gérer vos projets efficacement",
          duration: "8 semaines",
          open: "Session Ouverte",
          participants: 25,
          price: "1 300€",
          image: "/images/formations/gestion-projet.jpg"
        },
        {
          id: 12,
          title: "Ressources Humaines et Recrutement",
          description: "Techniques de recrutement, gestion des talents et développement RH",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 18,
          price: "1 800€",
          image: "/images/formations/ressources-humaines.jpg"
        }
      ]
    },
    programmation: {
      title: "Programmation & Design",
      colors: {
        primary: "from-cyan-400 to-blue-500",
        accent: "bg-cyan-100 text-cyan-800",
        button: "bg-cyan-600 hover:bg-cyan-700",
        text: "text-cyan-600",
        badge: "bg-cyan-600"
      },
      formations: [
        {
          id: 13,
          title: "Concepteur Développeur d'Applications (CDA)",
          description: "Maîtrisez la conception, le développement et la maintenance d'applications web et mobiles",
          duration: "16 semaines",
          open: "Session Ouverte",
          participants: 15,
          price: "2 000€",
          image: "/images/formations/cda.jpg"
        },
        {
          id: 14,
          title: "Concepteur Designer UI",
          description: "Créez des interfaces utilisateur modernes et intuitives avec Figma et les dernières tendances",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 20,
          price: "1 800€",
          image: "/img_10.png"
        },
        {
          id: 15,
          title: "DevOps et Cloud Computing",
          description: "Maîtrisez Docker, Kubernetes, AWS et l'automatisation des déploiements",
          duration: "14 semaines",
          open: "Session Fermée",
          participants: 15,
          price: "2 200€",
          image: "/images/formations/devops-cloud.jpg"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-46">
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
          <div className="width-full">
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
                    <div key={formation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
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
                          <span className={`inline-block ${theme.colors.badge} bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white`}>
                            {formation.open}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {formation.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
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

                        <div className="flex items-center justify-between">
                          <div className={`text-2xl font-bold ${theme.colors.text}`}>
                            {formation.price}
                          </div>
                          <button className={`${theme.colors.button} text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer`}>
                            S'inscrire
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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
      {/* Footer */}
      <Footer />
    </div>
  )
}