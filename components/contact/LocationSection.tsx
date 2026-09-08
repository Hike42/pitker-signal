'use client';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

let mapsPromise: Promise<void> | undefined;
function loadGoogleMaps(key: string): Promise<void> {
  if (typeof google !== 'undefined' && google.maps?.Map) return Promise.resolve();
  if (mapsPromise) return mapsPromise;
  mapsPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    const timer = window.setTimeout(() => fail(), 15000);
    const cleanup = () => {
      window.clearTimeout(timer);
      delete (window as Window & { pitkerMapsReady?: () => void }).pitkerMapsReady;
    };
    const fail = () => {
      cleanup();
      script.remove();
      reject(new Error('Google Maps unavailable'));
    };
    (window as Window & { pitkerMapsReady?: () => void }).pitkerMapsReady = () => {
      cleanup();
      resolve();
    };
    script.src = `https://maps.googleapis.com/maps/api/js?${new URLSearchParams({ key, callback: 'pitkerMapsReady', loading: 'async', v: 'quarterly' })}`;
    script.async = true;
    script.onerror = fail;
    document.head.appendChild(script);
  }).catch(error => { mapsPromise = undefined; throw error; });
  return mapsPromise;
}

export default function LocationSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const [mapReady, setMapReady] = useState(false);
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key && (typeof google === 'undefined' || !google.maps?.Map)) return;
    let disposed = false;
    let map: google.maps.Map | undefined;
    const circles: google.maps.Circle[] = [];
    const frames: number[] = [];
    loadGoogleMaps(key ?? '').then(() => {
      if (disposed || !mapRef.current) return;
      const center = { lat: 48.875018, lng: 2.312111 };
      map = new google.maps.Map(mapRef.current, {
        center, zoom: 15, disableDefaultUI: true, zoomControl: true,
        gestureHandling: 'cooperative', clickableIcons: false,
        styles: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', stylers: [{ visibility: 'off' }] }],
      });
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      [150, 100, 50].forEach((radius, index) => {
        const circle = new google.maps.Circle({ center, radius, map, strokeColor: '#003769', strokeOpacity: 0.7, strokeWeight: 1, fillOpacity: 0 });
        circles.push(circle);
        if (reducedMotion) return;
        const animate = (time: number) => {
          if (disposed) return;
          circle.setRadius(radius + Math.sin(time / 1000) * 20);
          frames[index] = requestAnimationFrame(animate);
        };
        frames[index] = requestAnimationFrame(animate);
      });
      circles.push(new google.maps.Circle({ center, radius: 25, map, strokeWeight: 0, fillColor: '#E63237', fillOpacity: 1 }));
      setMapReady(true);
    }).catch(() => { /* The address and map link remain available. */ });
    return () => {
      disposed = true;
      frames.forEach(cancelAnimationFrame);
      circles.forEach(circle => { google.maps.event.clearInstanceListeners(circle); circle.setMap(null); });
      if (map) google.maps.event.clearInstanceListeners(map);
    };
  }, []);
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100" aria-label={t.contact.location.title}>
      <div ref={mapRef} className="absolute inset-0" />
      {!mapReady && <div className="absolute inset-0 flex items-center justify-center text-pitkerBlue p-8 pb-48" role="status">{language === 'fr' ? 'Retrouvez-nous au cœur de Paris' : 'Find us in the heart of Paris'}</div>}
      <div className="absolute inset-0 bg-gradient-to-r from-pitkerBlue/90 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-sm shadow-lg">
          <h3 className="text-lg md:text-xl font-light text-pitkerBlue mb-4">{t.contact.location.title}</h3>
          <address className="not-italic text-sm md:text-base text-gray-600 mb-4">143 Boulevard Haussmann<br />75008 Paris, France</address>
          <a className="text-pitkerBlue underline" href="https://www.google.com/maps/search/?api=1&query=143+Boulevard+Haussmann+75008+Paris" target="_blank" rel="noopener noreferrer">{language === 'fr' ? 'Ouvrir dans Google Maps' : 'Open in Google Maps'}</a>
        </div>
      </div>
    </section>
  );
}
