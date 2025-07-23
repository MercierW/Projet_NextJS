'use client';

import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Formation HCR",
      description: "Formez-vous aux métiers de l'Hôtellerie-Restauration : service, accueil, hygiène et savoir-être pour réussir dans un secteur dynamique et en recrutement.",
      image: "/img_01.png",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 2,
      title: "Formation AEPE",
      description: "Préparez votre avenir dans la petite enfance : développez les compétences clés pour accompagner, éveiller et sécuriser les tout-petits au quotidien.",
      image: "/img_08.png",
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50"
    },
    {
      id: 3,
      title: "Formation ESF",
      description: "Devenez un acteur du lien social : formez-vous pour accompagner les publics dans la gestion du quotidien, la prévention et l'insertion.",
      image: "/img_11.png",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      id: 4,
      title: "Formation CDUI",
      description: "Alliez créativité et technologie : maîtrisez le design d'interface et l'ergonomie web pour créer des expériences utilisateurs impactantes.",
      image: "/img_10.png",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    }
  ];

  // Auto-défilement avec pause au survol
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  interface Slide {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
    bgColor: string;
  }

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background avec dégradé animé */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} transition-all duration-1000 ease-in-out`} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header avec animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">NOUVEAUTÉS 2025</span>
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 animate-pulse">
              Découvrez
            </span>
            <br />
            <span className="text-gray-800">Nos Formations</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Avec <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">La Grande Classe</span>, 
            transformez votre passion en expertise professionnelle
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slides */}
            <div className="relative h-[600px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
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
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 z-10"></div>
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay décoratif */}
                      <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white text-sm font-semibold shadow-lg z-20`}>
                        Formation 2025
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className={`text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${slide.color} leading-tight`}>
                            {slide.title}
                          </h3>
                          <div className={`w-24 h-1 bg-gradient-to-r ${slide.color} rounded-full mb-6`}></div>
                        </div>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {slide.description}
                        </p>
                        
                        <div className="flex space-x-4 pt-4">
                          <button className={`px-8 py-3 bg-gradient-to-r ${slide.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                            En savoir plus
                          </button>
                          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
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
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-30 group"
            >
              <svg className="w-6 h-6 text-gray-700 mx-auto group-hover:text-gray-900 transform group-hover:-translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-30 group"
            >
              <svg className="w-6 h-6 text-gray-700 mx-auto group-hover:text-gray-900 transform group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${slide.color} shadow-lg scale-125` 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`} />
                {index === currentSlide && (
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${slide.color} animate-ping opacity-30`} />
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-white/30 rounded-full h-1 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${slides[currentSlide].color} transition-all duration-300 rounded-full`}
              style={{ 
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                animation: isHovered ? 'none' : 'pulse 2s infinite'
              }}
            />
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-12 space-x-8 opacity-60">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}