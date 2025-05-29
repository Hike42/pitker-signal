import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Industry | PITKER',
  description: 'Expertise en recrutement de dirigeants pour le secteur industriel. Nous accompagnons les entreprises industrielles dans leurs enjeux de transformation et de leadership.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/practices/industry`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/practices/industry`,
      'en': `${siteMetadata.siteUrl}/en/practices/industry`
    }
  },
  openGraph: {
    title: 'Industrie | PITKER',
    description: 'Expertise en recrutement de dirigeants pour le secteur industriel. Nous accompagnons les entreprises industrielles dans leurs enjeux de transformation et de leadership.',
    url: `${siteMetadata.siteUrl}/practices/industry`,
  }
}; 