'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, ExternalLink, Share2 } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Article {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
    link: string;
    slug: string;
}

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
    // Unwrap params avec React.use()
    const { slug } = React.use(params);
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const supabase = createClientComponentClient();

    // Fonction pour générer un slug (identique à celle du composant liste)
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const shareArticle = async () => {
        if (!article) return;

        // Vérifier si l'API Web Share est disponible
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.summary,
                    url: window.location.href,
                });
                return;
            } catch (err) {
                console.log('Erreur Web Share API:', err);
                // Continue vers le fallback clipboard
            }
        }

        // Fallback : copier l'URL dans le presse-papier
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Lien copié dans le presse-papier !');
            } catch (err) {
                console.log('Erreur Clipboard API:', err);
                // Dernier fallback : selection manuelle
                fallbackCopyToClipboard(window.location.href);
            }
        } else {
            // Fallback pour les navigateurs plus anciens ou HTTP
            fallbackCopyToClipboard(window.location.href);
        }
    };

    // Fonction de fallback pour copier le texte
    const fallbackCopyToClipboard = (text: string) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            alert('Lien copié dans le presse-papier !');
        } catch (err) {
            console.error('Impossible de copier le lien:', err);
            alert('Impossible de copier automatiquement. URL: ' + text);
        }
        
        document.body.removeChild(textArea);
    };

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                
                // Récupérer tous les articles et trouver celui avec le bon slug
                const { data, error } = await supabase
                    .from('articles')
                    .select('*');

                if (error) {
                    console.error('❌ Erreur Supabase:', error);
                    throw error;
                }

                // Trouver l'article correspondant au slug
                const foundArticle = data?.find(item => 
                    generateSlug(item.title) === slug
                );

                if (!foundArticle) {
                    notFound();
                    return;
                }

                // Ajouter le slug généré
                setArticle({
                    ...foundArticle,
                    slug: generateSlug(foundArticle.title)
                });

            } catch (err) {
                console.error('💥 Erreur lors du chargement de l\'article:', err);
                setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug, supabase]);

    if (loading) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Chargement de l'article...</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Article introuvable
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Désolé, nous n'avons pas pu trouver cet article.
                        </p>
                        <Link 
                            href="/actu"
                            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour aux articles
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
                    <div className="relative h-64 md:h-80 overflow-hidden">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Contenu */}
                    <div className="p-8">
                        {/* Métadonnées */}
                        <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
                                <span>{formatDate(article.date)}</span>
                            </div>
                            <button
                                onClick={shareArticle}
                                className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
                                title="Partager l'article"
                            >
                                <Share2 className="w-4 h-4 mr-1" />
                                Partager
                            </button>
                        </div>

                        {/* Titre */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>


                        {/* Contenu principal - ici vous pouvez ajouter plus de contenu */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                {article.summary}
                            </p>
                        </div>

                        {/* Call to action vers la source */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/actu"
                                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Voir plus d'articles
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