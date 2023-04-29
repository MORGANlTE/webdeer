/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbar': "#1a2038",
        'orang': "#E3821D",
        'blu': "#1B3578",
        'blu2': "#2191DD"
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
  variants:{
    extend: {
      filter: ['hover', 'focus'],
    },
  }
}

