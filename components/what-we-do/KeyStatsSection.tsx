'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

interface StatCardProps {
  number: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, description }) => {
  // Fonction pour extraire le nombre de la chaîne
  const extractNumber = (str: string) => {
    const num = parseFloat(str.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  // Fonction pour vérifier si le nombre a un symbole '+'
  const hasPlus = number.includes('+');
  const numberValue = extractNumber(number);

  return (
    <div className="relative group bg-white rounded-xl shadow-sm hover:shadow-xl p-8 transition-all duration-300">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-pitkerBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
      <div className="flex flex-col items-start">
        <span className="text-5xl font-bold bg-gradient-to-r from-pitkerBlue to-blue-400 bg-clip-text text-transparent">
          <CountUp
            end={numberValue}
            duration={2.5}
            suffix={number.includes('%') ? '%' : ''}
            prefix={number.startsWith('$') ? '$' : ''}
          />
          {hasPlus && '+'}
        </span>
        <p className="mt-4 text-gray-600 text-lg font-medium group-hover:text-pitkerBlue transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const stats = [
  { number: '20+', description: 'PE funds served since 2022' },
  { number: '6', description: 'Research team members' },
  { number: '3', description: 'Major industries covered' },
  { number: '25%', description: 'International hires' },
  { number: '3', description: 'Experienced partners' },
  { number: '5', description: 'Years of excellence' },
  { number: '25', description: 'Years of experience in life sciences' },
  { number: '25%', description: 'CEO Roles' },
  { number: '66%', description: 'Mid-Size companies' }
];

const KeyStatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Image src="/favicon.svg" alt="Pitker Logo" width={32} height={32} className="w-8 h-8" />
          <h2 className="text-3xl font-light text-pitkerBlue text-center">Key Figures</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStatsSection;