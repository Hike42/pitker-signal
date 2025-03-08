'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PARTNERS } from '@/lib/constants/partners';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

const PartnersSection = () => {
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].people;

  const togglePartner = (id: number) => {
    setActivePartner(activePartner === id ? null : id);
  };

  return (
    <section className="bg-pitkerBlue min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-white text-4xl md:text-5xl font-light mb-16">
          {t.hero.title} <span className="text-pitkerRed font-light">{t.hero.titleHighlight}</span> {t.hero.subtitle}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.id}
              className="group relative"
              onMouseEnter={() => setActivePartner(partner.id)}
              onMouseLeave={() => setActivePartner(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                {/* Photo View */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  activePartner === partner.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: partner.imagePosition }}
                  />
                </div>

                {/* Biography View */}
                <div 
                  className={`absolute inset-0 bg-pitkerBlue/95 transition-opacity duration-500 ${
                    activePartner === partner.id ? 'opacity-100 overflow-y-auto' : 'opacity-0'
                  }`}
                >
                  <div className="p-6">
                    {partner.biography[language].split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-white text-base leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex space-x-4 mt-6">
                      <a 
                        href={`mailto:${partner.email}`} 
                        className="text-white hover:text-pitkerRed transition-colors"
                        aria-label={t.partners.emailLabel}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                      <a 
                        href={partner.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-pitkerRed transition-colors"
                        aria-label={t.partners.linkedinLabel}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Toggle Button - Only visible on mobile */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePartner(partner.id);
                  }}
                  className="md:hidden absolute bottom-4 right-4 bg-pitkerRed text-white p-2 rounded-full shadow-lg z-10"
                >
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activePartner === partner.id ? 'rotate-45' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {activePartner === partner.id ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    )}
                  </svg>
                </button>
              </div>
              
              {/* Name, Role and Major */}
              <div className="mt-6 space-y-2">
                <h2 className="text-2xl font-bold text-white">{partner.name}</h2>
                <p className="text-pitkerRed font-medium">{partner.role}</p>
                <div className="flex items-center space-x-2">
                  <Image 
                    src="/favicon.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="text-pitkerRed"
                  />
                  <p className="text-white text-sm">
                    {t.partners.major}: <span className="text-pitkerRed">{partner.major}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 