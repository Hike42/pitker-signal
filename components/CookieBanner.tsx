'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const bannerText = {
    fr: "Nous utilisons des cookies techniques essentiels au bon fonctionnement du site.",
    en: "We use essential technical cookies to ensure the proper functioning of the website."
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-sm text-gray-600">
                {bannerText[language]}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-pitkerBlue text-white hover:bg-pitkerBlue/90 transition-colors duration-300"
                  style={{ borderRadius: 4 }}
                >
                  {language === 'fr' ? 'Accepter' : 'Accept'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};