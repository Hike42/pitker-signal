'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';
import { FaMicroscope, FaIndustry, FaLaptopCode, FaCompass } from 'react-icons/fa';

interface Translations {
  practices: {
    grid: {
      title: string;
      highlight: string;
      lifesciences: { title: string };
      manufacturing: { title: string };
      privateEquity: { title: string };
      ceoSearch: { title: string };
    }
  }
}

const getPractices = (t: Translations) => [
  {
    title: t.practices.grid.lifesciences.title,
    icon: FaMicroscope,
    href: "/practices/life-sciences",
    color: "bg-pitkerBlue",
    borderColor: "border-pitkerBlue",
    textColor: "text-pitkerBlue"
  },
  {
    title: t.practices.grid.manufacturing.title,
    icon: FaIndustry,
    href: "/practices/industry",
    color: "bg-pitkerRed",
    borderColor: "border-pitkerRed",
    textColor: "text-pitkerRed"
  },
  {
    title: t.practices.grid.privateEquity.title,
    icon: FaLaptopCode,
    href: "/practices/private-equity",
    color: "bg-gray-800",
    borderColor: "border-gray-800",
    textColor: "text-gray-800"
  },
  {
    title: t.practices.grid.ceoSearch.title,
    icon: FaCompass,
    href: "/practices/ceo-search",
    color: "bg-pitkerBlue",
    borderColor: "border-pitkerBlue",
    textColor: "text-pitkerBlue"
  }
];

export const PracticesSection = () => {
  const { language } = useLanguage();
  const t = translations[language] as unknown as Translations;
  const practices = getPractices(t);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-6xl mx-auto text-center"
        >
          <h2 className="text-5xl font-light text-pitkerBlue tracking-wide">
            {t.practices.grid.title} <span className="text-pitkerRed">{t.practices.grid.highlight}</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-pitkerRed mx-4"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {practices.map((practice, index) => (
            <Link href={practice.href} key={index} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <div className={`relative bg-white border ${practice.borderColor} border-opacity-20 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl h-full flex flex-col`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${practice.color}`}></div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Icon container */}
                    <div className="mb-6 relative">
                      <div className={`w-20 h-20 rounded-lg ${practice.color} bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}>
                        <practice.icon className={`text-4xl ${practice.textColor}`} />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${practice.color} bg-opacity-10 rounded-lg`}></div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-grow flex flex-col">
                      <h3 className={`text-2xl font-light mb-4 text-gray-800 group-hover:${practice.textColor} transition-colors duration-300`}>
                        {practice.title}
                      </h3>
                      
                      {/* Decorative elements */}
                      <div className="mt-auto flex items-center">
                        <div className={`w-8 h-px ${practice.color} bg-opacity-50`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${practice.color} ml-2`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 ${practice.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 