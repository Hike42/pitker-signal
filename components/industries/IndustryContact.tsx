'use client';

import { Partner } from '@/lib/constants/partners';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

interface IndustryContactProps {
  partner: Partner | undefined;
}

const IndustryContact = ({ partner }: IndustryContactProps) => {
  const { t, language } = useLanguage();
  
  if (!partner) return null;
  
  return (
    <div className="flex flex-col items-center md:items-end space-y-6">
      <div className="relative w-32 h-32">
        <Image
          src={partner.imageOff}
          alt={partner.name}
          fill
          className="object-cover rounded-full"
          style={{ objectPosition: partner.imagePosition }}
        />
      </div>
      <div className="text-center md:text-right">
        <h3 className="text-xl font-bold text-pitkerBlue">{partner.name}</h3>
        <p className="text-gray-600 mb-2">{partner.roleTranslations[language]}</p>
        <p className="text-sm text-gray-500 mb-4">{partner.majorTranslations[language]}</p>
        <div className="flex items-center justify-center md:justify-end space-x-4">
          <a 
            href={`mailto:${partner.email}`}
            className="text-pitkerBlue hover:text-pitkerRed transition-colors"
            aria-label={t.practices.contact.emailLabel}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a 
            href={partner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pitkerBlue hover:text-pitkerRed transition-colors"
            aria-label={t.practices.contact.linkedinLabel}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryContact; 