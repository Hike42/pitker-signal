// components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageToggle } from './navigation/LanguageToggle';
import { MenuButton } from './navigation/MenuButton';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

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
    { href: '/what-we-do', label: translations[language].navigation['what-we-do'] },
    { href: '/people', label: translations[language].navigation['people'] },
    { href: '/practices', label: translations[language].navigation['practices'] },
    { href: '/contact', label: translations[language].navigation['contact'] }
  ];

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={navVariants}
    >
      {/* Bandeau supérieur */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="bg-white shadow">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <motion.div variants={linkVariants}>
              <Link href="/" className="flex items-center">
                <div className="relative w-40 h-10">
                  <Image
                    src="/navbarlogo.png"
                    alt="Pitker Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {NAV_LINKS.map(({ href, label }) => (
                <motion.div key={href} variants={linkVariants}>
                  <Link
                    href={href}
                    className="text-pitkerBlue hover:text-pitkerRed border-b-2 border-transparent hover:border-pitkerBlue transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bouton Menu Mobile et Language Toggle */}
            <motion.div 
              variants={linkVariants}
              className="flex items-center gap-4 md:hidden"
            >
              <LanguageToggle />
              <MenuButton isOpen={isOpen} onClick={toggleMenu} />
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
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-pitkerBlue hover:text-pitkerRed block px-3 py-2 text-base font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar;