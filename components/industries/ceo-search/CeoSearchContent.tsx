'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

const recentSearchesFr = [
  "Direction générale - Groupe familial - Maison de champagne",
  "Direction générale - Groupe familial - Construction & promotion",
  "Président directeur général - Groupe européen - Laboratoire pharmaceutique",
  "Direction générale - Groupe familial - Logistique d'œuvres d'art",
  "Chief Executive Officer - Groupe familial - Santé grand public",
  "Direction générale - Fédération professionnelle",
  "Direction générale - Start-up - Logtech",
  "Direction générale - ETI familiale - Équipementier automobile",
  "Direction générale - ETI familiale - Machines-outils",
  "Direction générale - ETI sous fond - Énergies renouvelables",
  "Direction générale - ETI en forte croissance détenue par un fond de growth equity - Décarbonation",
  "Direction générale - PME détenue par un family office - Fabrication et distrib. de produits de conso. premium"
];

const recentSearchesEn = [
  "General Manager - Family owned company – House of champagne",
  "General Manager - Family owned group - Construction & real estate development",
  "Chief Executive Officer – European group - Pharmaceutical company",
  "General Manager - Family owned group - Fine art logistics",
  "Chief Executive Officer - Family owned group – Life science",
  "General Manager - Professional federation",
  "General Manager - Start-up - Logtech",
  "General Manager - Midsize company family owned - Automotive supplier",
  "General Manager - Midsize company family owned - Machines and tools manufacturing",
  "General Manager - Midsize company private equity owned - Renewables energy",
  "General Management - Midsize highly growing company under LBO – Decarbonization",
  "General Management - Small size company family office owned - Premium consumer goods manufacturing and distribution"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 container mx-auto px-4">
            {recentSearches.map((search, index) => (
              <div 
                key={index} 
                className="group h-[90px]"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 hover:from-pitkerBlue/[0.02] hover:to-pitkerRed/[0.02] border-l-[3px] border-pitkerBlue transition-all duration-300">
                  {/* Contenu principal avec dégradé subtil */}
                  <div className="h-full py-4 px-6 md:py-5 md:px-8 relative overflow-hidden flex items-center">
                    {/* Texte */}
                    <p className="text-sm md:text-base text-gray-600 group-hover:text-pitkerBlue transition-colors duration-300 font-light leading-snug pr-16 line-clamp-2">
                      {search}
                    </p>

                    {/* Cercles décoratifs simples et grands */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-pitkerRed/20 group-hover:bg-pitkerRed/30 transition-colors duration-300"></div>
                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-pitkerRed/25 group-hover:bg-pitkerRed/35 transition-colors duration-300"></div>
                    
                    {/* Barre rouge animée au hover */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-pitkerRed transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOSearchContent; 