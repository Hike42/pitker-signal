'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import { getLinkedInPreview } from '@/lib/linkedin-preview';
import { useEffect, useState } from 'react';

const NEWS_LINKS = [
  {
    title: "L'arrivée de Patrice",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7298376379413200896/",
    date: "Mars 2024"
  },
  {
    title: "Prise de parole avec Maud sur les carrières",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7269785504617742341/",
    date: "Mars 2024"
  },
  {
    title: "Actualité PITKER",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7196456640341000192/",
    date: "Mars 2024"
  }
] as const;

const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/company/pitker'
} as const;

interface NewsPreview {
  title: string;
  image: string;
  url: string;
}

export const GetConnectedSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [previews, setPreviews] = useState<Record<string, NewsPreview>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreviews = async () => {
      const previewsData: Record<string, NewsPreview> = {};
      for (const news of NEWS_LINKS) {
        const preview = await getLinkedInPreview(news.url);
        previewsData[news.url] = preview;
      }
      setPreviews(previewsData);
      setLoading(false);
    };

    fetchPreviews();
  }, []);

  return (
    <section className="relative min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/getconnected.jpg"
          alt={t.home.getConnected.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pitkerBlue/90 via-pitkerBlue/70 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Nos Actualités
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-pitkerRed mx-4"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/80">
              Découvrez nos dernières actualités et prises de parole
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video bg-white/10 rounded-lg mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS_LINKS.map((news) => (
                <a
                  key={news.url}
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={previews[news.url]?.image || '/placeholder.jpg'}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-white text-lg font-light mb-2 group-hover:text-pitkerRed transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-white/60 text-sm">{news.date}</p>
                </a>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <a 
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-6 py-4 px-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-pitkerRed transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-light text-white group-hover:text-pitkerRed transition-colors duration-300">
                  Suivez-nous sur LinkedIn
                </span>
                <svg 
                  className="w-5 h-5 text-white group-hover:text-pitkerRed transform group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 