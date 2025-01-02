/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyColor: '#0f172a',
        PrimaryColor: '#00191b',
        backgroundColor: '#0F172A',
        secondaryColor: '#3f4555',
        'tealLight-1': '#0FA4AF',
        'tealLight-2': '#AFDDE5',
        other: ' #964734',
      },
      gridTemplateColumns: {
        'project': 'repeat(auto-fit , minmax(360px , 1fr))',
      },
      fontFamily: {
        'roboto' : 'Roboto'
      }
    },
  },
  plugins: [],
};
