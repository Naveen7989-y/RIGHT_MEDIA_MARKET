/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#73C8D2',
        surface: '#F5F1DC',
        surfaceGlass: '#73C8D233',
        primary: {
          50: '#EDF4FF',
          100: '#D6E8FF',
          200: '#AED1FF',
          300: '#86B9FF',
          400: '#5EA2FF',
          500: '#0046FF',
          600: '#003DD8',
          700: '#0035B2',
          800: '#002C8C',
          900: '#002466',
        },
        accent: {
          50: '#FFF7EB',
          100: '#FFE4BD',
          200: '#FFD08F',
          300: '#FFBB61',
          400: '#FFA633',
          500: '#FF9013',
          600: '#E57F11',
          700: '#C66D0F',
          800: '#A75C0D',
          900: '#884A0B',
        },
        heading: {
          500: '#73C8D2',
          600: '#3A8AA0',
          700: '#004369',
        },
        darkPastel: {
          400: '#A5DBE2',
          500: '#73C8D2',
          600: '#4098A9',
        },
        neutral: {
          50: '#F6F9FB',
          100: '#EDF2F6',
          200: '#D9E2EC',
          300: '#B6CBD9',
          400: '#829AAF',
          500: '#5A7184',
          600: '#3E5160',
          700: '#2C3843',
          800: '#1C252C',
          900: '#0E1216',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'carousel': 'carousel 25s linear infinite',
        'carousel-fast': 'carousel 18s linear infinite',
        'carousel-slow': 'carousel 35s linear infinite',
        'gradient-move': 'gradientMove 12s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.94)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}