const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)', ...fontFamily.sans],
        sans: ['var(--font-body)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f1ed22',
          100: '#f3f339',
          200: '#f6f051',
          300: '#f6eb51',
          400: '#f1dc1e',
          500: '#e8c811',
          600: '#e8c811',
          700: '#b8820f',
          800: '#a57118',
          900: '#a57118',
        }
      }
    },
  },
  plugins: [],
}
