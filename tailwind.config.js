/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
  // === Restauration ===
  "from-orange-400", "to-red-500",
  "bg-orange-100", "text-orange-800",
  "bg-orange-600", "hover:bg-orange-700",
  "text-orange-600",

  // === Administration ===
  "from-blue-400", "to-indigo-500",
  "bg-blue-100", "text-blue-800",
  "bg-blue-600", "hover:bg-blue-500",
  "text-blue-600",

  // === Social ===
  "from-green-400", "to-emerald-500",
  "bg-green-100", "text-green-800",
  "bg-green-600", "hover:bg-green-700",
  "text-green-600",

  // === Management ===
  "from-purple-400", "to-pink-500",
  "bg-purple-100", "text-purple-800",
  "bg-purple-600", "hover:bg-purple-700",
  "text-purple-600",

  // === Programmation ===
  "from-cyan-400", "to-blue-500",
  "bg-cyan-100", "text-cyan-800",
  "bg-cyan-600", "hover:bg-cyan-700",
  "text-cyan-600",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
        },
        floatAlt: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, 10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatAlt: 'floatAlt 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
