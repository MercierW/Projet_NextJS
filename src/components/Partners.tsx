'use client';

import { partners } from '@/lib/partners';

export default function PartnersCarousel() {

  return (
    <section className="py-26 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
          <p className="text-lg text-gray-600">Ils nous font confiance</p>
        </div>

        <div className="overflow-hidden relative group">
          <div className="carousel-track animate-scroll">
            {/* On duplique 2 fois le même set pour continuité */}
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="carousel-item h-30">
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md shadow-cyan-500/50 p-4 w-40 h-28">
                  <img src={partner.logo} alt={partner.name} className="max-h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                  <span className="text-xs font-medium text-gray-600 mt-2 text-center">{partner.name}</span>
                </a>
              </div>
            ))}
          </div>
          {/* Fades (left & right) */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}