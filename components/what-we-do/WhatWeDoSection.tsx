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

  const formatText = (text: string) => {
    return text
      .replace(/PITKER/g, '<strong>PITKER</strong>')
      .replace(/Life Sciences/g, '<strong>Life Sciences</strong>')
      .replace(/Industrial/g, '<strong>Industrial</strong>')
      .replace(/Private Equity/g, '<strong>Private Equity</strong>');
  };

  return (
    <div className="relative">
      {/* Hero Image Section with Overlay Content */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="/whatwedo.jpg"
          alt="Stairs Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pitkerRed opacity-5"></div>

                <div className="flex items-center mb-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                    What <span className="text-pitkerBlue">We</span> Do
                  </h1>
                  <div className="flex items-center ml-4">
                    <div className="h-px w-16 bg-pitkerRed mr-2"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-pitkerRed flex items-center justify-center">
                      <div className="w-6 h-6 bg-pitkerRed rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div 
                  className="text-lg sm:text-xl md:text-2xl text-gray-200 text-left"
                  dangerouslySetInnerHTML={{ __html: formatText(t.description.split('\n\n')[0]) }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-pitkerBlue/20 via-pitkerBlue/40 to-pitkerBlue/20 hidden md:block">
                <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat-x opacity-20" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pitkerBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-light text-pitkerRed mb-6 pb-4 border-b border-gray-100 group-hover:border-pitkerBlue transition-colors duration-300">
                    Our Coverage
                  </h3>
                  <div 
                    className="text-gray-700 text-left leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatText(t.description.split('\n\n')[1]) }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative bg-white p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pitkerBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-light text-pitkerRed mb-6 pb-4 border-b border-gray-100 group-hover:border-pitkerBlue transition-colors duration-300">
                    CEO Searches
                  </h3>
                  <div 
                    className="text-gray-700 text-left leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatText(t.description.split('\n\n')[2]) }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative bg-white p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pitkerBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-light text-pitkerRed mb-6 pb-4 border-b border-gray-100 group-hover:border-pitkerBlue transition-colors duration-300">
                    Our Approach
                  </h3>
                  <div 
                    className="text-gray-700 text-left leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatText(t.description.split('\n\n')[3]) }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};