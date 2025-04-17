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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const PracticesSection = () => {
  const { language } = useLanguage();
  const t = translations[language] as unknown as Translations;
  const practices = getPractices(t);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 max-w-6xl mx-auto text-center"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-pitkerBlue tracking-wide">
            {t.home.practices.title} <span className="text-pitkerRed">{t.home.practices.titleHighlight}</span>
          </h2>
          <div className="flex items-center justify-center mt-4 md:mt-6">
            <div className="w-12 md:w-16 h-px bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-pitkerRed mx-3 md:mx-4"></div>
            <div className="w-12 md:w-16 h-px bg-gray-300"></div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {practices.map((practice, index) => (
            <Link href={practice.href} key={index} className="block h-full">
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group h-full"
              >
                <div className={`relative bg-white rounded-lg overflow-hidden transform transition-all duration-500 h-full flex flex-col group`}>
                  {/* Card flap effect */}
                  <div className={`absolute top-0 left-0 w-full h-1/2 ${practice.color} bg-opacity-20 transform origin-top group-hover:scale-y-0 transition-transform duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative p-6 flex-grow flex flex-col">
                    <div className={`w-12 h-12 ${practice.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4`}>
                      <practice.icon className={`w-6 h-6 ${practice.textColor}`} />
                    </div>
                    <h3 className={`text-xl font-medium ${practice.textColor} mb-4`}>{practice.title}</h3>
                    <div className="mt-auto">
                      <div className={`w-8 h-1 ${practice.color} rounded-full transform group-hover:scale-x-150 transition-transform duration-500`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 