import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface MapLocation {
  lat: number;
  lng: number;
}

interface MarkerOptions {
  position: MapLocation;
  title: string;
  iconUrl?: string;
  iconSize?: { width: number; height: number };
}

interface MapOptions {
  zoom?: number;
  center: MapLocation;
  mapTypeControl?: boolean;
  streetViewControl?: boolean;
  fullscreenControl?: boolean;
  zoomControl?: boolean;
  rotateControl?: boolean;
  scaleControl?: boolean;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClickZoom?: boolean;
  keyboardShortcuts?: boolean;
}

interface UseGoogleMapsProps {
  apiKey?: string;
  mapOptions: MapOptions;
  markers?: MarkerOptions[];
}

export function useGoogleMaps({ 
  apiKey, 
  mapOptions, 
  markers = [] 
}: UseGoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Créer la carte avec les options fournies
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        ...mapOptions,
      });

      // Ajouter les marqueurs
      markers.forEach((markerOptions) => {
        const markerConfig: any = {
          position: markerOptions.position,
          map: map,
          title: markerOptions.title,
        };

        // Ajouter l'icône personnalisée si fournie
        if (markerOptions.iconUrl) {
          markerConfig.icon = {
            url: markerOptions.iconUrl,
            scaledSize: new window.google.maps.Size(
              markerOptions.iconSize?.width || 32,
              markerOptions.iconSize?.height || 32
            ),
          };
        }

        new window.google.maps.Marker(markerConfig);
      });

      mapInstanceRef.current = map;
    };

    // Charger l'API Google Maps
    if (typeof window.google === 'undefined') {
      const script = document.createElement('script');
      const key = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Fonction callback globale
      window.initMap = initMap;
      
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [apiKey, mapOptions, markers]);

  return {
    mapRef,
    mapInstance: mapInstanceRef.current,
  };
}