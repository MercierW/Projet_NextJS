'use client';

import { useGoogleMaps } from '@/lib/hooks/useGoogleMaps';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
            Nous serons ravis de vous accueillir dans nos locaux.
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
                <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Adresse</p>
                  <p className="text-gray-600">51 Rue Gaston Lauriau<br />93100 Montreuil</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Téléphone</p>
                  <p className="text-gray-600">01 40 10 27 22</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">contact@lagrandeclasse.fr</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Horaires</p>
                  <p className="text-gray-600">
                    Lun - Ven: 9h00 - 17h00
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