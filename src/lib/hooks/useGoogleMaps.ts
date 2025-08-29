import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google: any;
    initGoogleMapsCallback: () => void;
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

// Variables globales pour gérer l'état du chargement
let isGoogleMapsLoading = false;
let isGoogleMapsLoaded = false;
let loadingPromise: Promise<void> | null = null;

export function useGoogleMaps({ 
  apiKey, 
  mapOptions, 
  markers = [] 
}: UseGoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
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
        setIsMapReady(true);
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte:', error);
      }
    };

    const loadGoogleMapsAPI = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Vérifier si Google Maps est déjà chargé
        if (window.google && window.google.maps) {
          isGoogleMapsLoaded = true;
          resolve();
          return;
        }

        // Si déjà en cours de chargement, retourner la promesse existante
        if (loadingPromise) {
          loadingPromise.then(resolve).catch(reject);
          return;
        }

        // Vérifier si un script Google Maps existe déjà
        const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
        if (existingScript) {
          if (isGoogleMapsLoaded) {
            resolve();
            return;
          }
          
          // Attendre que le script existant se charge
          const checkLoaded = () => {
            if (window.google && window.google.maps) {
              isGoogleMapsLoaded = true;
              resolve();
            } else {
              setTimeout(checkLoaded, 100);
            }
          };
          checkLoaded();
          return;
        }

        // Marquer comme en cours de chargement
        isGoogleMapsLoading = true;

        // Créer une promesse pour ce chargement
        loadingPromise = new Promise((resolveLoading, rejectLoading) => {
          const script = document.createElement('script');
          const key = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
          
          // Utiliser un nom de callback unique
          const callbackName = `initGoogleMapsCallback_${Date.now()}`;
          script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callbackName}`;
          script.async = true;
          script.defer = true;

          // Fonction callback globale unique
          (window as any)[callbackName] = () => {
            isGoogleMapsLoaded = true;
            isGoogleMapsLoading = false;
            delete (window as any)[callbackName]; // Nettoyer la callback
            resolveLoading();
          };

          script.onerror = () => {
            isGoogleMapsLoading = false;
            loadingPromise = null;
            delete (window as any)[callbackName];
            rejectLoading(new Error('Erreur lors du chargement de l\'API Google Maps'));
          };

          document.head.appendChild(script);
        });

        loadingPromise.then(resolve).catch(reject);
      });
    };

    // Charger l'API et initialiser la carte
    loadGoogleMapsAPI()
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error('Erreur lors du chargement de Google Maps:', error);
      });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
        setIsMapReady(false);
      }
    };
  }, [apiKey, mapOptions, markers]);

  return {
    mapRef,
    mapInstance: mapInstanceRef.current,
    isMapReady,
  };
}