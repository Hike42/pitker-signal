import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'People | PITKER',
  description: 'Rencontrez notre équipe de direction chez PITKER. Des experts en executive search et leadership advisory avec une expérience approfondie dans les secteurs de la santé, du private equity et de l\'industrie.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/people`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/people`,
      'en': `${siteMetadata.siteUrl}/en/people`
    }
  },
  openGraph: {
    title: 'Notre Équipe | PITKER',
    description: 'Rencontrez notre équipe de direction chez PITKER. Des experts en executive search et leadership advisory avec une expérience approfondie dans les secteurs de la santé, du private equity et de l\'industrie.',
    url: `${siteMetadata.siteUrl}/people`,
  }
}; 