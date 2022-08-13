/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '320px', //mobile
      'xs': '426px', //mobile larga
      'mdp': '800px', //tablet large
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
