import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'CEO Search | PITKER',
  description: 'Experts en recrutement de dirigeants et directeurs généraux. Une approche sur-mesure pour identifier et attirer les meilleurs talents pour les postes de direction.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/practices/ceo-search`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/practices/ceo-search`,
      'en': `${siteMetadata.siteUrl}/en/practices/ceo-search`
    }
  },
  openGraph: {
    title: 'Recrutement de Dirigeants | PITKER',
    description: 'Experts en recrutement de dirigeants et directeurs généraux. Une approche sur-mesure pour identifier et attirer les meilleurs talents pour les postes de direction.',
    url: `${siteMetadata.siteUrl}/practices/ceo-search`,
  }
}; 