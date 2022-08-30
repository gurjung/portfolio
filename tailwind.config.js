/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ecf0f3',
        'secondary': '#5651e5',
        'tertiary': '#1f2937',
      }
    },
  },
  plugins: [],
};
