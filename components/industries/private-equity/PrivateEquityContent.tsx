'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearches = [
  "CEO - Private Equity portfolio company",
  "CFO - Mid-market investment fund",
  "Investment Director - Growth capital fund",
  "Portfolio Director - Buyout fund",
  "Operating Partner - Industrial sector",
  "HR Director - Private Equity firm",
  "CEO - Healthcare portfolio company",
  "CFO - Consumer goods portfolio company",
  "CEO - Industrial portfolio company",
  "CEO - Technology portfolio company"
];

const PrivateEquityContent = () => {
  return (
    <PracticeContent 
      practiceKey="privateEquity"
      recentSearches={recentSearches}
    />
  );
};

export default PrivateEquityContent; 