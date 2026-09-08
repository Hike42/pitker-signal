'use client';

import { useState, useSyncExternalStore } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

function getConsent() {
  try { return localStorage.getItem('cookieConsent') === 'true'; } catch { return false; }
}
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('pitker-consent', callback);
  return () => { window.removeEventListener('storage', callback); window.removeEventListener('pitker-consent', callback); };
}
export const CookieBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const { language } = useLanguage();
  const consented = useSyncExternalStore(subscribe, getConsent, () => true);
  const isVisible = !dismissed && !consented;
  const handleAccept = () => {
    try { localStorage.setItem('cookieConsent', 'true'); } catch { /* Storage may be unavailable. */ }
    setDismissed(true);
    window.dispatchEvent(new Event('pitker-consent'));
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