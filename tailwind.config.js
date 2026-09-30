/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm390': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          50: '#edf9ff',
          100: '#d7f2ff',
          200: '#b7e8ff',
          300: '#84daff',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0084ff',
          700: '#006ed6',
          800: '#005bb3',
          900: '#064b8f',
          950: '#052f5e',
          glow: '#00a6ff',
        },
        dark: {
          950: '#030712',
          900: '#080c15',
          850: '#0c121e',
          800: '#111827',
          750: '#151e32',
          700: '#1f2937',
          600: '#374151',
          500: '#4b5563',
          400: '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 132, 255, 0.15)',
        'glow-md': '0 0 25px rgba(0, 132, 255, 0.25)',
        'glow-lg': '0 0 40px rgba(0, 132, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
