'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`p-1 transition-all ${language === 'fr' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
        aria-label="Passer en français"
      >
        <div className="w-6 h-4 relative">
          <Image
            src="/flag-fr.png"
            alt="French Flag"
            fill
            sizes="124px"
            className="object-cover rounded-sm"
            priority
          />
        </div>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`p-1 transition-all ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
        aria-label="Switch to English"
      >
        <div className="w-6 h-4 relative">
          <Image
            src="/flag-uk.png"
            alt="UK Flag"
            fill
            sizes="124px"
            className="object-cover rounded-sm"
            priority
          />
        </div>
      </button>
    </div>
  );
}; 