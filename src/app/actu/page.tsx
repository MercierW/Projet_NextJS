import React from 'react';
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface BlogEvent {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    location: string;
    attendees: number;
    duration: string;
    image: string;
    category: 'conférence' | 'workshop' | 'networking' | 'formation';
    author: {
        name: string;
        avatar: string;
    };
    readTime: string;
}

const mockEvents: BlogEvent[] = [
    {
        id: '1',
        title: 'Révolution IA : Comment l\'intelligence artificielle transforme l\'éducation supérieure',
        excerpt: 'Découvrez les dernières innovations en IA appliquées à l\'enseignement et leur impact sur l\'apprentissage des étudiants de la grande classe.',
        date: '2024-03-15',
        location: 'Amphithéâtre Pasteur',
        attendees: 250,
        duration: '2h30',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        category: 'conférence',
        author: {
            name: 'Dr. Marie Dubois',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face'
        },
        readTime: '5 min'
    },
    {
        id: '2',
        title: 'Workshop Entrepreneuriat : De l\'idée au prototype en 48h',
        excerpt: 'Un weekend intensif pour transformer vos concepts innovants en prototypes concrets. Mentoring par des entrepreneurs chevronnés.',
        date: '2024-03-22',
        location: 'Lab Innovation',
        attendees: 40,
        duration: '48h',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
        category: 'workshop',
        author: {
            name: 'Thomas Laurent',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
        },
        readTime: '3 min'
    },
    {
        id: '3',
        title: 'Networking Alumni : Construire son réseau professionnel',
        excerpt: 'Rencontrez les diplômés qui font bouger les lignes dans leurs secteurs. Échanges, conseils et opportunités au programme.',
        date: '2024-03-28',
        location: 'Grande Salle des Fêtes',
        attendees: 180,
        duration: '3h',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
        category: 'networking',
        author: {
            name: 'Sophie Martin',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
        },
        readTime: '4 min'
    },
    {
        id: '4',
        title: 'Formation Leadership : Développer son potentiel de dirigeant',
        excerpt: 'Programme intensif de développement personnel et professionnel pour les futurs leaders de demain.',
        date: '2024-04-05',
        location: 'Centre de Formation',
        attendees: 60,
        duration: '1 journée',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
        category: 'formation',
        author: {
            name: 'Pierre Rousseau',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
        },
        readTime: '6 min'
    }
];

const getCategoryColor = (category: BlogEvent['category']) => {
    const colors = {
        conférence: 'bg-blue-100 text-blue-800 border-blue-200',
        workshop: 'bg-green-100 text-green-800 border-green-200',
        networking: 'bg-purple-100 text-purple-800 border-purple-200',
        formation: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[category];
};

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

export default function BlogEventsList() {
    return (
        <div>
            <main>
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
                    {/* En-tête */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Événements de la Grande Classe
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez les événements exceptionnels qui façonnent l'avenir de notre communauté étudiante et académique.
                        </p>
                    </div>

                    {/* Grille des articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {mockEvents.map((event) => (
                            <article
                                key={event.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                {/* Image de l'article */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(event.category)}`}>
                                            {event.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Contenu de l'article */}
                                <div className="p-6">
                                    {/* Titre */}
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                                        {event.title}
                                    </h2>

                                    {/* Extrait */}
                                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                        {event.excerpt}
                                    </p>

                                    {/* Métadonnées de l'événement */}
                                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                            <span>{formatDate(event.date)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-green-500" />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <Users className="w-4 h-4 mr-1 text-purple-500" />
                                                <span>{event.attendees} participants</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1 text-orange-500" />
                                                <span>{event.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Auteur et temps de lecture */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center">
                                            <img
                                                src={event.author.avatar}
                                                alt={event.author.name}
                                                className="w-8 h-8 rounded-full mr-3"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{event.author.name}</p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">{event.readTime} de lecture</span>
                                    </div>

                                    {/* Call to action */}
                                    <div className="mt-4">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-md cursor-pointer">
                                            Lire l'article complet
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination ou bouton "Charger plus" */}
                    <div className="text-center mt-12">
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer">
                            Charger plus d'articles
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}