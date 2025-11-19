"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import Image from 'next/image';

declare global {
  interface Window {
    initMap: () => void;
    google: {
      maps: {
        Map: typeof google.maps.Map;
        Circle: typeof google.maps.Circle;
        MapOptions: google.maps.MapOptions;
        LatLngLiteral: google.maps.LatLngLiteral;
        MapTypeStyle: google.maps.MapTypeStyle;
      };
    };
  }
}

const LocationSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const { t } = useLanguage();
  const [mapError, setMapError] = useState(false);

  const loadMap = useCallback(() => {
    if (!mapRef.current || mapInstance.current) return;

    const location = { lat: 48.875018, lng: 2.312111 };

    const mapStyles = [
      {
        "elementType": "geometry",
        "stylers": [{ "color": "#f8f9fa" }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{ "color": "#e0e0e0" }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{ "color": "#c8e6ff" }]
      },
      {
        "featureType": "poi",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "featureType": "transit",
        "stylers": [{ "visibility": "off" }]
      }
    ];

    const mapOptions: google.maps.MapOptions = {
      center: location,
      zoom: 15,
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: true,
      gestureHandling: 'greedy',
      draggable: true,
      clickableIcons: false
    };

    const map = new google.maps.Map(mapRef.current, mapOptions);
    mapInstance.current = map;

    // Cercles concentriques avec animation
    [150, 100, 50].forEach((radius) => {
      const circle = new google.maps.Circle({
        center: location,
        radius: radius,
        map: map,
        strokeColor: '#003769',
        strokeOpacity: 0.7,
        strokeWeight: 1,
        fillColor: '#003769',
        fillOpacity: 0
      });

      let growing = true;
      const animate = () => {
        const currentRadius = circle.getRadius();
        if (growing && currentRadius >= radius + 20) growing = false;
        if (!growing && currentRadius <= radius - 20) growing = true;
        circle.setRadius(currentRadius + (growing ? 0.5 : -0.5));
        requestAnimationFrame(animate);
      };
      animate();
    });

    // Point central plus grand
    new google.maps.Circle({
      center: location,
      radius: 25,
      map: map,
      strokeWeight: 0,
      fillColor: '#E63237',
      fillOpacity: 1
    });

    // Halo lumineux plus grand
    new google.maps.Circle({
      center: location,
      radius: 30,
      map: map,
      strokeWeight: 0,
      fillColor: '#E63237',
      fillOpacity: 0.15
    });
  }, []);

  useEffect(() => {
    if (window.google) {
      loadMap();
      return;
    }

    window.initMap = () => {
      try {
        loadMap();
      } catch {
        // Erreur silencieuse - l'état mapError gère l'affichage du fallback
        setMapError(true);
      }
    };

    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => setMapError(true);
      scriptRef.current = script;
      document.head.appendChild(script);
    }

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [loadMap]);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Carte en premier plan */}
      <div className="absolute inset-0">
        {mapError ? (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Image
              src="/map-fallback.jpg"
              alt="Carte de localisation"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div ref={mapRef} className="w-full h-full" />
        )}
      </div>
      
      {/* Gradient sur toute la carte */}
      <div className="absolute inset-0 bg-gradient-to-r from-pitkerBlue/90 to-transparent" />
      
      {/* Info box */}
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 lg:w-1/3">
        <div className="container mx-auto h-full flex items-end justify-start px-4 md:px-8 lg:px-12 pb-4 md:pb-6 lg:pb-8">
          <div className="w-full max-w-md bg-white p-4 md:p-6 lg:p-8 rounded-sm shadow-lg">
            <h3 className="text-lg md:text-xl font-light text-pitkerBlue mb-2 md:mb-4">{t.contact.location.title}</h3>
            <address className="not-italic text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              143 Boulevard Haussmann<br />
              75008 Paris, France
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 