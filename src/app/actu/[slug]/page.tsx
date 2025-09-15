import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { prisma } from '@/lib/db';
import type { Actualite } from '@prisma/client';
import ShareButton from '@/components/ShareButton';

interface ActualitePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Fonction pour récupérer une actualité par slug
async function getActualiteBySlug(slug: string): Promise<Actualite | null> {
    try {
        const actualite = await prisma.actualite.findUnique({
            where: { slug }
        });
        
        return actualite;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'actualité:', error);
        return null;
    }
}

export default async function ActualitePage({ params }: ActualitePageProps) {
    const { slug } = await params;
    const actualite = await getActualiteBySlug(slug);

    // Si l'actualité n'existe pas, afficher 404
    if (!actualite) {
        notFound();
    }

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                {/* Navigation de retour */}
                <div className="mb-8">
                    <Link 
                        href="/actu"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>
                </div>

                {/* Article */}
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Image de couverture */}
                    {actualite.image && (
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <Image
                                src={actualite.image}
                                alt={actualite.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    )}

                    {/* Contenu */}
                    <div className="p-8">

                        {/* Informations sur la publication */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                            <p>
                                <strong>Publié le :</strong> {formatDate(actualite.createdAt)}
                            </p>
                            {actualite.updatedAt && actualite.updatedAt.getTime() !== actualite.createdAt.getTime() && (
                                <p className="mt-1">
                                    <strong>Dernière mise à jour :</strong> {formatDate(actualite.updatedAt)}
                                </p>
                            )}
                        </div>

                        {/* Titre */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {actualite.title}
                        </h1>
                        
                        {/* Métadonnées */}
                        <div className="flex">
                            <div className="ml-auto mb-6 text-sm text-gray-500">
                                <ShareButton 
                                    title={actualite.title} 
                                    text={actualite.title}
                                />
                            </div>
                        </div>

                        {/* Contenu principal */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <div 
                                className="text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                    __html: actualite.content.replace(/\n/g, '<br/>') 
                                }}
                            />
                        </div>


                        {/* Call to action */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/actu"
                                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Voir d'autres d'articles
                                </Link>
                                <Link
                                    href="/"
                                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Retour à l'accueil
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}