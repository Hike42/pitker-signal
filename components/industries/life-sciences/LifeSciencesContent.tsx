'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearches = [
  "CEO - European pharmaceutical laboratory",
  "Global Commercial Director - Specialty pharmaceutical company",
  "Medical Affairs Director - Medical devices company",
  "Pharmaceutical Affairs Director - French pharmaceutical group",
  "Market Access & Public Affairs Director - Italian laboratory",
  "CFO - Danish laboratory",
  "Industrial Director - Family-owned pharmaceutical group",
  "HR Director - Pharmaceutical laboratory (RX & OTC)",
  "CEO - Rare diseases specialized laboratory",
  "CEO - Consumer healthcare pharmaceutical company"
];

const LifeSciencesContent = () => {
  return (
    <PracticeContent 
      practiceKey="lifesciences"
      recentSearches={recentSearches}
    />
  );
};

export default LifeSciencesContent; 