/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './path/to/custom-tailwind.css'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  plugins: []
};
