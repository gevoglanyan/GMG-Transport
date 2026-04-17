module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0E27',
          light: '#1a2332',
          mid: '#162040',
        },
        accent: {
          DEFAULT: '#D4AF37',
          hover: '#c19b2f',
          light: '#f0d97a',
        },
        bg: {
          DEFAULT: '#FAFBFC',
        },
        success: '#059669',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgb(212 175 55 / 0.35)',
      },
      animation: {
        'fade-in': 'fadeInUp 0.55s ease-out both',
        'slide-in': 'slideIn 0.5s ease-out both',
        'fade':    'fadeIn 0.4s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'animate-fade-in',
    'animate-slide-in',
    'animate-fade',
  ],
}