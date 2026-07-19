/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Définition de Nunito comme police par défaut
        nunito: ['Nunito', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900
          dark: '#020617',    // slate-950
          light: '#1e293b',   // slate-800
        },
        accent: {
          DEFAULT: '#D4AF37',  // Gold
          light: '#FFD700',    // Gold clair
          dark: '#B8960F',     // Gold foncé
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#D4AF37',
          600: '#B8960F',
          700: '#8A700B',
          800: '#5C4A07',
          900: '#2E2504',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a, #1e293b, #0f172a)',
      },
      boxShadow: {
        'gold': '0 10px 30px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 20px 50px rgba(212, 175, 55, 0.4)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1s infinite',
        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0px)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(-10px)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'pulse-gold': {
          '0%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' },
          '70%': { boxShadow: '0 0 0 20px rgba(212, 175, 55, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}