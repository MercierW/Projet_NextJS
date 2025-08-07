import { MapPin, Palette, Users } from "lucide-react";

export const actualites = [
  {
    title: "Ouverture de notre nouveau centre à Lyon",
    summary: "Découvrez notre tout nouveau centre de formation dans le 3e arrondissement de Lyon.",
    link: "/actualites/ouverture-centre-lyon",
    date: "15 juillet 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80",
    category: "Centres",
    icon: MapPin,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Lancement de la formation UX/UI",
    summary: "Une nouvelle formation pour les futurs concepteurs designers UI est désormais disponible.",
    link: "/actualites/lancement-formation-uxui",
    date: "8 juillet 2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80",
    category: "Formation",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Partenariat avec l'École Numérique",
    summary: "La Grande Classe signe un partenariat stratégique pour renforcer l'accès à la formation numérique.",
    link: "/actualites/partenariat-ecole-numerique",
    date: "1 juillet 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80",
    category: "Partenariat",
    icon: Users,
    color: "from-green-500 to-emerald-500"
  },
];