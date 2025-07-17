import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-violet-300 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
              <a 
                href="/formation" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-900/50"
              >
                Formation
              </a>
              <a 
                href="/contact" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-900/50"
              >
                Contact
              </a>
              <a 
                href="/a-propos" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-900/50"
              >
                À propos
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
    </nav>
  );
}