'use client';

import { PARTNERS } from '@/lib/constants/partners';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function CeoSearchContacts() {
  const { language } = useLanguage();
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-pitkerBlue mb-12 text-center">
          {language === 'fr' ? 'Vos Contacts' : 'Your Contacts'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={partner.imageSmall}
                  alt={partner.name}
                  width={192}
                  height={192}
                  className="object-cover rounded-full absolute w-full h-full"
                  style={{ objectPosition: partner.imageSmallPosition }}
                />
              </div>
              <h3 className="text-xl font-bold text-pitkerBlue">{partner.name}</h3>
              <p className="text-gray-600 mb-4">{partner.role[language]}</p>
              <div className="flex gap-4">
                <a
                  href={`mailto:${partner.email}`}
                  className="text-pitkerBlue hover:text-pitkerRed"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pitkerBlue hover:text-pitkerRed"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 