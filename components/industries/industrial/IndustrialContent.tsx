'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearchesFr = [
  "Direction Générale – ETI familiale - Equipementier automobile",
  "Direction Générale – ETI familiale – Machines-outils",
  "Direction Générale – ETI sous fond – Energies renouvelables",
  "Direction Industrielle – ETI sous fond – Ingénierie",
  "Direction Stratégique – ETI sous LBO – Agroalimentaire",
  "Direction des Operations – ETI sous fond – Génie électrique",
  "Direction Financière – ETI sous fond – Ingénierie",
  "Direction des Ressources Humaines – ETI sous fond - Machines-outils",
  "Direction Commerciale - ETI sous fond – Génie électrique"
];

const recentSearchesEn = [
  "General Manager– Small size company family owned - Automotive supplier",
  "General Manager– Mid size company family owned – Machines and tools manufacturing",
  "General Manager– Small size company private equity owned – Renewables energy",
  "Industrial Director – Mid size company private equity owned – Engineering",
  "Chief Strategy Officer– Mid size company under LBO – food industry",
  "Chief Operation Officer – Mid size company private equity owned – Electrical engineering",
  "Chief Financial Officer – Mid size company under LBO – Food Industry",
  "Human Resources Director – Mid size company private equity owned - Machines and tools manufacturing",
  "Commercial Director- Mid size company private equity owned – Electrical engineering"
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