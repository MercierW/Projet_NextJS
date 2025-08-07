'use client';

import { useGoogleMaps } from '@/lib/hooks/useGoogleMaps';

const Contact = () => {
  // Configuration de la carte
  const mapOptions = {
    zoom: 15,
    center: { lat: 48.8589, lng: 2.4472 }, // 51 Rue Gaston Lauriau, 93100 Montreuil
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
    rotateControl: true,
    scaleControl: true,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    keyboardShortcuts: true,
  };

  // Configuration des marqueurs
  const markers = [
    {
      position: { lat: 48.8589, lng: 2.4472 },
      title: '51 Rue Gaston Lauriau, 93100 Montreuil',
      iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      iconSize: { width: 32, height: 32 },
    },
  ];

  const { mapRef } = useGoogleMaps({
    mapOptions,
    markers,
  });

  return (
    <section className="py-16 bg-gray-50 rounded-xl mt-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-violet-800 mb-4">
            Ou bien venez nous rencontrer sur place
          </h2>
          <p className="text-lg text-gray-600">
            Nous serons ravis de vous accueillir dans nos locaux
          </p>
        </div>

        {/* Container pour la carte et les informations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-violet-800 mb-6">
              Nos coordonnées
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Adresse</p>
                  <p className="text-gray-600">51 Rue Gaston Lauriau<br />93100 Montreuil</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Téléphone</p>
                  <p className="text-gray-600">01 40 10 27 22</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">contact@lagrandeclasse.fr</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Horaires</p>
                  <p className="text-gray-600">
                    Lun - Ven: 9h00 - 18h00<br />
                    Sam: 9h00 - 12h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              ref={mapRef}
              className="w-full h-96 lg:h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;