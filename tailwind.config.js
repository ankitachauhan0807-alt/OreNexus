export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif']
      },
      colors: {
        blue:{
          50: '#DFDDD0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          50: '#F3E8FF',
          100: '#E9D5FF',
          300: '#5724FF',
          500: '#8B5CF6',
          700: '#6D28D9',
          900: '#3B0764',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66',
          400: '#FACC15',
          500: '#EAB308',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        ore: {
          dark: '#07090E',
          card: '#0D111A',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: '#A855F7',
          copper: '#F97316',
          radar: '#06D6A0',
        }
      }
    },
  },
  plugins: [],
}

