// components/WhatWeDoSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

export const WhatWeDoSection = () => {
  const { language } = useLanguage();
  const t = translations[language].whatWeDo.hero;

  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <section className="relative h-[150vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/stairs.jpg"
            alt="Stairs Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            {/* Title, Description and Boxes */}
            <div className="max-w-6xl mx-auto">
              {/* Title and Description */}
              <div className="mb-16">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-8"
                >
                  {t.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-200 max-w-4xl"
                >
                  {t.description.split('\n\n')[0]}
                </motion.p>
              </div>

              {/* Boxes Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Functions Section */}
                <div className="bg-white p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-pitkerBlue mb-4">Our Coverage</h3>
                  <p className="text-lg text-gray-700">{t.description.split('\n\n')[1]}</p>
                </div>

                {/* CEO Searches Section */}
                <div className="bg-white p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-pitkerBlue mb-4">CEO Searches</h3>
                  <p className="text-lg text-gray-700">{t.description.split('\n\n')[2]}</p>
                </div>
              </div>

              {/* Quality Standards Section */}
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-pitkerBlue mb-4">Our Approach</h3>
                <p className="text-lg text-gray-700">{t.description.split('\n\n')[3]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};