/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
