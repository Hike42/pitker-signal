'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearchesFr = [
  "Direction Générale – ETI familiale - Equipementier automobile",
  "Direction Générale – ETI familiale – Machines-outils",
  "Direction Générale – ETI sous LBO – Energies renouvelables",
  "Direction Industrielle – ETI sous LBO – Ingénierie",
  "Direction Stratégique – ETI sous LBO – Agroalimentaire",
  "Direction des Operations – ETI sous LBO – Génie électrique",
  "Direction Financière – ETI sous LBO – Ingénierie",
  "Direction des Ressources Humaines – ETI sous LBO - Machines-outils",
  "Direction Commerciale - ETI sous LBO – Génie électrique"
];

const recentSearchesEn = [
  "General Manager– Small size company family owned - Automotive supplier",
  "General Manager– Midsize company family owned – Machines and tools manufacturing",
  "General Manager– Small size company private equity owned – Renewables energy",
  "Industrial Director – Midsize company private equity owned – Engineering",
  "Chief Strategy Officer– Midsize company under LBO – food industry",
  "Chief Operation Officer – Midsize company private equity owned – Electrical engineering",
  "Chief Financial Officer – Midsize company under LBO – Food Industry",
  "Human Resources Director – Midsize company private equity owned - Machines and tools manufacturing",
  "Commercial Director- Midsize company private equity owned – Electrical engineering"
];

const IndustrialContent = () => {
  return (
    <PracticeContent 
      practiceKey="manufacturing"
      recentSearchesFr={recentSearchesFr}
      recentSearchesEn={recentSearchesEn}
    />
  );
};

export default IndustrialContent; 