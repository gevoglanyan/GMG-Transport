/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "rotate-45",
    "-rotate-45",
    "translate-y-2",
    "-translate-y-2",
    "opacity-0",
    "block",
    "hidden",
    "h-0.5",
    "bg-current",
    "transition-all",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(-55%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
