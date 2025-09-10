/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-orange-400", "to-red-500',
    'from-blue-400", "to-indigo-500',
    'from-green-400", "to-emerald-500',
    'from-purple-400", "to-pink-500',
    'from-cyan-400", "to-blue-500',
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
