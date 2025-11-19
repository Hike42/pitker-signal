// components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageToggle } from './navigation/LanguageToggle';
import { MenuButton } from './navigation/MenuButton';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const NAV_LINKS = [
    { href: '/what-we-do', label: t.navigation['what-we-do'] },
    { href: '/people', label: t.navigation.people },
    { href: '/practices', label: t.navigation.practices },
    { href: '/contact', label: t.navigation.contact }
  ];

  const menuStyles = {
    base: "text-pitkerBlue hover:text-pitkerRed transition-colors duration-300",
    desktop: "border-b-2 border-transparent hover:border-pitkerBlue",
    mobile: "block py-3 text-base font-medium border-b border-gray-100 last:border-0 focus:outline-none focus:ring-2 focus:ring-pitkerRed focus:ring-offset-2"
  };

  return (
    <header role="banner">
      {/* Bandeau supérieur */}
      <div className="bg-gray-100 py-2 hidden md:block" role="complementary" aria-label="Barre de langue">
        <div className="container mx-auto px-4 flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="bg-white shadow" role="navigation" aria-label="Navigation principale">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center" aria-label="Retour à l'accueil">
                <div className="relative w-40 h-10">
                  <Image
                    src="/navbarlogo.png"
                    alt="Pitker Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-8" role="menubar">
              {NAV_LINKS.map(({ href, label }) => (
                <div key={href} role="none">
                  <Link
                    href={href}
                    className={`${menuStyles.base} ${menuStyles.desktop}`}
                    role="menuitem"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Bouton Menu Mobile et Language Toggle */}
            <motion.div 
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 md:hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              <MenuButton isOpen={isOpen} onClick={toggleMenu} aria-expanded={isOpen} />
            </motion.div>
          </div>
        </div>

        {/* Menu Mobile avec animation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white fixed top-16 left-0 right-0 z-50"
          role="menu"
          aria-label="Menu mobile"
          style={{ willChange: 'height, opacity' }}
        >
          <div className="px-4 py-4 space-y-2">
            <div className="py-2">
              <LanguageToggle />
            </div>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${menuStyles.base} ${menuStyles.mobile}`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;