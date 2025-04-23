'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';
import { memo } from 'react';

type LanguageCode = 'fr' | 'en';

const LANGUAGES = {
  fr: {
    code: 'fr' as const,
    label: 'Passer en français',
    flag: '/flag-fr.png',
    alt: 'Drapeau français'
  },
  en: {
    code: 'en' as const,
    label: 'Switch to English',
    flag: '/flag-uk.png',
    alt: 'UK Flag'
  }
} as const;

const flagStyles = {
  container: "w-6 h-4 relative",
  image: "object-cover rounded-sm"
};

const buttonStyles = {
  base: "p-1 transition-all duration-200",
  active: "opacity-100",
  inactive: "opacity-50 hover:opacity-75"
};

const LanguageButton = memo(({ 
  language, 
  currentLanguage, 
  setLanguage 
}: { 
  language: LanguageCode;
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}) => {
  const { code, label, flag, alt } = LANGUAGES[language];
  const isActive = currentLanguage === code;

  return (
    <button
      onClick={() => setLanguage(code)}
      className={`${buttonStyles.base} ${isActive ? buttonStyles.active : buttonStyles.inactive}`}
      aria-label={label}
      aria-pressed={isActive}
    >
      <div className={flagStyles.container}>
        <Image
          src={flag}
          alt={alt}
          fill
          sizes="24px"
          className={flagStyles.image}
          priority
        />
      </div>
    </button>
  );
});

LanguageButton.displayName = 'LanguageButton';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Sélection de la langue">
      <LanguageButton 
        language="fr" 
        currentLanguage={language as LanguageCode} 
        setLanguage={setLanguage as (lang: LanguageCode) => void} 
      />
      <LanguageButton 
        language="en" 
        currentLanguage={language as LanguageCode} 
        setLanguage={setLanguage as (lang: LanguageCode) => void} 
      />
    </div>
  );
}; 