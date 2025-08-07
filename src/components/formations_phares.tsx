'use client';

import React from "react";
import Link from "next/link";
import { formations } from "@/lib/formationsPhares";


export default function NosFormationsPhares() {
  return (
    <section className="relative py-26 px-4 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Formes décoratives de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cercles flottants */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-lime-100 to-lime-200 rounded-full opacity-40 animate-pulse"></div>

        {/* Formes géométriques */}
        <div className="absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-200 to-sky-200 transform rotate-45 opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-red-200 to-rose-200 transform rotate-12 opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            {/* Effet de backdrop pour le titre */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100 via-white to-lime-100 rounded-2xl opacity-50 blur-sm"></div>
            <h2 className="relative text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide px-2">
              <span className="text-gray-800">
                Nos{" "}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-black">
                  formations
                </span>
                {/* Effet de brillance subtil */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent opacity-0 animate-pulse"></div>
              </span>
              <span className="text-gray-800">
                {" "}phares
              </span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Découvrez nos formations populaires et donnez un nouvel élan à votre carrière.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {formations.map((formation, index) => (
            <Link href={formation.slug} key={index} className="group block">
              <div className="formation-card relative bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 h-full flex flex-col border border-gray-100 hover:border-teal-200">
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl pointer-events-none"></div>

                <h3 className="relative text-xl font-bold mb-3 text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                  {formation.title}
                </h3>
                <p className="relative text-gray-600 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                  {formation.description}
                </p>

                {/* Indicateur visuel */}
                <div className="mt-4 flex items-center text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Découvrir</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}