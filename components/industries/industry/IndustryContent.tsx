'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

const recentSearches = [
  "CEO - Family-owned mid-cap - Automotive Equipment",
  "CEO - Family-owned mid-cap - Machine Tools",
  "CEO - PE-backed mid-cap - Renewable Energy",
  "Industrial Director - PE-backed mid-cap - Engineering",
  "Strategic Director - LBO mid-cap - Food Industry",
  "Operations Director - PE-backed mid-cap - Electrical Engineering",
  "CFO - PE-backed mid-cap - Engineering",
  "HR Director - PE-backed mid-cap - Machine Tools",
  "Commercial Director - PE-backed mid-cap - Electrical Engineering"
];

const IndustryContent = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/industry.jpg"
          alt={t.practices.manufacturing.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-8">
          <div className="container mx-auto">
            <h1 className="text-pitkerRed uppercase text-5xl font-light mb-4">{t.practices.manufacturing.title}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Introduction section */}
        <div className="py-16 border-b border-gray-200">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              {t.practices.manufacturing.intro.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="space-y-6">
              {t.practices.manufacturing.intro.slice(2).map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Our Strengths section */}
        <div className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-light text-pitkerBlue mb-12 text-center">{t.practices.manufacturing.strengths.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.practices.manufacturing.strengths.points.map((point, index) => (
              <div key={index} className="group p-8 bg-white border border-gray-200 hover:border-pitkerBlue transition-all duration-300">
                <h3 className="text-xl font-bold text-pitkerBlue mb-4 group-hover:text-pitkerRed transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Searches section */}
        <div className="py-16">
          <h2 className="text-3xl font-light text-pitkerBlue mb-12 text-center">{t.practices.manufacturing.recentSearches.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentSearches.map((search, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-pitkerBlue"
              >
                <p className="text-lg text-gray-700">{search}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryContent; 