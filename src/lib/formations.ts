export const formationThemes = {
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
          slug: "commercialisation-services-hcr",
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
          slug: "producton-service-restauration",
          title: "Production et Service en Restauration",
          description: "Apprenez les techniques de préparation, de remise en température et de service en restauration collective ou rapide.",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 14,
          price: "1 600€",
          image: "/img_psr_10.png"
        },
        {
          id: 3,
          slug: "commercialisation-services-restauration",
          title: "Commercialisation et Services en Restauration",
          description: "Développez vos compétences en accueil client, service en salle, techniques de vente et mise en valeur de l'offre de restauration.",
          duration: "14 semaines",
          open: "Session Fermée",
          participants: 12,
          price: "1 900€",
          image: "/img_csr.png"
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
          slug: "employe-administratif-accueil",
          title: "Employé(e) Administratif(ve) et d'Accueil",
          description: "Apprenez les bases de l'accueil, de la gestion administrative et de la communication professionnelle.",
          duration: "14 semaines",
          open: "Session Ouverte",
          participants: 12,
          price: "1 950€",
          image: "/img_feaa.png"
        },
        {
          id: 5,
          slug: "assistant-comptable",
          title: "Assistant(e) Comptable",
          description: "Acquérez les bases de la comptabilité, la gestion des écritures et le suivi administratif des comptes.",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 20,
          price: "1 500€",
          image: "/img_ac.png"
        },
        {
          id: 6,
          slug: "gestion-comptable-fiscale",
          title: "Gestion Comptable et Fiscale",
          description: "Maîtrisez les principes de la comptabilité, la fiscalité d'entreprise et les obligations légales.",
          duration: "12 semaines",
          open: "Session Fermée",
          participants: 20,
          price: "1 500€",
          image: "/img_gcf.png"
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
          slug: "economie-sociale-familiale",
          title: "Économie Sociale et Familiale",
          description: "Formez-vous à l'accompagnement des publics dans les domaines du quotidien : alimentation, logement et insertion sociale.",
          duration: "16 semaines",
          open: "Session Ouverte",
          participants: 10,
          price: "2 000 €",
          image: "/img_esf.png"
        },
        {
          id: 8,
          slug: "accompagnant-educatif-petite-enfance",
          title: "Accompagnant Éducatif Petite Enfance",
          description: "Préparez-vous au CAP AEPE et développez vos compétences en accueil, soins et éveil du jeune enfant.",
          duration: "10 semaines",
          open: "Session Ouverte",
          participants: 25,
          price: "1 200€",
          image: "/img_aepe.png"
        },
        {
          id: 9,
          slug: "accompagnement-soins-personne",
          title: "Accompagnement et Soins à la Personne",
          description: "Formez-vous aux gestes professionnels pour accompagner les personnes en perte d'autonomie au quotidien.",
          duration: "10 semaines",
          open: "Session Ouverte",
          participants: 25,
          price: "1 200€",
          image: "/img_asp.png"
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
          slug: "management-commercial-operationnel",
          title: "Management Commercial Opérationnel",
          description: "Développez vos compétences en gestion, vente et animation d'une unité commerciale",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 20,
          price: "1 500€",
          image: "/img_mco.png"
        },
        {
          id: 11,
          slug: "gestion-projet-agile",
          title: "Gestion de Projet Agile",
          description: "Maîtrisez les méthodologies Scrum et Kanban pour gérer vos projets efficacement",
          duration: "8 semaines",
          open: "Session Ouverte",
          participants: 25,
          price: "1 300€",
          image: "/img_gpa.png"
        },
        {
          id: 12,
          slug: "ressources-humaines-recrutement",
          title: "Ressources Humaines et Recrutement",
          description: "Techniques de recrutement, gestion des talents et développement RH",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 18,
          price: "1 800€",
          image: "/img_rh.png"
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
          slug: "concepteur-developpeur-applications",
          title: "Concepteur Développeur d'Applications",
          description: "Maîtrisez la conception, le développement et la maintenance d'applications web et mobiles",
          duration: "16 semaines",
          open: "Session Ouverte",
          participants: 15,
          price: "2 000€",
          image: "/img_cda.png"
        },
        {
          id: 14,
          slug: "concepteur-designer-ui",
          title: "Concepteur Designer UI",
          description: "Créez des interfaces utilisateur modernes et intuitives avec Figma et les dernières tendances",
          duration: "12 semaines",
          open: "Session Ouverte",
          participants: 20,
          price: "1 800€",
          image: "/img_cdui.png"
        },
        {
          id: 15,
          slug: "devops-cloud-computing",
          title: "DevOps et Cloud Computing",
          description: "Maîtrisez Docker, Kubernetes, AWS et l'automatisation des déploiements",
          duration: "14 semaines",
          open: "Session Fermée",
          participants: 15,
          price: "2 200€",
          image: "/img_dcc.png"
        }
      ]
    }
  }