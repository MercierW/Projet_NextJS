'use client';

import { useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Formation HCR",
      description: "Formez-vous aux métiers de l’Hôtellerie-Restauration : service, accueil, hygiène et savoir-être pour réussir dans un secteur dynamique et en recrutement.",
      image: "/img_01.png"
    },
    {
      id: 2,
      title: "Formation AEPE",
      description: "Préparez votre avenir dans la petite enfance : développez les compétences clés pour accompagner, éveiller et sécuriser les tout-petits au quotidien.",
      image: "/img_08.png"
    },
    {
      id: 3,
      title: "Formation ESF",
      description: "Devenez un acteur du lien social : formez-vous pour accompagner les publics dans la gestion du quotidien, la prévention et l’insertion.",
      image: "/img_11.png"
    },
    {
      id: 4,
      title: "Formation CDUI",
      description: "Alliez créativité et technologie : maîtrisez le design d’interface et l’ergonomie web pour créer des expériences utilisateurs impactantes.",
      image: "/img_10.png"
    }
  ];

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
  }

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nouveautés</h2>
      
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-200">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-100 object-cover object-[50%_35%]"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{slide.title}</h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all cursor-pointer"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all cursor-pointer"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide 
                  ? 'bg-orange-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}