import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Legal Mentions | PITKER',
  description: 'Mentions légales et conditions d\'utilisation du site PITKER. Informations sur la protection des données personnelles et l\'utilisation des cookies.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/mentions-legales`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/mentions-legales`,
      'en': `${siteMetadata.siteUrl}/en/legal-notice`
    }
  },
  openGraph: {
    title: 'Mentions Légales | PITKER',
    description: 'Mentions légales et conditions d\'utilisation du site PITKER. Informations sur la protection des données personnelles et l\'utilisation des cookies.',
    url: `${siteMetadata.siteUrl}/mentions-legales`,
  }
}; 