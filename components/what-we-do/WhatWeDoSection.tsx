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
    <section className="relative min-h-[60vh] flex items-center">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/whatwedo-hero.jpg"
          alt="What We Do Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-pitkerRed mb-6"
          >
            {t.title.split(' ').map((word, index) => (
              <span key={index} className={word === "PITKER" ? "text-pitkerRed" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            {t.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};