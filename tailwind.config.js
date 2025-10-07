/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Optional: add subtle shadows that look good in both modes
      boxShadow: {
        card: '0 6px 24px rgba(2, 6, 23, 0.08)',
        cardDark: '0 6px 28px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
