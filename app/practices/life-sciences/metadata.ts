import { Metadata } from 'next';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: 'Life Sciences | PITKER',
  description: 'Expert en recrutement de dirigeants dans le secteur des sciences de la vie. Nous accompagnons les laboratoires pharmaceutiques, biotechs et medtechs dans leurs enjeux de leadership.',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/practices/life-sciences`,
    languages: {
      'fr': `${siteMetadata.siteUrl}/practices/life-sciences`,
      'en': `${siteMetadata.siteUrl}/en/practices/life-sciences`
    }
  },
  openGraph: {
    title: 'Sciences de la Vie | PITKER',
    description: 'Expert en recrutement de dirigeants dans le secteur des sciences de la vie. Nous accompagnons les laboratoires pharmaceutiques, biotechs et medtechs dans leurs enjeux de leadership.',
    url: `${siteMetadata.siteUrl}/practices/life-sciences`,
  }
}; 