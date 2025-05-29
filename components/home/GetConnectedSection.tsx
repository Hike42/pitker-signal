'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

interface Translations {
  home: {
    getConnected: {
      title: string;
      description: string;
    };
    news: {
      articles: {
        newPartner: {
          title: string;
        };
        careerDevelopment: {
          title: string;
        };
        careerOrganization: {
          title: string;
        };
      };
    };
  };
}

const NEWS_LINKS = [
  {
    key: 'newPartner',
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7298376379413200896/",
    date: "2025"
  },
  {
    key: 'careerDevelopment',
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7269785504617742341/",
    date: "2024"
  },
  {
    key: 'careerOrganization',
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7196456640341000192/",
    date: "2024"
  }
] as const;

export const GetConnectedSection = () => {
  const { language } = useLanguage();
  const t = translations[language] as unknown as Translations;

  return (
    <section className="relative min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/getconnected.jpg"
          alt={t.home.getConnected.title}
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pitkerBlue/90 via-pitkerBlue/70 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              {t.home.getConnected.title}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-pitkerRed mx-4"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/80">
              {t.home.getConnected.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_LINKS.map((news) => (
              <div
                key={news.url}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-white text-xl font-light mb-2">
                  {t.home.news.articles[news.key].title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{news.date}</p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pitkerRed hover:text-white transition-colors duration-300"
                >
                  <span className="mr-2">Find out more</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 