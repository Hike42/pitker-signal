'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="transition-transform hover:scale-105 focus:outline-none"
      aria-label={language === 'en' ? 'Passer en français' : 'Switch to English'}
    >
      <Image 
        src={language === 'en' ? '/flag-fr.png' : '/flag-uk.png'}
        alt={language === 'en' ? 'French Flag' : 'UK Flag'}
        width={24} 
        height={24} 
        className="flex-shrink-0"
      />
    </button>
  );
}; 