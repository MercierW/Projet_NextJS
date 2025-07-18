'use client';

export default function PartnersCarousel() {
  const partners = [
    { id: 1, 
      name: "Akto", 
      logo: "/AKTO-LOGO.png",
      website: "https://www.akto.fr/" 
    },
    { id: 2, 
      name: "Delf", 
      logo: "/delf.png", 
      website: "https://www.france-education-international.fr/diplome/delf-tout-public?langue=fr" 
    },
    { id: 3, 
      name: "Dilf", 
      logo: "/dilf.png", 
      website: "https://www.france-education-international.fr/diplome/dilf?langue=fr" 
    },
    { id: 4, 
      name: "France Travail", 
      logo: "/France_Travail_2024.png",
      website: "https://www.francetravail.fr/accueil/" 
    },
    { id: 5, 
      name: "Mon Compte Formation", 
      logo: "/logo_mcf.jpg", website: "https://www.moncompteformation.gouv.fr/" 
    },
    { id: 6, 
      name: "Région Île-de-France", 
      logo: "/logo-idf-2019.png", 
      website: "https://www.iledefrance.fr/" 
    },
  ];

  return (
    <section className="py-16 bg-white">
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

      <style jsx>{`
        .carousel-track {
        display: flex;
        width: max-content;
      }

      .carousel-item {
        flex-shrink: 0;
        margin: 0 1.5rem;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-scroll {
        animation: scroll 90s linear infinite;
      }

      .group:hover .animate-scroll {
        animation-play-state: paused;
    }
    `}</style>
    </section>
  );
}

