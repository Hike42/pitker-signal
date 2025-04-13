'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import Link from 'next/link';
import { FaMicroscope, FaIndustry, FaLaptopCode, FaCompass } from 'react-icons/fa';

interface Translations {
  home: {
    practices: {
      title: string;
      titleHighlight: string;
      healthcare: { title: string };
      privateEquity: { title: string };
      industry: { title: string };
      ceoSearch: { title: string };
    }
  }
}

const getPractices = (t: Translations) => [
  {
    title: t.home.practices.healthcare.title,
    icon: FaMicroscope,
    href: "/practices/life-sciences",
    color: "bg-pitkerBlue",
    borderColor: "border-pitkerBlue",
    textColor: "text-pitkerBlue"
  },
  {
    title: t.home.practices.industry.title,
    icon: FaIndustry,
    href: "/practices/industry",
    color: "bg-pitkerRed",
    borderColor: "border-pitkerRed",
    textColor: "text-pitkerRed"
  },
  {
    title: t.home.practices.privateEquity.title,
    icon: FaLaptopCode,
    href: "/practices/private-equity",
    color: "bg-gray-800",
    borderColor: "border-gray-800",
    textColor: "text-gray-800"
  },
  {
    title: t.home.practices.ceoSearch.title,
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
            {t.home.practices.title} <span className="text-pitkerRed">{t.home.practices.titleHighlight}</span>
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
                <div className={`relative bg-white rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 h-full flex flex-col group`}>
                  {/* Card flap effect */}
                  <div className={`absolute top-0 left-0 w-full h-1/2 ${practice.color} bg-opacity-20 transform origin-top group-hover:scale-y-0 transition-transform duration-500`}></div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow relative">
                    {/* Icon container */}
                    <div className="mb-8">
                      <div className={`w-16 h-16 ${practice.color} bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}>
                        <practice.icon className={`text-3xl ${practice.textColor}`} />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl font-light ${practice.textColor} mb-4 group-hover:opacity-90 transition-opacity duration-300`}>{practice.title}</h3>
                    
                    {/* Decorative line */}
                    <div className={`mt-auto h-1 w-20 ${practice.color} bg-opacity-80`}></div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 