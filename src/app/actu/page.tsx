'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { Calendar, ExternalLink } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface BlogEvent {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
    link: string;
    slug: string;
}

export default function BlogEventsList() {
    const [events, setEvents] = useState<BlogEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClientComponentClient();

    // Fonction pour générer un slug à partir du titre
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
            .replace(/[^a-z0-9\s-]/g, '') // Garder seulement lettres, chiffres, espaces et tirets
            .trim()
            .replace(/\s+/g, '-') // Remplacer espaces par tirets
            .replace(/-+/g, '-'); // Éviter les tirets multiples
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Fonction pour tronquer le texte
    const truncateText = (text: string, maxLength: number = 60) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    // Récupération des données depuis Supabase
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                
                const { data, error } = await supabase
                    .from('articles')
                    .select('*')
                    .order('date', { ascending: false });

                if (error) {
                    console.error('❌ Erreur Supabase:', error);
                    throw error;
                }
                
                // Ajouter le slug généré à chaque article
                const eventsWithSlug = data?.map(event => ({
                    ...event,
                    slug: generateSlug(event.title)
                })) || [];
                
                setEvents(eventsWithSlug);
                
            } catch (err) {
                console.error('💥 Erreur lors du chargement des événements:', err);
                setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [supabase]);

    if (loading) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Chargement des événements...</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                            <h3 className="font-medium mb-2">Erreur de chargement</h3>
                            <p>{error}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (events.length === 0) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">Aucun événement disponible pour le moment.</p>
                        <Link 
                            href="/"
                            className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
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
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                                        Article
                                    </span>
                                </div>
                            </div>

                            {/* Contenu de l'article */}
                            <div className="p-6">
                                {/* Titre */}
                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {event.title}
                                </h2>

                                {/* Extrait */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {truncateText(event.summary)}
                                </p>

                                {/* Métadonnées de l'événement */}
                                <div className="mb-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                                        <span>{formatDate(event.date)}</span>
                                    </div>
                                </div>

                                {/* Call to action */}
                                <div className="mt-6">
                                    <Link
                                        href={`/articles/${event.slug}`}
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

                {/* Pagination */}
                <div className="text-center mt-12">
                    <button 
                        type="button"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer"
                        onClick={() => {
                            // Logique pour charger plus d'articles
                            console.log('Charger plus d\'articles');
                        }}
                    >
                        Charger plus d'articles
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}