'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { PARTNERS, Partner } from '@/lib/constants/partners';
import Image from 'next/image';

interface PracticeContentProps {
  practiceKey: 'lifesciences' | 'manufacturing' | 'privateEquity' | 'ceoSearch';
  recentSearches: string[];
}

interface PracticeContent {
  title: string;
  intro: string[];
  strengths: {
    title: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  recentSearches: {
    title: string;
  };
}

const PracticeContent = ({ practiceKey, recentSearches }: PracticeContentProps) => {
  const { t } = useLanguage();
  const practicePartner = PARTNERS.find((p: Partner) => {
    switch (practiceKey) {
      case 'lifesciences':
        return p.major === 'Life Sciences';
      case 'manufacturing':
        return p.major === 'Industrial';
      case 'privateEquity':
        return p.major === 'Private Equity';
      case 'ceoSearch':
        return false; // Pas de partenaire spécifique pour CEO Search
      default:
        return false;
    }
  });

  // Exception pour l'image de Maud
  const partnerWithCorrectImage = practicePartner && practicePartner.major === 'Industrial' ? {
    ...practicePartner,
    image: "/team/maud.jpg"
  } : practicePartner;

  const getPracticeContent = () => {
    if (practiceKey === 'ceoSearch') {
      return {
        title: t.practices.grid.ceoSearch.title,
        intro: [
          "Our CEO Search practice stands out for its rigorous, personalised approach to identifying and recruiting the best talent for executive positions. We combine in-depth meetings with all the people involved in the search, with exhaustive information gathering on the sector, the company, its competitors, and the technological and regulatory environment.",
          "For each assignment, we put together an ad hoc team, comprising one or more partners and a research consultant, to mobilise the skills needed to meet the specific requirements of each project. Our partners are involved in all links of the value chain, where other recruitment players sometimes have a more compartmentalised approach.",
          "We define a research strategy that combines a systematic approach, drawing on all available sources of information, with targeted, high-level conversations with trusted people in the market.",
          "We pay particular attention to all interactions to ensure both efficiency and fluidity in the research process. Confidentiality and the care taken in writing correspondence with our clients and the candidates under consideration are just some of the elements of our approach. Our offices, offering a premium setting, are available to our clients, both French and foreign, to organise discreet meetings."
        ],
        strengths: {
          title: "Our Strengths",
          points: [
            {
              title: "Rigorous Approach",
              description: "In-depth analysis and comprehensive information gathering for each search."
            },
            {
              title: "Personalized Service",
              description: "Tailored approach with dedicated teams for each assignment."
            },
            {
              title: "Confidentiality",
              description: "High level of discretion and professional handling of sensitive information."
            }
          ]
        },
        recentSearches: {
          title: "Examples of Recent Searches"
        }
      };
    }
    return {
      title: t.practices[practiceKey].title,
      intro: t.practices[practiceKey].intro,
      strengths: t.practices[practiceKey].strengths,
      recentSearches: t.practices[practiceKey].recentSearches
    };
  };

  const practiceContent = getPracticeContent();

  const renderIntroParagraph = (content: string | readonly string[], index: number) => {
    if (Array.isArray(content)) {
      return (
        <ul key={index} className="list-disc pl-6 space-y-2">
          {content.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="leading-relaxed">
        {content}
      </p>
    );
  };

  const renderContactCard = () => {
    return (
      <div className="bg-pitkerBlue shadow-2xl p-4 md:p-6 lg:p-8 transform translate-y-8 md:translate-y-12 lg:translate-y-16">
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          {partnerWithCorrectImage ? (
            <>
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                <Image
                  src={partnerWithCorrectImage.image}
                  alt={partnerWithCorrectImage.name}
                  fill
                  className="object-cover rounded-full ring-4 ring-white/20"
                  style={{ objectPosition: partnerWithCorrectImage.imagePosition }}
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {partnerWithCorrectImage.name}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-1">{partnerWithCorrectImage.role}</p>
                <p className="text-xs md:text-sm text-white/70 mb-4">{partnerWithCorrectImage.major}</p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] bg-gradient-to-b from-white to-pitkerBlue/5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
          <div className={`grid ${practiceKey === 'ceoSearch' ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start'}`}>
            {/* Title and Introduction */}
            <div className={practiceKey === 'ceoSearch' ? '' : 'lg:col-span-2'}>
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-pitkerRed flex items-center justify-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 bg-pitkerRed rounded-full"></div>
                </div>
                <div className="h-px w-12 md:w-16 bg-pitkerRed ml-3 md:ml-4"></div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-pitkerBlue mb-6 md:mb-8">
                {practiceContent.title}
              </h1>
              <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-600">
                {practiceContent.intro.map(renderIntroParagraph)}
              </div>
            </div>

            {/* Contact Card - Only show for non-CEO Search practices */}
            {practiceKey !== 'ceoSearch' && (
              <div className="lg:col-span-1">
                {renderContactCard()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        {/* Our Strengths section */}
        {practiceContent.strengths.points.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-pitkerBlue mb-8 md:mb-12 text-center">
              {practiceContent.strengths.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {practiceContent.strengths.points.map((point: { title: string; description: string }, index: number) => (
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
        )}

        {/* Recent Searches section */}
        <div className="mt-12 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-light text-pitkerBlue mb-8 md:mb-12 text-center">
            {practiceContent.recentSearches.title}
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

export default PracticeContent; 