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
      en: "Jean-Marie is an experienced executive search professional who, for over 25 years, has been supporting healthcare companies (pharmaceuticals, biotechnology, medical devices, diagnostics, etc.) in selecting their leaders, both in France and internationally.\n\nPrior to co-founding PITKER in 2020, Jean-Marie spent sixteen years at Amrop, one of the world's leading executive search firms. From 2010 to 2020, Jean-Marie served as Managing Director of Amrop's French office. During this same period, he was co-leader for Europe of Amrop's Life Sciences practice.\n",
      fr: "Jean-Marie est un professionnel de la recherche exécutive expérimenté qui, depuis plus de 25 ans, a soutenu les entreprises de santé (pharmaceutiques, biotechnologiques, dispositifs médicaux, diagnostics, etc.) dans la sélection de leurs dirigeants, tant en France qu'à l'étranger.\n\nAvant de co-fonder PITKER en 2020, Jean-Marie a travaillé seize ans chez Amrop, l'une des plus grandes entreprises de recherche exécutive au monde. De 2010 à 2020, Jean-Marie a été dirigeant adjoint de l'office français d'Amrop. Pendant cette même période, il a été co-leader pour l'Europe de la pratique Life Sciences d'Amrop.\n\nJean-Marie est titulaire d'un diplôme de l'Institut des études politiques de Rennes et d'un diplôme post-universitaire américain en affaires internationales, Jean-Marie est expérimenté dans les recherches les plus exigeantes."
    },
    email: "jm.verdier@pitker.fr",
    linkedin: "https://www.linkedin.com/in/jmverdier/"
  },
  {
    id: 2,
    name: "Maud Chabert",
    role: "Partner",
    major: "Manufacturing Industries",
    image: "/team/maud.png",
    imagePosition: "55%",
    biography: {
      en: "Maud is an executive search professional who supports her industrial sector clients in C-level searches. Maud is also responsible for PITKER's Assessment practice.\n\nBefore co-founding PITKER in 2020, Maud worked for nearly fifteen years at Colgate-Palmolive, where she held Marketing Management positions, both in France and abroad.\n\nMaud is a graduate of EDHEC Lille (Class of 2004) and is certified in the Wave-Saville assessment tool.",
      fr: "Maud est un professionnel de la recherche exécutive qui soutient ses clients du secteur industriel dans les recherches de niveau C. Maud est également responsable de la pratique d'évaluation de PITKER.\n\nAvant de co-fonder PITKER en 2020, Maud a travaillé pendant presque quinze ans chez Colgate-Palmolive, où elle a occupé des postes de gestion du marketing, tant en France qu'à l'étranger.\n\nMaud est titulaire d'un diplôme de l'EDHEC Lille (Promotion de 2004) et est certifiée dans l'outil d'évaluation Wave-Saville."
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
      en: "Patrice has built a seventeen-year track record in executive search. He works exclusively with mid-sized companies owned by private equity funds, family offices, and entrepreneurs.\n\nBefore joining PITKER in 2024, Patrice was a partner at Russell Reynolds and then at Ebbinge, a firm specializing in executive search for private equity portfolio companies.\n\nPatrice began his career at Kearney as a consultant in Europe and Asia.\n\nPatrice holds a degree from ESSEC, an MBA from INSEAD, and a PhD in Social Sciences from École Polytechnique.",
      fr: "Patrice a construit une carrière de dix-sept ans dans la recherche exécutive. Il travaille exclusivement avec des entreprises de taille moyenne appartenant à des fonds d'investissement privé, à des bureaux de famille et à des entrepreneurs.\n\nAvant de rejoindre PITKER en 2024, Patrice était un partenaire à Russell Reynolds et ensuite à Ebbinge, une firme spécialisée dans la recherche exécutive pour les entreprises en portefeuille d'investissement privé.\n\nPatrice a commencé sa carrière en tant que consultant à Kearney en Europe et en Asie.\n\nPatrice possède un diplôme de l'ESSEC, un MBA de l'INSEAD et un doctorat en sciences sociales de l'École Polytechnique."
    },
    email: "p.defournas@pitker.fr",
    linkedin: "https://fr.linkedin.com/in/patrice-de-fournas-9698645"
  }
];

export const PARTNERS_TRANSLATIONS: PartnersData = {
  en: {
    1: {
      name: "John Smith",
      role: "Managing Partner",
      major: "Healthcare",
      biography: "John brings over 20 years of experience in executive search, with a particular focus on the healthcare sector.\n\nPrior to founding Pitker, he held senior positions at leading international executive search firms where he successfully led numerous high-profile searches for C-level positions.\n\nHe has developed an extensive network in the healthcare industry and has deep expertise in recruiting for pharmaceutical, biotech, and medical device companies."
    },
    2: {
      name: "Sarah Johnson",
      role: "Partner",
      major: "Private Equity",
      biography: "Sarah specializes in private equity and venture capital recruitment, with over 15 years of experience in the field.\n\nShe has successfully completed numerous searches for investment professionals, operating partners, and portfolio company executives.\n\nBefore joining Pitker, Sarah worked at a boutique executive search firm focused on the financial services sector."
    },
    3: {
      name: "Michael Brown",
      role: "Partner",
      major: "Industry",
      biography: "Michael has extensive experience in industrial sector recruitment, particularly in manufacturing and engineering.\n\nHe has helped numerous companies build their leadership teams and has a deep understanding of the challenges facing industrial companies today.\n\nPrior to his career in executive search, Michael held senior operational roles in major industrial companies."
    }
  },
  fr: {
    1: {
      name: "John Smith",
      role: "Associé Gérant",
      major: "Santé",
      biography: "John apporte plus de 20 ans d'expérience dans le recrutement de dirigeants, avec une expertise particulière dans le secteur de la santé.\n\nAvant de fonder Pitker, il a occupé des postes de direction dans des cabinets de recrutement internationaux de premier plan où il a mené avec succès de nombreuses missions de recrutement pour des postes de direction.\n\nIl a développé un réseau étendu dans l'industrie de la santé et possède une expertise approfondie dans le recrutement pour les entreprises pharmaceutiques, biotechnologiques et de dispositifs médicaux."
    },
    2: {
      name: "Sarah Johnson",
      role: "Associée",
      major: "Private Equity",
      biography: "Sarah est spécialisée dans le recrutement pour le private equity et le capital-risque, avec plus de 15 ans d'expérience dans ce domaine.\n\nElle a mené à bien de nombreuses missions de recrutement pour des professionnels de l'investissement, des operating partners et des dirigeants d'entreprises en portefeuille.\n\nAvant de rejoindre Pitker, Sarah travaillait dans un cabinet de recrutement spécialisé dans le secteur des services financiers."
    },
    3: {
      name: "Michael Brown",
      role: "Associé",
      major: "Industrie",
      biography: "Michael possède une vaste expérience dans le recrutement pour le secteur industriel, particulièrement dans la manufacture et l'ingénierie.\n\nIl a aidé de nombreuses entreprises à constituer leurs équipes de direction et possède une compréhension approfondie des défis auxquels sont confrontées les entreprises industrielles aujourd'hui.\n\nAvant sa carrière dans le recrutement de dirigeants, Michael a occupé des postes de direction opérationnelle dans de grandes entreprises industrielles."
    }
  }
};

export const getPartnerByMajor = (major: string): Partner | undefined => {
  return PARTNERS.find(partner => partner.major.toLowerCase() === major.toLowerCase());
}; 