'use client';
import { useEffect, useRef, useState } from 'react';
import type { Language } from '@/lib/i18n';
import { translations } from '@/lib/translations';

declare global { interface Window { pitkerMapsReady?: () => void; gm_authFailure?: () => void; } }
let loading: Promise<void> | undefined;
let authenticationFailed = false;
const failures = new Set<() => void>();

function loadMaps(key: string) {
  if (authenticationFailed) return Promise.reject(new Error('Maps authentication unavailable'));
  if (typeof google !== 'undefined' && google.maps?.Map) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    const timeout = window.setTimeout(fail, 15000);
    function fail() { window.clearTimeout(timeout); script.remove(); delete window.pitkerMapsReady; reject(new Error('Maps unavailable')); }
    window.gm_authFailure = () => { authenticationFailed = true; fail(); failures.forEach(listener => listener()); };
    window.pitkerMapsReady = () => { window.clearTimeout(timeout); delete window.pitkerMapsReady; resolve(); };
    script.src = `https://maps.googleapis.com/maps/api/js?${new URLSearchParams({ key, callback: 'pitkerMapsReady', loading: 'async', v: 'quarterly' })}`;
    script.async = true;
    script.onerror = fail;
    document.head.appendChild(script);
  }).catch(error => { loading = undefined; throw error; });
  return loading;
}

export default function ContactMap({ lang }: { lang: Language }) {
  const container = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'loading' | 'google' | 'fallback'>('loading');
  useEffect(() => {
    let disposed = false;
    let map: google.maps.Map | undefined;
    const circles: google.maps.Circle[] = [];
    const frames: number[] = [];
    let listener: google.maps.MapsEventListener | undefined;
    const fallback = () => { if (!disposed) setState('fallback'); };
    failures.add(fallback);
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key) { queueMicrotask(fallback); return () => { disposed = true; failures.delete(fallback); }; }
    loadMaps(key).then(() => {
      if (disposed || !container.current || authenticationFailed) { fallback(); return; }
      const center = { lat: 48.875018, lng: 2.312111 };
      map = new google.maps.Map(container.current, {
        center, zoom: 15, disableDefaultUI: true, zoomControl: true,
        gestureHandling: 'cooperative', clickableIcons: false,
        styles: [
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        ],
      });
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      [150, 100, 50].forEach((radius, index) => {
        const circle = new google.maps.Circle({ center, radius, map, strokeColor: '#003769', strokeOpacity: 0.7, strokeWeight: 1, fillOpacity: 0, clickable: false });
        circles.push(circle);
        if (reducedMotion) return;
        const animate = (time: number) => {
          if (disposed) return;
          circle.setRadius(radius + Math.sin(time / 1000) * 20);
          frames[index] = requestAnimationFrame(animate);
        };
        frames[index] = requestAnimationFrame(animate);
      });
      circles.push(new google.maps.Circle({ center, radius: 25, map, strokeWeight: 0, fillColor: '#E63237', fillOpacity: 1, clickable: false }));
      listener = google.maps.event.addListenerOnce(map, 'idle', () => { if (!disposed && !authenticationFailed) setState('google'); });
    }).catch(fallback);
    const timer = window.setTimeout(() => { if (!disposed) setState(current => current === 'loading' ? 'fallback' : current); }, 20000);
    return () => { disposed = true; failures.delete(fallback); window.clearTimeout(timer); listener?.remove(); frames.forEach(cancelAnimationFrame); circles.forEach(circle => { google.maps.event.clearInstanceListeners(circle); circle.setMap(null); }); if (map) google.maps.event.clearInstanceListeners(map); };
  }, []);
  return <div className="contact-map" data-map-state={state} aria-label={translations[lang].contact.location.title}>
    <div className="google-map-canvas" ref={container} hidden={state === 'fallback'} />
    <div className="map-brand-shade" aria-hidden="true" />
    {state === 'loading' && <p className="map-loading" role="status">{lang === 'fr' ? 'Retrouvez-nous au cœur de Paris' : 'Find us in the heart of Paris'}</p>}
    {state === 'fallback' && <iframe title={translations[lang].contact.location.title} src="https://www.openstreetmap.org/export/embed.html?bbox=2.303111%2C48.870518%2C2.321111%2C48.879518&layer=mapnik&marker=48.875018%2C2.312111" loading="eager" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}
  </div>;
}
