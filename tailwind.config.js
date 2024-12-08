/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        PrimaryColor: '#00191b',
        backgroundColor: '#0f172a',
        secondaryColor: '#3f4555',
        'tealLight-1': '#0FA4AF',
        'tealLight-2': '#AFDDE5',
        other: ' #964734',
      },
    },
  },
  plugins: [],
};
