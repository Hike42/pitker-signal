'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { translations } from '@/lib/translations';
import { localizedPath, type Language } from '@/lib/i18n';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations[Language];
}
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export function LanguageProvider({ children, language }: { children: ReactNode; language: Language }) {
  const router = useRouter();
  const pathname = usePathname();
  const setLanguage = (next: Language) => {
    if (next === language) return;
    router.push(localizedPath(pathname, next) + window.location.search + window.location.hash);
  };
  return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage doit être utilisé dans un LanguageProvider');
  return context;
}
