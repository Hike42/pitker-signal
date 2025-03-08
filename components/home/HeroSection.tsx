'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].home.hero;

  return (
    <section className="relative min-h-[80vh] bg-pitkerBlue overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Image */}
        <div className="absolute inset-0 flex justify-end">
          <div className="w-1/2 h-full relative opacity-70">
            <Image
              src="/whatwedo-hero-nobg.png"
              alt="Hero Background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-[80vh] container mx-auto px-4 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pitkerRed opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white opacity-5"></div>

            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full border-2 border-pitkerRed flex items-center justify-center">
                <div className="w-8 h-8 bg-pitkerRed rounded-full"></div>
              </div>
              <div className="h-px w-16 bg-pitkerRed ml-4"></div>
            </div>
            <h1 className="text-2xl md:text-4xl text-white font-light leading-tight mb-8">
              {t.title}
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl">
              {t.description}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}; 