import { useContext } from 'react';
import { LanguageContext } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

type Language = keyof typeof translations;

export const useLanguage = () => {
  const { language } = useContext(LanguageContext);
  return { t: translations[language as Language] };
}; 