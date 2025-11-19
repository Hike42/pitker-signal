// Types de base
interface Translation {
  en: string;
  fr: string;
}

type ImagePosition = string;

export interface Partner {
  id: number;
  name: string;
  role: Translation;
  roleTranslations: {
    en: string;
    fr: string;
  };
  major: Translation;
  majorTranslations: {
    en: string;
    fr: string;
  };
  imageOff: string;
  imageSmall: string;
  imagePosition: ImagePosition;
  imageSmallPosition: ImagePosition;
  biography: Translation;
  email?: string;
  linkedin?: string;
}

export interface PartnerTranslations {
  name: string;
  role: string;
  major: string;
  biography: string;
}

export interface PartnersData {
  [key: string]: {
    [partnerId: number]: PartnerTranslations;
  };
}

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Jean-Marie Verdier",
    role: { en: "Partner", fr: "Associé" },
    roleTranslations: {
      en: "Partner",
      fr: "Associé"
    },
    imageOff: "/team/jeanmarieoff.jpg",
    imageSmall: "/team/jeanmariesmall.jpg",
    imagePosition: "15% 5%",
    imageSmallPosition: "center",
    major: { en: "Life Sciences", fr: "Industries de Santé" },
    majorTranslations: {
      en: "Life Sciences",
      fr: "Industries de Santé"
    },
    email: "jm.verdier@pitker.fr",
    linkedin: "https://fr.linkedin.com/in/jmverdier/",
    biography: {
      en: "For 27 years, Jean-Marie has been assisting pharma, biotech and medtech companies with their most strategic search assignments.\n\nPrior to co-founding PITKER in 2020, Jean-Marie spent sixteen years at Amrop, one of the world's leading executive search firms.\n\nFrom 2010 to 2020, he served as Managing Director of the Paris office of Amrop and co-leader for Europe of Amrop's Life Sciences practice.\n\nJean-Marie is a graduate of Institut d'Etudes Politique (Rennes) and holds a postgraduate diploma in international business.",
      fr: "Depuis 27 ans, Jean-Marie accompagne les entreprises pharmaceutiques, biotechnologiques et de dispositifs médicaux dans leurs missions de recherche les plus stratégiques.\n\nAvant de co-fonder PITKER en 2020, Jean-Marie a passé seize ans chez Amrop, l'une des plus grandes entreprises de recherche exécutive au monde.\n\nDe 2010 à 2020, il a été directeur général du bureau parisien d'Amrop et co-leader pour l'Europe de la pratique Life Sciences d'Amrop.\n\nJean-Marie est diplômé de l'Institut d'Etudes Politique (Rennes) et titulaire d'un diplôme post-universitaire en commerce international."
    }
  },
  {
    id: 2,
    name: "Maud Chabert",
    role: { en: "Partner", fr: "Associée" },
    roleTranslations: {
      en: "Partner",
      fr: "Associée"
    },
    imageOff: "/team/maudoff.jpg",
    imageSmall: "/team/maudsmall.jpg",
    imagePosition: "0% 25%",
    imageSmallPosition: "0% 25%",
    major: { en: "Industry", fr: "Industrie" },
    majorTranslations: {
      en: "Industry",
      fr: "Industrie"
    },
    email: "m.chabert@pitker.com",
    linkedin: "https://www.linkedin.com/in/maud-chabert-3676a38/",
    biography: {
      en: "Maud is an executive search professional who supports her industrial clients in C-level searches. In addition, Maud has a special expertiste in leadership assessment.\n\nBefore co-founding PITKER in 2020, Maud worked for fifteen years at Colgate-Palmolive where she held marketing management positions, both in France and abroad.\n\nMaud is a graduate of EDHEC Lille (Class of 2004) and is certified on the Wave-Saville assessment tool.",
      fr: "Maud est une professionnelle de l'executive search qui accompagne ses clients des secteurs de l'industrie dans le cadre de recherches C-level. Maud est par ailleurs responsable de la practice Assessment de PITKER.\n\nAvant de co-fonder PITKER en 2020, Maud a travaillé près de quinze ans chez Colgate-Palmolive où elle a occupé des fonctions de Direction Marketing, en France et à l'étranger.\n\nMaud est diplômée de l'EDHEC Lille (Promotion 2004), et certifiée sur l'outil d'assessment Wave-Saville."
    }
  },
  {
    id: 3,
    name: "Patrice de Fournas",
    role: { en: "Partner", fr: "Associé" },
    roleTranslations: {
      en: "Partner",
      fr: "Associé"
    },
    major: { en: "Private Equity", fr: "Private Equity" },
    majorTranslations: {
      en: "Private Equity",
      fr: "Private Equity"
    },
    imageOff: "/team/patriceoff.jpg",
    imageSmall: "/team/patricesmall.jpg",
    imagePosition: "0px 0px",
    imageSmallPosition: "10% 5%",
    biography: {
      en: "Patrice has eighteen years of experience in executive search. He works exclusively for midsize companies owned by investment funds, family offices, or entrepreneurs. He has also developed specific sector expertise in energy and infrastructure.\n\nBefore joining PITKER in 2024, Patrice was a partner at Russell Reynolds, then at Jouve & Associés.\n\nPatrice began his career as a consultant at Kearney in Europe and Asia.\n\nHe holds a degree from ESSEC, an MBA from INSEAD, and a PhD in Social Sciences from École Polytechnique.",
      fr: "Patrice dispose de dix-huit ans d'expérience dans la recherche de dirigeants. Il travaille exclusivement pour des entreprises de taille intermédiaire appartenant à des fonds d'investissement, des family offices ou des entrepreneurs. Il a par ailleurs développé une expertise sectorielle spécifique dans le domaine de l'énergie et des infrastructures.\n\nAvant de rejoindre PITKER en 2024, Patrice était associé chez Russell Reynolds, puis chez Jouve & Associés.\n\nPatrice a commencé sa carrière en tant que consultant chez Kearney en Europe et en Asie.\n\nIl est diplômé de l'ESSEC, du MBA de l'INSEAD et d'un doctorat en sciences sociales de l'École Polytechnique."
    },
    email: "p.defournas@pitker.fr",
    linkedin: "https://fr.linkedin.com/in/patrice-de-fournas-9698645"
  }
];

export const getPartnerByMajor = (major: string): Partner | undefined => {
  const normalizedMajor = major.toLowerCase();
  return PARTNERS.find(partner => 
    partner.majorTranslations.en.toLowerCase() === normalizedMajor || 
    partner.majorTranslations.fr.toLowerCase() === normalizedMajor
  );
};

// Index pour les recherches rapides
export const PARTNERS_BY_MAJOR = new Map<string, Partner>(
  PARTNERS.flatMap(partner => [
    [partner.majorTranslations.en.toLowerCase(), partner],
    [partner.majorTranslations.fr.toLowerCase(), partner]
  ])
); 