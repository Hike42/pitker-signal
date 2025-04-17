'use client';

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

interface StatCardProps {
  number: string;
  description: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, description, index }) => {
  const isFraction = number.includes('/');
  const isYear = number === "2020";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border-2 border-pitkerRed/10 hover:border-pitkerRed/30">
        <div className="flex flex-col items-start flex-grow">
          <div className="relative">
            <span className="text-6xl font-bold text-pitkerBlue group-hover:text-pitkerRed transition-colors duration-300">
              {isFraction ? (
                number
              ) : isYear ? (
                number
              ) : (
                <CountUp
                  end={parseFloat(number)}
                  duration={2.5}
                  suffix={number.includes('%') ? '%' : ''}
                  prefix={number.startsWith('$') ? '$' : ''}
                />
              )}
            </span>
            <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-pitkerRed transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
          <p className="mt-4 text-sm font-medium text-gray-600 group-hover:text-pitkerRed transition-colors duration-300 leading-tight">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const KeyStatsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].whatWeDo.keyStats;

  return (
    <section id="key-stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <h2 className="text-4xl font-light text-pitkerBlue text-center mb-6">
            {t.title.split(' ').map((word, index) => (
              <span key={index} className={word === "clés" ? "text-pitkerRed" : ""}>
                {word}{" "}
              </span>
            ))}
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-px bg-pitkerBlue/30"></div>
            <div className="w-2 h-2 rounded-full bg-pitkerRed mx-4"></div>
            <div className="w-16 h-px bg-pitkerBlue/30"></div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};