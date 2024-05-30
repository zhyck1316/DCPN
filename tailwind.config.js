/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'dcpn': '#393737',
      },
      backgroundImage: {
        'homebg1': "url('./public/img/bg/home_bg.png')",
        'servicebg1': "url('./public/img/bg/original.png')",
      },
      fontFamily: {
        'inter': ['ui-sans-serif'],
      }
    },
  },
  plugins: [],
}