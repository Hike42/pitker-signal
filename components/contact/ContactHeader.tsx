'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactHeader: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts-section');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-screen h-screen">
      <Image
        src="/jmlove.jpg"
        alt="Immeuble Haussmannien à Paris"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-screen-xl mx-auto px-4 md:px-8"
        >
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-5xl md:text-7xl font-light mb-8"
            >
              {t.hero.title}
            </motion.h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-px bg-pitkerRed mb-8"
            />

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-white/90 text-xl md:text-2xl font-light leading-relaxed mb-12"
            >
              {t.hero.description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              onClick={scrollToContacts}
              className="inline-flex items-center text-white hover:text-pitkerRed transition-colors duration-500"
            >
              <span className="mr-4 text-lg uppercase tracking-widest">
                {t.hero.scrollCTA}
              </span>
              <FaChevronDown className="text-xl" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default ContactHeader; 