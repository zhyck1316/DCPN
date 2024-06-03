/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{html,js}'],
  theme: {
    extend: {
      spacing:{
        '1/10': '10%',
      },
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