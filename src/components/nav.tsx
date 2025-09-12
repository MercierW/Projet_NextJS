'use client';

import Link from 'next/link'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu lors du redimensionnement de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuLinks = [
    { href: "/formations", label: "Formations" },
    { href: "/actu", label: "Actualités" },
    { href: "/contact", label: "Contact" },
    { href: "/a-propos", label: "À propos" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
          scrolled ? "py-1 bg-violet-900/70 shadow-md" : "py-2 bg-violet-900/100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo à gauche */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-xl font-bold hover:text-gray-200 transition-colors">
                <Image
                  src="/logo_v02.png"
                  alt="Logo la grande classe"
                  width={50}
                  height={40}
                />
              </Link>
            </div>

            {/* Liens à droite - Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative inline-block text-white py-2 text-sm font-medium group hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                    <span className="absolute left-1/2 bottom-0 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bouton hamburger - Mobile */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 p-2"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 relative"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 }
                    }}
                    className="absolute h-0.5 w-6 bg-current transform origin-center transition-all duration-300"
                    style={{ top: '6px' }}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="absolute h-0.5 w-6 bg-current transition-opacity duration-300"
                    style={{ top: '12px' }}
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 }
                    }}
                    className="absolute h-0.5 w-6 bg-current transform origin-center transition-all duration-300"
                    style={{ top: '18px' }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-sm bg-violet-900 shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header du menu */}
                <div className="flex items-center justify-between p-4 border-b border-violet-700">
                  <span className="text-white font-semibold text-lg">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="text-white hover:text-gray-200 focus:outline-none p-2"
                    aria-label="Close menu"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 py-6">
                  <div className="space-y-1">
                    {menuLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="block px-6 py-4 text-white hover:bg-violet-800 hover:text-gray-200 transition-all duration-200 text-lg font-medium border-b border-violet-700/50"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}