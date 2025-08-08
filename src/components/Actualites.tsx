'use client';

import React from "react";
import { actualites } from "@/lib/actualites";
import { Calendar, ArrowRight } from "lucide-react";


export default function Actualites() {
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
          {actualites.map((actu, index) => {
            const IconComponent = actu.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 relative flex flex-col"
              >
                {/* Image avec overlay gradient */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={actu.image}
                    alt={actu.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t white opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${actu.color} shadow-lg`}>
                      <IconComponent className="w-4 h-4 mr-1" />
                      {actu.category}
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {actu.date}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {actu.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {actu.summary}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={actu.link}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group/btn mt-auto"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </div>

                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none overflow-hidden"></div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <a
            href="/actualites"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-200 group"
          >
            Voir toutes les actualités
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}