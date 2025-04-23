'use client';

import PracticeContent from '@/components/practices/PracticeContent';

const recentSearchesFr = [
  "Direction générale - laboratoire pharmaceutique européen",
  "Direction commerciale monde - laboratoire de spécialités pharmaceutiques",
  "Direction affaires médicales - société spécialisée dans les dispositifs médicaux",
  "Direction des affaires pharmaceutiques - groupe pharmaceutique français",
  "Direction de l'accès au marché et des affaires publiques - laboratoire italien",
  "Direction financière - laboratoire danois",
  "Direction industrielle - groupe pharmaceutique familial",
  "Direction des ressources humaines - laboratoire pharmaceutique (RX & OTC)",
  "Direction générale - laboratoire spécialisé dans le domaine des maladies rares",
  "CEO - acteur pharmaceutique du \"consumer healthcare\""
];

const recentSearchesEn = [
  "General Manager – European pharmaceutical company",
  "Global Commercial Director – Specialty care",
  "Chief Medical Officer – Medical device company",
  "Chief Pharmaceutical Officer – French pharmaceutical group",
  "Market Access & Public Affairs Director – Italian laboratory",
  "Chief Financial Officer – Danish pharmaceutical company",
  "Chief Manufacturing & Supply Director – Family-owned pharmaceutical group",
  "Human Resources Director – Pharmaceutical laboratory (RX & OTC)",
  "General Manager – Rare diseases specialty laboratory",
  "CEO – Consumer healthcare company"
];

const LifeSciencesContent = () => {
  return (
    <PracticeContent 
      practiceKey="lifesciences"
      recentSearchesFr={recentSearchesFr}
      recentSearchesEn={recentSearchesEn}
    />
  );
};

export default LifeSciencesContent; 