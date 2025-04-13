// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FooterLogo } from './footer/FooterLogo';
import { SocialLinks } from './footer/SocialLinks';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language].footer;

  const NAV_LINKS = [
    { href: '/what-we-do', label: translations[language].navigation['what-we-do'] },
    { href: '/people', label: translations[language].navigation['people'] },
    { href: '/practices', label: translations[language].navigation['practices'] },
    { href: '/contact', label: translations[language].navigation['contact'] }
  ];

  return (
    <footer className="bg-gradient-to-br from-pitkerBlue to-[#002445] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne gauche */}
          <div className="space-y-6">
            <FooterLogo />
            <address className="not-italic text-sm leading-relaxed">
              <p className="font-semibold mb-2">{t['office-title']}</p>
              143 Boulevard Haussmann<br />
              75009 Paris, France
            </address>
          </div>

          {/* Colonne centrale */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t['quick-links']}</h3>
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne droite */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t['connect-with-us']}</h3>
            <p className="text-sm text-gray-300">
              {t['follow-linkedin']}
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} PITKER. {t['all-rights-reserved']}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/legal"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {t['legal-mentions']}
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {t['privacy-policy']}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;