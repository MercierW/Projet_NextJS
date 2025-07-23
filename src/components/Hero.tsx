'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-sky-50">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-70"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-green-100 rounded-full opacity-70"
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-red-100 rounded-full opacity-70"
          animate={{ x: [0, 15, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 left-1/2 w-40 h-40 bg-blue-100 rounded-full opacity-70"
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-1/2 w-56 h-56 bg-green-100 rounded-full opacity-70"
          animate={{ x: [0, 18, 0], y: [0, -28, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-3/4 left-10 w-24 h-24 bg-red-100 rounded-full opacity-70"
          animate={{ x: [0, -12, 0], y: [0, 22, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-36 h-36 bg-blue-100 rounded-full opacity-70"
          animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-20 h-20 bg-green-100 rounded-full opacity-70"
          animate={{ x: [0, -10, 0], y: [0, 26, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">L</span>a{' '} 
          <span className="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">G</span>ande{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent">C</span>lasse
        </h1>

        <div className="relative mb-12">
          <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
            Il n'y a pas d'âge pour{' '}
            <span className="relative inline-block">
              <span className="text-red-600 font-medium">apprendre</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-200 rounded-full"></span>
            </span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Une plateforme d'apprentissage qui accompagne chacun dans son parcours de développement personnel et professionnel.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 text-gray-400">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
