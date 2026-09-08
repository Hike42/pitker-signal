'use client';

import Link from '@/components/navigation/LocalizedLink';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
  fullWidth: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const IndustryCard = ({ title, description, image, href, color, fullWidth }: IndustryCardProps) => {
  const { t } = useLanguage();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  

  return (
    <Link href={href} className={`block ${fullWidth ? 'md:col-span-3' : ''}`}>
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className="group relative h-[300px] md:h-[400px] overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setIsImageLoaded(true)}
            priority
          />
          <div 
            className={`absolute inset-0 ${color} transition-opacity duration-300 ${
              isImageLoaded ? 'opacity-80 group-hover:opacity-90' : 'opacity-100'
            }`}
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="text-white text-3xl font-bold mb-4">
              {title}
            </h3>
            <p className="text-white/90 text-lg">
              {description}
            </p>
            <div className="mt-6 flex items-center text-white group-hover:translate-x-2 transition-transform">
              <span className="mr-2">{t.practices.grid.learnMore}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const IndustriesGrid = () => {
  const { t, language } = useLanguage();

  
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
          key={language}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {practices.map((industry, index) => (
            <IndustryCard key={`${language}-${index}-${industry.image}`} {...industry} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustriesGrid; 