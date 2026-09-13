import type { Language } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export default function ContactMap({ lang }: { lang: Language }) {
  return <figure className="contact-map static-map" aria-label={translations[lang].contact.location.title}>
    <img className="street-plan" src="/design/pitker-street-plan.svg" alt="PITKER — 143 Boulevard Haussmann, 75008 Paris, France" width="900" height="660" loading="lazy" />
    <figcaption className="map-credit"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap</a></figcaption>
  </figure>;
}
