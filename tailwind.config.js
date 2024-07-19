/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#e0deda',
        secondary:'#000000',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right bottom, #c07725, #aa8913, #8d991a, #66a737, #18b35d)',
      },
      fontFamily: {
        comfortaa: ['Comfortaa','cursive'],
    },
  },},
  plugins: [],
}