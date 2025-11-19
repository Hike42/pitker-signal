'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].home.hero;

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] bg-pitkerBlue overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Image */}
        <div className="absolute inset-0 flex justify-center md:justify-end">
          <div className="w-full md:w-1/2 h-full relative opacity-70">
            <Image
              src="/whatwedo-hero-nobg.png"
              alt="Hero Background"
              fill
              priority
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              onLoad={(event) => {
                const img = event.currentTarget;
                img.classList.add('opacity-100');
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] container mx-auto px-4 flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center relative max-w-2xl"
          >
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 rounded-full bg-pitkerRed opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-white opacity-5"></div>

            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-pitkerRed flex items-center justify-center">
                <div className="w-5 h-5 md:w-8 md:h-8 bg-pitkerRed rounded-full"></div>
              </div>
              <div className="h-px w-12 md:w-16 bg-pitkerRed ml-3 md:ml-4"></div>
            </div>
            <div className="max-w-2xl">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-light leading-tight mb-6 md:mb-8">
                {language === 'fr' ? (
                  <>
                    <span className="text-white">L&apos;art et la </span>
                    <span className="text-pitkerRed">manière.</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Skill and </span>
                    <span className="text-pitkerRed">art.</span>
                  </>
                )}
              </h1>
            </div>
            
            <div className="max-w-2xl">
              <p className="text-base md:text-lg text-white/80">
                {t.description.split(/(PITKER|Life Sciences|Industrial|Private Equity|sciences de la vie|industrie|private equity)/).map((part, index) => {
                  if (['PITKER', 'Life Sciences', 'Industrial', 'Private Equity', 'sciences de la vie', 'industrie', 'private equity'].includes(part)) {
                    return (
                      <span key={index} className="font-bold">
                        {part}
                      </span>
                    );
                  }
                  return part;
                })}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}; 