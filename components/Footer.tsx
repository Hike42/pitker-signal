// components/Footer.tsx
import Link from 'next/link';
import { FooterLogo } from './footer/FooterLogo';
import { SocialLinks } from './footer/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-pitkerBlue to-[#002445] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne gauche */}
          <div className="space-y-6">
            <FooterLogo />
            <address className="not-italic text-sm leading-relaxed">
              <p className="font-semibold mb-2">Paris Office</p>
              143 Boulevard Haussmann<br />
              75009 Paris, France
            </address>
          </div>

          {/* Colonne centrale */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {['What we do', 'People', 'Industries', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne droite */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <p className="text-sm text-gray-300">
              Follow us on LinkedIn to stay updated on our latest insights and opportunities.
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Pitker. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/legal"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                Legal Mentions
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;