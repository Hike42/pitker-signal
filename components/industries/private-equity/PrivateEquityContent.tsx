'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearchesFr = [
  "Direction Générale - ETI sous LBO - Santé",
  "Direction Générale - ETI en forte croissance détenue par un fond de growth equity - Décarbonation",
  "Direction Générale - PME détenue par un family office - Fabrication et distrib. de produits de conso. premium",
  "Direction Financière - ETI sous LBO - Packaging",
  "Direction Financière - ETI en forte croissance détenue par un fonds d'infrastructure - Énergies renouvelables",
  "Direction Financière - Family office - Activités diversifiées",
  "Secrétariat Général - Family office - Activités diversifiées"
];

const recentSearchesEn = [
  "CEO - Mid-cap under LBO - Healthcare",
  "CEO - High-growth mid-cap backed by a growth equity fund - Decarbonization",
  "CEO - SME owned by a family office - Manufacturing and distribution of premium consumer products",
  "CFO - Mid-cap under LBO - Packaging",
  "CFO - High-growth mid-cap backed by an infrastructure fund - Renewable energy",
  "CFO - Family office - Diversified activities",
  "General counsel - Family office - Diversified activities"
];

const PrivateEquityContent = () => {
  return (
    <PracticeContent 
      practiceKey="privateEquity"
      recentSearchesFr={recentSearchesFr}
      recentSearchesEn={recentSearchesEn}
    />
  );
};

export default PrivateEquityContent; 