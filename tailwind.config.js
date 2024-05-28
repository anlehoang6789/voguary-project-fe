/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './path/to/custom-tailwind.css'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        оnух: 'hsl(0, 0%, 25%)',
        azure: 'hsl(219, 77%, 60%)',
        white: 'hsl(0, 0%, 100%)',
        platinum: 'hsl(0, 0%, 91%)',
        gainsboro: 'hsl(0, 0%, 90%)',
        redSalsa: 'hsl(0, 77%, 60%)',
        dimGray: 'hsl(0, 0%, 39%)',
        davysGray: 'hsl(0, 0%, 30%)',
        spanishGray: 'hsl(0, 0%, 62%)',
        quickSilver: 'hsl(0, 0%, 64%)',
        gold: '#FFC107'
      }
    }
  },
  plugins: []
};
