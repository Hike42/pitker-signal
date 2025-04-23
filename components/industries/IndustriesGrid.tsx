'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
  fullWidth: boolean;
  index: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const IndustryCard = ({ title, description, image, href, color, fullWidth, index }: IndustryCardProps) => {
  const { t } = useLanguage();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Réinitialiser l'état de chargement quand l'image change
  useEffect(() => {
    setIsImageLoaded(false);
  }, [image]);

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative h-[400px] overflow-hidden ${fullWidth ? 'md:col-span-full' : ''}`}
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: isImageLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onLoad={() => setIsImageLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
          <div 
            className={`absolute inset-0 ${color} transition-opacity duration-300 ${
              isImageLoaded ? 'opacity-80 group-hover:opacity-90' : 'opacity-100'
            }`}
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-white text-3xl font-bold mb-4"
            >
              {title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-white/90 text-lg"
            >
              {description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="mt-6 flex items-center text-white group-hover:translate-x-2 transition-transform"
            >
              <span className="mr-2">{t.practices.grid.learnMore}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const IndustriesGrid = () => {
  const { t, language } = useLanguage();
  const [key, setKey] = useState(0);
  
  // Forcer le re-rendu du composant quand la langue change
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [language]);
  
  const practices = [
    {
      title: t.practices.grid.lifesciences.title,
      description: t.practices.grid.lifesciences.description,
      image: "/lifesciences.jpg",
      href: "/practices/life-sciences",
      color: "bg-pitkerBlue",
      fullWidth: false
    },
    {
      title: t.practices.grid.manufacturing.title,
      description: t.practices.grid.manufacturing.description,
      image: "/industry.jpg",
      href: "/practices/industry",
      color: "bg-pitkerRed",
      fullWidth: false
    },
    {
      title: t.practices.grid.privateEquity.title,
      description: t.practices.grid.privateEquity.description,
      image: "/pe.jpg",
      href: "/practices/private-equity",
      color: "bg-gray-800",
      fullWidth: false
    },
    {
      title: t.practices.grid.ceoSearch.title,
      description: t.practices.grid.ceoSearch.description,
      image: "/ceosearch.jpg",
      href: "/practices/ceo-search",
      color: "bg-pitkerBlue",
      fullWidth: true
    }
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          key={key}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {practices.map((industry, index) => (
            <IndustryCard key={`${key}-${index}`} {...industry} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustriesGrid; 