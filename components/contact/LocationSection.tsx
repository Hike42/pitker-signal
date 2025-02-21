"use client";
import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    if (window.google) {
      loadMap();
      return;
    }

    window.initMap = loadMap;

    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      scriptRef.current = script;
      document.head.appendChild(script);
    }

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  const loadMap = () => {
    if (!mapRef.current || mapInstance.current) return;

    const location = { lat: 48.87494, lng: 2.31365 };

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
      radius: 50,
      map: map,
      strokeWeight: 0,
      fillColor: '#E63237',
      fillOpacity: 1
    });

    // Halo lumineux plus grand
    new google.maps.Circle({
      center: location,
      radius: 55,
      map: map,
      strokeWeight: 0,
      fillColor: '#E63237',
      fillOpacity: 0.2
    });
  };

  return (
    <section className="relative w-screen h-[600px]">
      {/* Carte en premier plan */}
      <div className="absolute inset-0">
        <div ref={mapRef} className="w-full h-full" />
      </div>
      
      {/* Gradient et info box avec meilleur responsive */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-1/3 bg-gradient-to-r from-pitkerBlue/90 to-transparent">
        <div className="container mx-auto h-full flex items-center justify-start px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-sm shadow-lg">
            <h2 className="text-2xl font-bold text-pitkerBlue mb-4">Our Paris Office</h2>
            <address className="not-italic text-gray-600 mb-6">
              143 Boulevard Haussmann<br />
              75009 Paris, France
            </address>
            <a
              href="https://g.co/kgs/4axXzRF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pitkerBlue hover:text-pitkerRed transition-colors"
            >
              <span>View on Maps</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 