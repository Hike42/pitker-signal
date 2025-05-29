import type { Metadata } from "next";

export const siteMetadata = {
  title: "PITKER | Executive Search & Leadership Advisory",
  titleTemplate: "%s",
  description: "PITKER est un cabinet de conseil en recrutement de dirigeants de premier plan, spécialisé dans l'executive search et le leadership advisory. Experts en recrutement dans les secteurs de la santé, du private equity et de l'industrie à Paris et à l'international.",
  siteUrl: "https://pitker.fr",
  keywords: [
    "executive search",
    "recrutement dirigeants",
    "chasseur de têtes",
    "leadership advisory",
    "conseil en recrutement",
    "recrutement santé",
    "recrutement private equity",
    "recrutement industrie",
    "recrutement paris",
    "cabinet de recrutement",
    "executive search france",
    "recrutement cadres dirigeants"
  ],
  organization: {
    name: "PITKER",
    url: "https://pitker.fr",
    logo: "https://pitker.fr/logo.svg",
    description: "PITKER est un cabinet de conseil en recrutement de dirigeants de premier plan, spécialisé dans l'executive search et le leadership advisory.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 rue de Messine",
      addressLocality: "Paris",
      postalCode: "75008",
      addressCountry: "FR"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-XX-XX-XX-XX", // À mettre à jour
      contactType: "customer service"
    },
    sameAs: [
      "https://www.linkedin.com/company/pitker"
    ]
  }
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: siteMetadata.titleTemplate
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.organization.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PITKER | Cabinet de Conseil en Recrutement de Dirigeants",
    description: siteMetadata.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PITKER - Cabinet de Conseil en Recrutement de Dirigeants",
      },
    ],
    type: "website",
    locale: "fr_FR",
    siteName: siteMetadata.organization.name,
    url: siteMetadata.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: "Cabinet de conseil en recrutement de dirigeants spécialisé dans la santé, le private equity et l'industrie. Expert en executive search et leadership advisory.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
    languages: {
      'fr': siteMetadata.siteUrl,
      'en': `${siteMetadata.siteUrl}/en`
    }
  },
  verification: {
    google: "à_demander_au_client", // À mettre à jour
  }
}; 