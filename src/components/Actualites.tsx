'use client';

import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, Newspaper, Users, Lightbulb } from "lucide-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

interface ActualiteData {
  id: number;
  date: string;
  title: string;
  summary: string;
  link: string;
  image: string;
  slug: string; // Ajout du slug dans l'interface
}

export default function Actualites() {
  const [actualites, setActualites] = useState<ActualiteData[]>([]);
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

  // Fonction pour formatter la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Récupération des données depuis Supabase
  useEffect(() => {
    const fetchActualites = async () => {
      try {
        setLoading(true);
        console.log('🔍 Tentative de récupération des actualités...');
        
        const { data, error, count } = await supabase
          .from('articles') // Remplacez par le nom exact de votre table
          .select('*', { count: 'exact' })
          .order('date', { ascending: false });

        console.log('📊 Résultat de la requête:', { data, error, count });

        if (error) {
          console.error('❌ Erreur Supabase:', error);
          throw error;
        }

        console.log('✅ Données récupérées:', data);
        console.log('📈 Nombre d\'articles:', data?.length);
        
        // Ajouter le slug généré à chaque actualité
        const actualitesWithSlug = data?.map(actu => ({
          ...actu,
          slug: generateSlug(actu.title)
        })) || [];
        
        setActualites(actualitesWithSlug);
      } catch (err) {
        console.error('💥 Erreur lors du chargement des actualités:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchActualites();
  }, [supabase]);

  if (loading) {
    return (
      <section className="py-26 px-4 bg-gradient-to-b from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-26 px-4 bg-gradient-to-b from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg inline-block">
              Erreur lors du chargement : {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (actualites.length === 0) {
    return (
      <section className="py-26 px-4 bg-gradient-to-b from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Aucune actualité disponible pour le moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-26 px-4 bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quoi de neuf chez{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              La Grande Classe{' '}
            </span>
            ?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos dernières actualités, nouveautés et partenariats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((actu) => {
            return (
              <div
                key={actu.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 relative flex flex-col"
              >
                {/* Image avec overlay gradient */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={actu.image}
                    alt={actu.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Image de fallback en cas d'erreur
                      e.currentTarget.src = '/images/default-news.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(actu.date)}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {actu.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {actu.summary}
                  </p>

                  {/* CTA Button - Vous pouvez maintenant utiliser soit actu.link soit /actu/${actu.slug} */}
                  <Link
                    href={`/actu/${actu.slug}`} // Ou href={`/actu/${actu.slug}`} si vous voulez utiliser des liens internes
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group/btn mt-auto"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none overflow-hidden"></div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Link
            href="/actu"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-200 group"
          >
            Voir toutes les actualités
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}