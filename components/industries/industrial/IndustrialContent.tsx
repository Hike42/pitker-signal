'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearchesFr = [
  "Direction Générale - ETI familiale - Équipementier automobile",
  "Direction Générale - ETI familiale - Machines-outils",
  "Direction Générale - ETI sous fond - Énergies renouvelables",
  "Direction Industrielle - ETI sous fond - Ingénierie",
  "Direction Stratégique - ETI sous LBO - Agroalimentaire",
  "Direction des Opérations - ETI sous fond - Génie électrique",
  "Direction Financière - ETI sous fond - Ingénierie",
  "Direction des Ressources Humaines - ETI sous fond - Machines-outils",
  "Direction Commerciale - ETI sous fond - Génie électrique"
];

const recentSearchesEn = [
  "CEO - European industrial group",
  "Industrial Director - Manufacturing company",
  "Operations Director - Automotive supplier",
  "Supply Chain Director - Industrial equipment manufacturer",
  "R&D Director - Engineering company",
  "CFO - Industrial conglomerate",
  "Plant Manager - Chemical company",
  "HR Director - Industrial group",
  "CEO - Family-owned industrial company",
  "CEO - Industrial automation company"
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