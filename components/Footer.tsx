// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FooterLogo } from './footer/FooterLogo';
import { SocialLinks } from './footer/SocialLinks';
import { useLanguage } from '@/lib/context/LanguageContext';
import { memo } from 'react';

const footerStyles = {
  container: "bg-gradient-to-br from-pitkerBlue to-[#002445] text-white py-12",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-12",
  column: "space-y-6",
  title: "text-lg font-semibold",
  link: "text-gray-300 hover:text-white transition-colors duration-300 w-fit",
  bottomBar: "mt-12 pt-8 border-t border-white/10",
  bottomContainer: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
  copyright: "text-sm text-gray-300",
  legalLink: "text-sm text-gray-300 hover:text-white transition-colors duration-300"
};

const FooterColumn = memo(({ 
  title, 
  children 
}: { 
  title?: string;
  children: React.ReactNode;
}) => (
  <div className={footerStyles.column}>
    {title && <h3 className={footerStyles.title}>{title}</h3>}
    {children}
  </div>
));

FooterColumn.displayName = 'FooterColumn';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const NAV_LINKS = [
    { href: '/what-we-do', label: t.navigation['what-we-do'] },
    { href: '/people', label: t.navigation.people },
    { href: '/practices', label: t.navigation.practices },
    { href: '/contact', label: t.navigation.contact }
  ] as const;

  return (
    <footer className={footerStyles.container} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className={footerStyles.grid}>
          <FooterColumn>
            <FooterLogo />
            <address className="not-italic text-sm leading-relaxed">
              <p className="font-semibold mb-2">{t.footer['office-title']}</p>
              143 Boulevard Haussmann<br />
              75008 Paris, France
            </address>
          </FooterColumn>

          <FooterColumn title={t.footer['quick-links']}>
            <nav className="flex flex-col space-y-3" aria-label="Navigation rapide">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={footerStyles.link}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn title={t.footer['connect-with-us']}>
            <SocialLinks />
          </FooterColumn>
        </div>

        <div className={footerStyles.bottomBar}>
          <div className={footerStyles.bottomContainer}>
            <p className={footerStyles.copyright}>
              {t.footer.copyright.replace('PITKER', `© ${currentYear} PITKER`)}
            </p>
            <nav className="flex space-x-6" aria-label="Liens légaux">
              <Link
                href="/legal"
                className={footerStyles.legalLink}
              >
                {t.footer['legal-mentions']}
              </Link>
              <Link
                href="/privacy"
                className={footerStyles.legalLink}
              >
                {t.footer['privacy-policy']}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;