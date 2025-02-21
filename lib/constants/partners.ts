export interface Partner {
  id: number;
  name: string;
  role: string;
  major: string;
  image: string;
  imagePosition: string;
  biography: string;
  email: string;
  linkedin: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Jean-Marie Verdier",
    role: "Partner",
    major: "Life Sciences",
    image: "/team/jeanmarie.jpg",
    imagePosition: "15% 5%",
    biography: "Jean-Marie is an experienced executive search professional who, for over 25 years, has been supporting healthcare companies (pharmaceuticals, biotechnology, medical devices, diagnostics, etc.) in selecting their leaders, both in France and internationally.\n\nPrior to co-founding PITKER in 2020, Jean-Marie spent sixteen years at Amrop, one of the world's leading executive search firms. From 2010 to 2020, Jean-Marie served as Managing Director of Amrop's French office. During this same period, he was co-leader for Europe of Amrop's Life Sciences practice.\n\nA graduate of the Institute of Political Studies in Rennes and holding a Franco-American postgraduate degree in international business, Jean-Marie is experienced in the most demanding searches.",
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
    biography: "Maud is an executive search professional who supports her industrial sector clients in C-level searches. Maud is also responsible for PITKER's Assessment practice.\n\nBefore co-founding PITKER in 2020, Maud worked for nearly fifteen years at Colgate-Palmolive, where she held Marketing Management positions, both in France and abroad.\n\nMaud is a graduate of EDHEC Lille (Class of 2004) and is certified in the Wave-Saville assessment tool.",
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
    biography: "Patrice has built a seventeen-year track record in executive search. He works exclusively with mid-sized companies owned by private equity funds, family offices, and entrepreneurs.\n\nBefore joining PITKER in 2024, Patrice was a partner at Russell Reynolds and then at Ebbinge, a firm specializing in executive search for private equity portfolio companies.\n\nPatrice began his career at Kearney as a consultant in Europe and Asia.\n\nPatrice holds a degree from ESSEC, an MBA from INSEAD, and a PhD in Social Sciences from École Polytechnique.",
    email: "p.defournas@pitker.fr",
    linkedin: "https://fr.linkedin.com/in/patrice-de-fournas-9698645"
  }
];

export const getPartnerByMajor = (major: string): Partner | undefined => {
  return PARTNERS.find(partner => partner.major.toLowerCase() === major.toLowerCase());
}; 