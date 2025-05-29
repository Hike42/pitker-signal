import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Practices | PITKER',
  description: 'Explorez nos secteurs d\'expertise : santé, private equity, industrie et recrutement de dirigeants. Une approche sur-mesure pour chaque secteur, basée sur une connaissance approfondie des enjeux.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/practices`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/practices`,
      'en': `${siteMetadata.siteUrl}/en/practices`
    }
  },
  openGraph: {
    title: 'Nos Secteurs | PITKER',
    description: 'Explorez nos secteurs d\'expertise : santé, private equity, industrie et recrutement de dirigeants. Une approche sur-mesure pour chaque secteur, basée sur une connaissance approfondie des enjeux.',
    url: `${siteMetadata.siteUrl}/practices`,
  }
}; 