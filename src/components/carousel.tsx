'use client';

import { motion } from 'framer-motion';
import { formationThemes } from '@/lib/formations';
import { useCarousel } from "@/lib/hooks/useCarousel";
import Link from 'next/link';

export default function Carousel() {
  // Créer un tableau aplati des formations "nouvelles" uniquement avec les informations du thème
  const allFormations = Object.values(formationThemes).flatMap(theme => 
    theme.formations
      .filter(formation => formation.new === true) // Filtrer seulement les nouvelles formations
      .map(formation => ({
        ...formation,
        themeColors: theme.colors,
        themeTitle: theme.title
      }))
  );

  const {
    currentSlide,
    isHovered,
    setIsHovered,
    nextSlide,
    prevSlide,
    goToSlide
  } = useCarousel({ 
    slidesLength: allFormations.length,
    autoPlayInterval: 5000
  });

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-sky-50" />
      
      {/* Ronds animés autour du carousel */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-10 left-4 w-40 h-40 bg-blue-100 rounded-full opacity-70"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-16 left-10 w-32 h-32 bg-green-100 rounded-full opacity-70"
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-28 right-20 w-28 h-28 bg-red-100 rounded-full opacity-70"
          animate={{ x: [0, 15, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 right-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-70"
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-green-100 rounded-full opacity-70"
          animate={{ x: [0, 18, 0], y: [0, -28, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-2/3 left-5 w-24 h-24 bg-red-100 rounded-full opacity-70"
          animate={{ x: [0, -12, 0], y: [0, 22, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 right-2 w-36 h-36 bg-blue-100 rounded-full opacity-70"
          animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 left-1/3 w-20 h-20 bg-green-100 rounded-full opacity-70"
          animate={{ x: [0, -10, 0], y: [0, 26, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header avec animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">NOUVEAUTÉS 2025</span>
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
              Découvrez
            </span>
            <br />
            <span className="text-gray-800 text-4xl">Nos Nouvelles Formations</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Avec <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">La Grande Classe</span>,
            transformez votre passion en expertise professionnelle
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slides */}
            <div className="relative h-[600px]">
              {allFormations.map((formation, index) => (
                <div
                  key={formation.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentSlide
                        ? 'opacity-0 -translate-x-full scale-95'
                        : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900 opacity-30 z-10"></div>
                      <img
                        src={formation.image}
                        alt={formation.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay décoratif avec badge de statut */}
                      <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${formation.themeColors.primary} text-white text-sm font-semibold shadow-lg z-20`}>
                        {formation.themeTitle}
                      </div>
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20 ${
                        formation.open === "Session Ouverte" 
                          ? "bg-green-500 text-white" 
                          : "bg-red-500 text-white"
                      }`}>
                        {formation.open}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 lg:pl-12 lg:pr-20 flex flex-col justify-center relative">
                      {/* Badge NOUVEAU */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold shadow-lg z-20 animate-pulse">
                        NOUVEAU
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className={`text-3xl lg:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${formation.themeColors.primary} leading-tight`}>
                            {formation.title}
                          </h3>
                          <div className={`w-24 h-1 bg-gradient-to-r ${formation.themeColors.primary} rounded-full mb-6`}></div>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed">
                          {formation.description}
                        </p>

                        {/* Informations de la formation */}
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${formation.themeColors.primary}`}></div>
                            <span className="text-sm text-gray-600">Durée: <strong>{formation.duration}</strong></span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${formation.themeColors.primary}`}></div>
                            <span className="text-sm text-gray-600">Places: <strong>{formation.participants}</strong></span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                          <Link
                            href={`/formations/${formation.slug}`}
                            className={`px-8 py-3 bg-gradient-to-r ${formation.themeColors.primary} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center`}
                          >
                            En savoir plus
                          </Link>
                          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
                            Télécharger la brochure
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white bg-opacity-90 backdrop-blur-sm hover:bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-30 group cursor-pointer"
            >
              <svg className="w-6 h-6 text-gray-700 mx-auto group-hover:text-gray-900 transform group-hover:-translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white bg-opacity-90 backdrop-blur-sm hover:bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-30 group cursor-pointer"
            >
              <svg className="w-6 h-6 text-gray-700 mx-auto group-hover:text-gray-900 transform group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {allFormations.map((formation, index) => (
              <button
                key={formation.id}
                onClick={() => goToSlide(index)}
                className="group relative"
                title={formation.title}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${formation.themeColors.primary} shadow-lg scale-125`
                    : 'bg-white bg-opacity-60 hover:bg-white hover:bg-opacity-80 hover:scale-110'
                }`} />
                {index === currentSlide && (
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${formation.themeColors.primary} animate-ping opacity-30`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}