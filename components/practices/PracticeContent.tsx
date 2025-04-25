'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { PARTNERS, Partner } from '@/lib/constants/partners';
import Image from 'next/image';

interface PracticeContentProps {
  practiceKey: 'lifesciences' | 'manufacturing' | 'privateEquity' | 'ceoSearch';
  recentSearchesFr: string[];
  recentSearchesEn: string[];
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

const PracticeContent = ({ practiceKey, recentSearchesFr, recentSearchesEn }: PracticeContentProps) => {
  const { t, language } = useLanguage();
  const recentSearches = language === 'fr' ? recentSearchesFr : recentSearchesEn;
  const practicePartner = PARTNERS.find((p: Partner) => {
    switch (practiceKey) {
      case 'lifesciences':
        return p.majorTranslations.en === 'Life Sciences';
      case 'manufacturing':
        return p.majorTranslations.en === 'Industry';
      case 'privateEquity':
        return p.majorTranslations.en === 'Private Equity';
      case 'ceoSearch':
        return false; // Pas de partenaire spécifique pour CEO Search
      default:
        return false;
    }
  });

  const getPracticeContent = () => {
    if (practiceKey === 'ceoSearch') {
      return {
        title: t.practices.grid.ceoSearch.title,
        intro: [
          "Notre practice CEO Search se distingue par une approche rigoureuse et personnalisée, garantissant l'identification et le recrutement des meilleurs talents pour les postes de direction. Nous combinons une rencontre approfondie avec tous les interlocuteurs concernés par la recherche, un recueil exhaustif d'informations sur le secteur, l'entreprise, ses concurrents, ainsi que l'environnement technologique et réglementaire.",
          "Pour chaque mission, nous constituons une équipe ad hoc, composée d'un(e) ou plusieurs associés et d'un(e) consultant(e) recherche, afin de mobiliser les compétences nécessaires pour répondre aux exigences spécifiques de chaque projet. Nos associés s'impliquent sur l'ensemble des maillons de la chaîne de valeur, là où d'autres acteurs du recrutement ont parfois une approche plus cloisonnée.",
          "Nous définissons une stratégie de recherche qui allie une approche systématique, tirant parti de toutes les sources d'information disponibles, et des conversations ciblées de haut niveau avec des personnes de confiance dans le marché.",
          "Nous portons une attention particulière à toutes les interactions pour garantir à la fois l'efficacité et la fluidité du processus de recherche. La confidentialité et le soin apporté au rédactionnel dans les correspondances avec nos clients et les candidats considérés participent, entre autres éléments, de notre démarche. Nos bureaux, offrant un cadre premium, sont à la disposition de nos clients, français et étrangers, pour organiser des rencontres discrètes."
        ],
        strengths: {
          title: "Nos Forces",
          points: [
            {
              title: "Séniorité",
              description: "La séniorité et l'engagement de notre équipe d'associés."
            },
            {
              title: "Approche Personnalisée",
              description: "La taille de notre cabinet qui permet une approche de haut niveau, totalement personnalisée."
            },
            {
              title: "Expertise ETI",
              description: "L'expérience de nombreuses recherches de ce niveau, avec une prédilection pour les environnements de type ETI (actionnariat familial ou fonds d'investissement)."
            }
          ]
        },
        recentSearches: {
          title: "Exemples de Recherches Récentes"
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
          {practicePartner ? (
            <>
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                <Image
                  src={practicePartner.imageSmall}
                  alt={practicePartner.name}
                  fill
                  className="object-cover rounded-full ring-4 ring-white/20"
                  style={{ objectPosition: practicePartner.imagePosition }}
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {practicePartner.name}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-4">{practicePartner.roleTranslations[language]}</p>
                <div className="flex justify-center space-x-4">
                  {practicePartner.linkedin && (
                    <a
                      href={practicePartner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Linkedln
                    </a>
                  )}
                  {practicePartner.email && (
                    <a
                      href={`mailto:${practicePartner.email}`}
                      className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Email
                    </a>
                  )}
                </div>
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
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-pitkerBlue">
              {practiceContent.recentSearches.title}
            </h2>
            <div className="h-px w-12 md:w-16 bg-pitkerRed mx-3 md:mx-4"></div>
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-pitkerRed flex items-center justify-center">
              <div className="w-5 h-5 md:w-8 md:h-8 bg-pitkerRed rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {recentSearches.map((search, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pitkerBlue/5 to-pitkerRed/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-4 md:p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-pitkerBlue group-hover:border-pitkerRed overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pitkerRed/50 to-pitkerRed/30 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="text-sm md:text-base text-gray-700 group-hover:text-pitkerBlue transition-colors relative z-10">
                    {search}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pitkerBlue via-pitkerRed to-pitkerBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeContent; 