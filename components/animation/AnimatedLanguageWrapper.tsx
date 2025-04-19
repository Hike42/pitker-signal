'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ReactNode } from 'react';

interface AnimatedLanguageWrapperProps {
  children: ReactNode;
}

export const AnimatedLanguageWrapper = ({ children }: AnimatedLanguageWrapperProps) => {
  const { language } = useLanguage();

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay de transition */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-pitkerBlue pointer-events-none z-50"
        />
      </AnimatePresence>
    </div>
  );
}; 