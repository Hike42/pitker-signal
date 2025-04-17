'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PARTNERS } from '@/lib/constants/partners';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

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

const PartnersSection = () => {
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].people;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePartnerInteraction = (id: number) => {
    if (isMobile) {
      setActivePartner(activePartner === id ? null : id);
    } else {
      setActivePartner(id);
    }
  };

  return (
    <section className="bg-pitkerBlue min-h-screen pt-12 md:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 md:mb-16"
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light">
            {t.hero.title} <span className="text-pitkerRed font-light">{t.hero.titleHighlight}</span> {t.hero.subtitle}
          </h1>
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-pitkerRed flex items-center justify-center">
              <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-pitkerRed rounded-full"></div>
            </div>
            <div className="h-px w-8 md:w-12 lg:w-16 bg-pitkerRed ml-2 md:ml-4"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PARTNERS.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative cursor-pointer"
              onMouseEnter={() => !isMobile && handlePartnerInteraction(partner.id)}
              onMouseLeave={() => !isMobile && setActivePartner(null)}
              onClick={() => isMobile && handlePartnerInteraction(partner.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                {/* Photo View */}
                <motion.div 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activePartner === partner.id ? 'opacity-0' : 'opacity-100'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activePartner === partner.id ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: partner.imagePosition }}
                  />
                </motion.div>

                {/* Biography View */}
                <motion.div 
                  className={`absolute inset-0 bg-pitkerBlue/95 transition-opacity duration-500 ${
                    activePartner === partner.id ? 'opacity-100 overflow-y-auto' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activePartner === partner.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6">
                    {partner.biography[language].split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-white text-sm leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex space-x-4 mt-6">
                      <a 
                        href={`mailto:${partner.email}`} 
                        className="text-white hover:text-pitkerRed transition-colors"
                        aria-label={t.partners.emailLabel}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                      <a 
                        href={partner.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-pitkerRed transition-colors"
                        aria-label={t.partners.linkedinLabel}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Name, Role and Major */}
              <div className="mt-4 md:mt-6 space-y-1 md:space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">{partner.name}</h2>
                <div className="flex items-center space-x-4 md:flex-col md:items-start md:space-x-0">
                  <p className="text-pitkerRed text-base md:text-lg font-medium">{partner.role}</p>
                  <div className="flex items-center space-x-2">
                    <Image 
                      src="/favicon.svg"
                      alt="Star"
                      width={14}
                      height={14}
                      className="text-pitkerRed"
                    />
                    <p className="text-white text-sm md:text-base">
                      <span className="text-white">{partner.major}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection; 