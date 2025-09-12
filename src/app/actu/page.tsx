import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { Calendar, ExternalLink } from 'lucide-react';
import { prisma } from '@/lib/db';
import type { Actualite } from '@prisma/client';

// Fonction pour récupérer toutes les actualités
async function getActualites(): Promise<Actualite[]> {
    try {
        const actualites = await prisma.actualite.findMany({
            orderBy: { createdAt: 'desc' }
        });
        
        return actualites;
    } catch (error) {
        console.error('Erreur lors de la récupération des actualités:', error);
        return [];
    }
}

export default async function BlogEventsList() {
    const events = await getActualites();

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Fonction pour tronquer le texte
    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    if (events.length === 0) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="text-center py-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Événements de la Grande Classe
                        </h1>
                        <p className="text-gray-600 text-lg mb-8">
                            Aucun événement disponible pour le moment.
                        </p>
                        <Link 
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Retour à l'accueil
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event) => (
                        <article
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            {/* Image de l'article */}
                            {event.image && (
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}

                            {/* Contenu de l'article */}
                            <div className="p-6">
                                {/* Titre */}
                                <h2 className="text-xl font-bold text-blue-600 mb-3">
                                    {event.title}
                                </h2>

                                {/* Extrait du contenu */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {truncateText(event.content, 60)}
                                </p>

                                {/* Métadonnées de l'événement */}
                                <div className="mb-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                                        <span>{formatDate(event.createdAt)}</span>
                                    </div>
                                </div>

                                {/* Call to action */}
                                <div className="mt-6">
                                    <Link
                                        href={`/actu/${event.slug}`}
                                        className="group flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-md"
                                    >
                                        Lire l'article complet
                                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}