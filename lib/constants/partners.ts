export interface Partner {
  id: number;
  name: string;
  role: string;
  major: string;
  image: string;
  imagePosition: string;
  biography: {
    en: string;
    fr: string;
  };
  email: string;
  linkedin: string;
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
    role: "Partner",
    major: "Life Sciences",
    image: "/team/jeanmarie.jpg",
    imagePosition: "15% 5%",
    biography: {
      en: "For 27 years, Jean-Marie has been assisting pharma, biotech and medtech companies with their most strategic search assignments.\n\nPrior to co-founding PITKER in 2020, Jean-Marie spent sixteen years at Amrop, one of the world's leading executive search firms.\n\nFrom 2010 to 2020, he served as Managing Director of the Paris office of Amrop and co-leader for Europe of Amrop's Life Sciences practice.\n\nJean-Marie is a graduate of Institut d'Etudes Politique (Rennes) and holds a postgraduate diploma in international business.",
      fr: "Depuis 27 ans, Jean-Marie accompagne les entreprises pharmaceutiques, biotechnologiques et de dispositifs médicaux dans leurs missions de recherche les plus stratégiques.\n\nAvant de co-fonder PITKER en 2020, Jean-Marie a passé seize ans chez Amrop, l'une des plus grandes entreprises de recherche exécutive au monde.\n\nDe 2010 à 2020, il a été directeur général du bureau parisien d'Amrop et co-leader pour l'Europe de la pratique Life Sciences d'Amrop.\n\nJean-Marie est diplômé de l'Institut d'Etudes Politique (Rennes) et titulaire d'un diplôme post-universitaire en commerce international."
    },
    email: "jm.verdier@pitker.fr",
    linkedin: "https://www.linkedin.com/in/jmverdier/"
  },
  {
    id: 2,
    name: "Maud Chabert",
    role: "Partner",
    major: "Industrial",
    image: "/team/maud.png",
    imagePosition: "55%",
    biography: {
      en: "Maud is an executive search professional who supports her industrial clients in C-level searches. In addition, Maud has a special expertise in leadership assessment.\n\nBefore co-founding PITKER in 2020, Maud worked for fifteen years at Colgate-Palmolive where she held marketing management positions, both in France and abroad.\n\nMaud is a graduate of EDHEC Lille (Class of 2004) and is certified on the Wave-Saville assessment tool.",
      fr: "Maud est un professionnel de la recherche exécutive qui accompagne ses clients industriels dans les recherches de niveau C. En outre, Maud possède une expertise particulière en évaluation du leadership.\n\nAvant de co-fonder PITKER en 2020, Maud a travaillé pendant quinze ans chez Colgate-Palmolive où elle a occupé des postes de direction marketing, tant en France qu'à l'étranger.\n\nMaud est diplômée de l'EDHEC Lille (Promotion 2004) et est certifiée sur l'outil d'évaluation Wave-Saville."
    },
    email: "m.chabert@pitker.fr",
    linkedin: "https://fr.linkedin.com/in/maud-chabert-3676a38"
  },
  {
    id: 3,
    name: "Patrice de Fournas",
    role: "Partner",
    major: "Private Equity",
    image: "/team/patrice.jpg",
    imagePosition: "0% 1%",
    biography: {
      en: "Patrice has built a seventeen-year track record in executive search. He works exclusively with midsized companies owned by private equity funds, family offices, and entrepreneurs.\n\nBefore joining PITKER in 2024, Patrice was a partner at Russell Reynolds and then at Ebbinge, a firm specializing in executive search for private equity portfolio companies.\n\nPatrice began his career at Kearney as a consultant in Europe and Asia.\n\nPatrice holds a degree from ESSEC, an MBA from INSEAD, and a PhD in Social Sciences from École Polytechnique.",
      fr: "Patrice a construit une carrière de dix-sept ans dans la recherche exécutive. Il travaille exclusivement avec des entreprises de taille moyenne appartenant à des fonds d'investissement privé, à des bureaux de famille et à des entrepreneurs.\n\nAvant de rejoindre PITKER en 2024, Patrice était un partenaire à Russell Reynolds et ensuite à Ebbinge, une firme spécialisée dans la recherche exécutive pour les entreprises en portefeuille d'investissement privé.\n\nPatrice a commencé sa carrière en tant que consultant à Kearney en Europe et en Asie.\n\nPatrice possède un diplôme de l'ESSEC, un MBA de l'INSEAD et un doctorat en sciences sociales de l'École Polytechnique."
    },
    email: "p.defournas@pitker.fr",
    linkedin: "https://fr.linkedin.com/in/patrice-de-fournas-9698645"
  }
];

export const getPartnerByMajor = (major: string): Partner | undefined => {
  return PARTNERS.find(partner => partner.major.toLowerCase() === major.toLowerCase());
}; 