'use client';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-violet-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Section principale */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                    {/* À propos */}
                    <div className="max-w-md">
                        <h3 className="text-lg font-semibold mb-4">Chez LGC</h3>
                        <p className="text-gray-300 mb-4">
                            <span className="inline-block mb-2">Nos centres de formation sont spécialisés dans l'accompagnement professionnel. Nous proposons des formations qualifiantes dans différents secteurs.</span>
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                                <FaFacebook className="w-6 h-6" />
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                                <FaLinkedin className="w-6 h-6" />
                            </a>

                            {/* Instagram */}
                            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-300">51 Rue Gaston Lauriau, 93100 Montreuil</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-300">01 40 10 27 22</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-300">contact@lagrandeclasse.fr</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ligne de séparation */}
                <hr className="border-gray-800 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-300 text-sm">
                        © 2025 La Grande Classe. Tous droits réservés.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                            Mentions légales
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                            RGPD
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                            CGV
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}