import { ArrowLeft, BookOpen, Clock, Users, Award } from 'lucide-react'
import Navbar from '@/components/Nav'
import Footer from "@/components/Footer";

export default function FormationPage() {
  const formationThemes = {
    restauration: {
      title: "Restauration",
      icon: "🍽️",
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
          title: "Chef de Cuisine Professionnel",
          description: "Maîtrisez les techniques culinaires avancées et la gestion d'une brigade en cuisine",
          duration: "16 semaines",
          level: "Avancé",
          participants: 12,
          price: "2 200€"
        },
        {
          id: 2,
          title: "Service en Salle et Sommellerie",
          description: "Excellence du service client et connaissance des vins pour une expérience gastronomique parfaite",
          duration: "10 semaines",
          level: "Intermédiaire",
          participants: 20,
          price: "1 400€"
        },
        {
          id: 3,
          title: "Hygiène et Sécurité Alimentaire",
          description: "Formation HACCP et bonnes pratiques d'hygiène en restauration commerciale",
          duration: "2 semaines",
          level: "Débutant",
          participants: 30,
          price: "450€"
        }
      ]
    },
    administration: {
      title: "Administration",
      icon: "📋",
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
          title: "Gestionnaire de Paie",
          description: "Maîtrisez le calcul des salaires, les déclarations sociales et la législation du travail",
          duration: "14 semaines",
          level: "Intermédiaire",
          participants: 25,
          price: "1 800€"
        },
        {
          id: 5,
          title: "Assistant(e) de Direction",
          description: "Développez vos compétences en organisation, communication et gestion administrative",
          duration: "12 semaines",
          level: "Intermédiaire",
          participants: 20,
          price: "1 500€"
        },
        {
          id: 6,
          title: "Comptabilité et Fiscalité",
          description: "Formation complète en comptabilité générale et déclarations fiscales",
          duration: "18 semaines",
          level: "Débutant",
          participants: 30,
          price: "2 000€"
        }
      ]
    },
    social: {
      title: "Social",
      icon: "🤝",
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
          title: "Accompagnement Social et Familial",
          description: "Techniques d'accompagnement et de soutien aux familles en difficulté",
          duration: "20 semaines",
          level: "Intermédiaire",
          participants: 18,
          price: "2 400€"
        },
        {
          id: 8,
          title: "Aide à la Personne",
          description: "Formation aux soins d'hygiène et de confort pour personnes dépendantes",
          duration: "8 semaines",
          level: "Débutant",
          participants: 25,
          price: "1 200€"
        },
        {
          id: 9,
          title: "Médiation et Résolution de Conflits",
          description: "Techniques de médiation pour résoudre les conflits sociaux et familiaux",
          duration: "6 semaines",
          level: "Avancé",
          participants: 15,
          price: "900€"
        }
      ]
    },
    management: {
      title: "Management",
      icon: "👥",
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
          title: "Leadership et Gestion d'Équipe",
          description: "Développez vos compétences de leader et apprenez à motiver vos équipes",
          duration: "10 semaines",
          level: "Intermédiaire",
          participants: 20,
          price: "1 600€"
        },
        {
          id: 11,
          title: "Gestion de Projet Agile",
          description: "Maîtrisez les méthodologies Scrum et Kanban pour gérer vos projets efficacement",
          duration: "8 semaines",
          level: "Intermédiaire",
          participants: 25,
          price: "1 300€"
        },
        {
          id: 12,
          title: "Ressources Humaines et Recrutement",
          description: "Techniques de recrutement, gestion des talents et développement RH",
          duration: "12 semaines",
          level: "Avancé",
          participants: 18,
          price: "1 800€"
        }
      ]
    },
    programmation: {
      title: "Programmation & Design",
      icon: "💻",
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
          title: "Développement Web Full-Stack",
          description: "Apprenez React, Next.js, Node.js et TypeScript pour créer des applications complètes",
          duration: "16 semaines",
          level: "Intermédiaire",
          participants: 25,
          price: "2 500€"
        },
        {
          id: 14,
          title: "UI/UX Design",
          description: "Créez des interfaces utilisateur modernes et intuitives avec Figma et les dernières tendances",
          duration: "12 semaines",
          level: "Débutant",
          participants: 20,
          price: "1 800€"
        },
        {
          id: 15,
          title: "DevOps et Cloud Computing",
          description: "Maîtrisez Docker, Kubernetes, AWS et l'automatisation des déploiements",
          duration: "14 semaines",
          level: "Avancé",
          participants: 15,
          price: "2 200€"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      {/* Hero Section */}
      <section className="py-26">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(formationThemes).map(([themeKey, theme]) => (
            <div key={themeKey} className="mb-20">
              {/* En-tête du thème */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 ${theme.colors.accent} px-6 py-3 rounded-full text-lg font-semibold mb-4`}>
                  <span className="text-2xl">{theme.icon}</span>
                  {theme.title}
                </div>
                <div className={`h-1 w-24 bg-gradient-to-r ${theme.colors.primary} mx-auto rounded-full`}></div>
              </div>

              {/* Grille des formations */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {theme.formations.map((formation) => (
                  <div key={formation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`h-48 bg-gradient-to-br ${theme.colors.primary} relative`}>
                      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                      <div className="absolute top-4 right-4">
                        <span className="text-3xl">{theme.icon}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className={`inline-block ${theme.colors.badge} bg-opacity-80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium`}>
                          {formation.level}
                        </div>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
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

      <Footer />
    </div>
  )
}