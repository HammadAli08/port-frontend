/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2C666E',      // Deep Teal
        'secondary': '#F0EDEE',    // Off-White
        'accent': '#61210F',       // Rust
        'rich-black': '#0A0A0A',
        'premium-gold': '#D4AF37',
        'success-emerald': '#046307',
        'error-crimson': '#DC143C',
        'bg-dark': '#0A0A0A',
        'text-light': '#F0EDEE',
        'glass': 'rgba(240, 237, 238, 0.1)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 15s infinite ease-in-out',
        'ripple': 'ripple 0.6s linear',
        'reveal': 'reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'portal-in': 'portal-in 0.5s ease-out forwards',
        'pulse-teal': 'pulse-teal 2s infinite',
        'gradient-hero': 'gradient-hero 8s ease infinite',
        'float-particle': 'float-particle 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translate(100px, -200px) rotate(180deg)', opacity: '0.6' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'portal-in': {
          '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0', filter: 'blur(10px)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1', filter: 'blur(0)' },
        },
        'pulse-teal': {
          '0%, 100%': { transform: 'scale(1)', backgroundColor: 'rgba(44, 102, 110, 0.4)' },
          '50%': { transform: 'scale(1.2)', backgroundColor: 'rgba(44, 102, 110, 0.7)' },
        },
        'gradient-hero': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float-particle': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '25%': { opacity: '0.5' },
          '50%': { transform: 'translate(100px, -100px)', opacity: '0.8' },
          '75%': { opacity: '0.5' },
          '100%': { transform: 'translate(200px, -200px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
