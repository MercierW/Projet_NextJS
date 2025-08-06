'use client';

import Link from 'next/link'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${scrolled ? "py-1 bg-violet-900/70 shadow-md" : "py-2 bg-violet-900/100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo à gauche */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-bold hover:text-gray-200 transition-colors">
              <Image
                src="/logo_v02.png"
                alt="Logo la grande classe"
                width={50}
                height={40}
              />
            </a>
          </div>

          {/* Liens à droite */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/formations"
                className="relative inline-block text-white py-2 text-sm font-medium group hover:text-gray-200 transition-colors"
              >
                Formation
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
              </Link>

              <a
                href="/contact"
                className="relative inline-block text-white py-2 text-sm font-medium group hover:text-gray-200 transition-colors"
              >
                Contact
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
              </a>

              <a
                href="/a-propos"
                className="relative inline-block text-white py-2 text-sm font-medium group hover:text-gray-200 transition-colors"
              >
                À propos
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
              </a>
            </div>
          </div>

          {/* Menu mobile (hamburger) */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
