// components/WhatWeDoSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

// Types
interface SectionProps {
  title: string;
  content: string;
  index: number;
}

// Fonction utilitaire
const formatText = (text: string) => {
  if (!text) return '';
  return text
    .replace(/PITKER/g, '<strong>PITKER</strong>')
    .replace(/Life Sciences/g, '<strong class="font-bold">Life Sciences</strong>')
    .replace(/Industrial/g, '<strong class="font-bold">Industrial</strong>')
    .replace(/Private Equity/g, '<strong class="font-bold">Private Equity</strong>')
    .replace(/sciences de la vie/g, '<strong class="font-bold">sciences de la vie</strong>')
    .replace(/industrie/g, '<strong class="font-bold">industrie</strong>')
    .replace(/private equity/g, '<strong class="font-bold">private equity</strong>');
};

// Composants
const HeroTitle = () => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-4"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
        {language === 'en' ? (
          <>What <span className="text-pitkerBlue">We</span> Do</>
        ) : (
          <>Savoir-<span className="text-pitkerBlue">faire</span></>
        )}
      </h1>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center ml-4"
      >
        <div className="h-px w-16 bg-pitkerRed mr-2"></div>
        <div className="w-8 h-8 rounded-full border-2 border-pitkerRed flex items-center justify-center">
          <div className="w-6 h-6 bg-pitkerRed rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ContentSection = ({ title, content, index }: SectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pitkerBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-light text-pitkerRed mb-4 sm:mb-6 pb-4 border-b border-gray-100 group-hover:border-pitkerBlue transition-colors duration-300">
          {title}
        </h3>
        <div 
          className="text-gray-700 text-left leading-relaxed text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: formatText(content) }}
        />
      </div>
    </motion.div>
  );
};

const HeroContent = ({ content }: { content: string }) => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pitkerRed"
      />
      <HeroTitle />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-base sm:text-lg md:text-xl text-gray-200 text-left font-light"
        dangerouslySetInnerHTML={{ __html: formatText(content) }}
      />
    </div>
  );
};

// Composant principal
export const WhatWeDoSection = () => {
  const { language } = useLanguage();
  const t = translations[language].whatWeDo.hero;
  const sections = t.description.split('\n\n').filter(Boolean);
  const [intro, coverage, ceoSearches, approach] = sections;

  const sectionTitles = {
    coverage: language === 'en' ? 'Our Coverage' : 'Périmètre',
    approach: language === 'en' ? 'Our Approach' : 'Approche',
    ceoSearches: language === 'en' ? 'CEO Searches' : '"CEO Searches"'
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="/whatwedo.jpg"
          alt="Stairs Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <HeroContent content={intro} />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 relative">
              {/* Connecting Line */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-pitkerBlue/20 via-pitkerBlue/40 to-pitkerBlue/20 hidden md:block"
              >
                <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat-x opacity-20" />
              </motion.div>

              <ContentSection 
                title={sectionTitles.coverage}
                content={coverage}
                index={0}
              />
              <ContentSection 
                title={sectionTitles.approach}
                content={approach}
                index={1}
              />
              <ContentSection 
                title={sectionTitles.ceoSearches}
                content={ceoSearches}
                index={2}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};