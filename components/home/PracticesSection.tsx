'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import Link from '@/components/navigation/LocalizedLink';
import { FaMicroscope, FaIndustry, FaLaptopCode, FaCompass } from 'react-icons/fa';
import { memo } from 'react';

type Practice = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  color: string;
  borderColor: string;
  textColor: string;
};

const practicesStyles = {
  section: "py-8 md:py-12 bg-gradient-to-b from-white to-gray-50",
  container: "container mx-auto px-4",
  title: {
    container: "mb-12 md:mb-20 max-w-6xl mx-auto text-center",
    text: "text-3xl md:text-4xl lg:text-5xl font-light text-pitkerBlue tracking-wide",
    highlight: "text-pitkerRed",
    divider: {
      container: "flex items-center justify-center mt-4 md:mt-6",
      line: "w-12 md:w-16 h-px bg-gray-300",
      dot: "w-2 h-2 rounded-full bg-pitkerRed mx-3 md:mx-4"
    }
  },
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto",
  card: {
    container: "group h-full",
    inner: "relative bg-white rounded-lg overflow-hidden transform transition-all duration-500 h-full flex flex-col group",
    flap: "absolute top-0 left-0 w-full h-1/2 bg-opacity-20 transform origin-top group-hover:scale-y-0 transition-transform duration-500",
    content: "relative p-6 flex-grow flex flex-col",
    icon: {
      container: "w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center mb-4",
      icon: "w-6 h-6"
    },
    title: "text-xl font-medium mb-4",
    indicator: "w-8 h-1 rounded-full transform group-hover:scale-x-150 transition-transform duration-500"
  }
};

const getPractices = (t: typeof translations.fr | typeof translations.en): Practice[] => [
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
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

const PracticeCard = memo(({ practice }: { practice: Practice }) => {
  const Icon = practice.icon;
  
  return (
    <Link href={practice.href} className="block h-full">
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        className={practicesStyles.card.container}
      >
        <div className={practicesStyles.card.inner}>
          <div className={`${practicesStyles.card.flap} ${practice.color}`} />
          <div className={practicesStyles.card.content}>
            <div className={`${practicesStyles.card.icon.container} ${practice.color}`}>
              <Icon className={`${practicesStyles.card.icon.icon} ${practice.textColor}`} />
            </div>
            <h3 className={`${practicesStyles.card.title} ${practice.textColor}`}>{practice.title}</h3>
            <div className="mt-auto">
              <div className={`${practicesStyles.card.indicator} ${practice.color}`} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

PracticeCard.displayName = 'PracticeCard';

export const PracticesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const practices = getPractices(t);

  return (
    <section className={practicesStyles.section} role="region" aria-label="Nos pratiques">
      <div className={practicesStyles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={practicesStyles.title.container}
          transition={{ duration: 0.5 }}
        >
          <h2 className={practicesStyles.title.text}>
            {t.home.practices.title} <span className={practicesStyles.title.highlight}>{t.home.practices.titleHighlight}</span>
          </h2>
          <div className={practicesStyles.title.divider.container}>
            <div className={practicesStyles.title.divider.line} />
            <div className={practicesStyles.title.divider.dot} />
            <div className={practicesStyles.title.divider.line} />
          </div>
        </motion.div>

        <motion.div 
          className={practicesStyles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {practices.map((practice, index) => (
            <PracticeCard key={index} practice={practice} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 