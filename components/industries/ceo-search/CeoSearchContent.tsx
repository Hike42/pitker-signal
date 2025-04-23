'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

const recentSearchesFr = [
  "Direction générale - groupe familial - maison de champagne",
  "Direction générale - groupe familial - construction & promotion",
  "Président directeur général - groupe européen - laboratoire pharmaceutique",
  "Direction générale - groupe familial - logistique d'œuvres d'art",
  "Chief Executive Officer - groupe familial - santé grand public",
  "Direction générale - Fédération professionnelle",
  "Direction générale - start-up - logtech",
  "Direction générale - ETI familiale - Équipementier automobile",
  "Direction générale - ETI familiale - Machines-outils",
  "Direction générale - ETI sous fond - Énergies renouvelables",
  "Direction générale - ETI en forte croissance détenue par un fond de growth equity - Décarbonation",
  "Direction générale - PME détenue par un family office - Fabrication et distrib. de produits de consommation premium"
];

const recentSearchesEn = [
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
  const { language } = useLanguage();
  const t = translations[language].practices.ceoSearch;
  const recentSearches = language === 'fr' ? recentSearchesFr : recentSearchesEn;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1">
            {/* Title and Introduction */}
            <div>
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-pitkerRed flex items-center justify-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 bg-pitkerRed rounded-full"></div>
                </div>
                <div className="h-px w-12 md:w-16 bg-pitkerRed ml-3 md:ml-4"></div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-pitkerBlue mb-6 md:mb-8">
                {t.title}
              </h1>
              <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-600">
                {t.intro.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        {/* Our Strengths section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-pitkerBlue mb-8 md:mb-12 text-center">
            {t.strengths.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.strengths.points.map((point, index) => (
              <div 
                key={index} 
                className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <h3 className="text-xl md:text-2xl font-bold text-pitkerBlue mb-4 group-hover:text-pitkerRed transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Searches section */}
        <div className="mt-12 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-light text-pitkerBlue mb-8 md:mb-12 text-center">
            {t.recentSearches.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {recentSearches.map((search, index) => (
              <div 
                key={index} 
                className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-pitkerBlue group hover:border-pitkerRed"
              >
                <p className="text-sm md:text-base text-gray-700 group-hover:text-pitkerBlue transition-colors">
                  {search}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOSearchContent; 