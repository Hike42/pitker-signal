'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearches = [
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
      recentSearches={recentSearches}
    />
  );
};

export default IndustrialContent; 