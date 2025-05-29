import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'What We Do | PITKER',
  description: 'Découvrez notre expertise en executive search et leadership advisory. PITKER accompagne les entreprises dans le recrutement de leurs dirigeants et l\'évaluation de leurs talents.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/what-we-do`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/what-we-do`,
      'en': `${siteMetadata.siteUrl}/en/what-we-do`
    }
  },
  openGraph: {
    title: 'Notre Expertise | PITKER',
    description: 'Découvrez notre expertise en executive search et leadership advisory. PITKER accompagne les entreprises dans le recrutement de leurs dirigeants et l\'évaluation de leurs talents.',
    url: `${siteMetadata.siteUrl}/what-we-do`,
  }
}; 