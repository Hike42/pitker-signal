import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Private Equity | PITKER',
  description: 'Expert en recrutement de dirigeants pour le private equity. Nous accompagnons les fonds d\'investissement et leurs participations dans la construction de leurs équipes dirigeantes.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/practices/private-equity`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/practices/private-equity`,
      'en': `${siteMetadata.siteUrl}/en/practices/private-equity`
    }
  },
  openGraph: {
    title: 'Private Equity | PITKER',
    description: 'Expert en recrutement de dirigeants pour le private equity. Nous accompagnons les fonds d\'investissement et leurs participations dans la construction de leurs équipes dirigeantes.',
    url: `${siteMetadata.siteUrl}/practices/private-equity`,
  }
}; 