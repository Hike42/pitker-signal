import type { Metadata } from 'next';
import { defaultMetadata, siteMetadata } from '@/constants/metadata';
import { isLanguage, localizedPath } from './i18n';
const pages: Record<string, { fr: [string, string]; en: [string, string] }> = {
  '/': { fr: ['Recrutement de dirigeants & Leadership Advisory', 'PITKER accompagne les entreprises dans le recrutement de dirigeants et le leadership advisory, en France et à l’international.'], en: ['Executive Search & Leadership Advisory', 'PITKER delivers executive search and leadership advisory to organizations in France and internationally.'] },
  '/what-we-do': { fr: ['Notre expertise', 'Découvrez notre expertise en recrutement de dirigeants et en évaluation des talents.'], en: ['What we do', 'Discover our expertise in executive search, leadership advisory and talent assessment.'] },
  '/people': { fr: ['Notre équipe', 'Rencontrez les associés de PITKER, experts en recrutement de dirigeants dans la santé, l’industrie et le private equity.'], en: ['Our people', 'Meet the PITKER partners, executive search experts in life sciences, industry and private equity.'] },
  '/practices': { fr: ['Nos secteurs', 'Explorez nos expertises : santé, industrie, private equity et recrutement de directeurs généraux.'], en: ['Our practices', 'Explore our expertise in life sciences, industry, private equity and CEO search.'] },
  '/practices/ceo-search': { fr: ['Recrutement de dirigeants', 'Une approche sur mesure pour identifier et attirer les directeurs généraux et dirigeants.'], en: ['CEO search', 'A tailored approach to identifying and attracting chief executives and general managers.'] },
  '/practices/life-sciences': { fr: ['Sciences de la vie', 'PITKER accompagne les laboratoires pharmaceutiques, biotechs et medtechs dans le recrutement de leurs dirigeants.'], en: ['Life sciences', 'PITKER supports pharmaceutical, biotech and medtech companies in recruiting their leaders.'] },
  '/practices/industry': { fr: ['Industrie', 'Nous accompagnons les entreprises industrielles dans leurs enjeux de recrutement, de transformation et de leadership.'], en: ['Industry', 'We support industrial companies with executive recruitment, transformation and leadership.'] },
  '/practices/private-equity': { fr: ['Private equity', 'Nous accompagnons les fonds d’investissement et leurs participations dans la construction de leurs équipes dirigeantes.'], en: ['Private equity', 'We help investment funds and their portfolio companies build their leadership teams.'] },
  '/contact': { fr: ['Contact', 'Contactez l’équipe PITKER pour vos projets de recrutement de dirigeants et de leadership advisory.'], en: ['Contact', 'Contact the PITKER team for your executive search and leadership advisory projects.'] },
  '/mentions-legales': { fr: ['Mentions légales', 'Informations légales, conditions d’utilisation et protection des données personnelles du site PITKER.'], en: ['Legal notice', 'Legal information, terms of use and personal data protection for the PITKER website.'] },
};
export function pageMetadata(path: string, lang: string): Metadata {
  const language = isLanguage(lang) ? lang : 'fr';
  const [label, description] = pages[path][language];
  const title = `${label} | PITKER`;
  const url = `${siteMetadata.siteUrl}${localizedPath(path, language)}`;
  return {
    ...defaultMetadata, title, description,
    alternates: { canonical: url, languages: { fr: localizedPath(path, 'fr'), en: localizedPath(path, 'en'), 'x-default': localizedPath(path, 'fr') } },
    openGraph: { ...defaultMetadata.openGraph, title, description, url, locale: language === 'fr' ? 'fr_FR' : 'en_GB', alternateLocale: language === 'fr' ? 'en_GB' : 'fr_FR' },
    twitter: { ...defaultMetadata.twitter, title, description },
  };
}
