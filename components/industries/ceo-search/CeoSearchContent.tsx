'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearches = [
  "CEO - European pharmaceutical group",
  "CEO - Industrial automation company",
  "CEO - Private Equity portfolio company",
  "CEO - Family-owned industrial group",
  "CEO - Technology startup",
  "CEO - Consumer goods company",
  "CEO - Healthcare services company",
  "CEO - Renewable energy company",
  "CEO - Professional services firm",
  "CEO - Manufacturing company"
];

const CEOSearchContent = () => {
  return (
    <PracticeContent 
      practiceKey="ceoSearch"
      recentSearches={recentSearches}
    />
  );
};

export default CEOSearchContent; 