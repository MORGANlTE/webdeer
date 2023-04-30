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
        'blu2': "#2191DD",
        'background': "#161d2e"
      },
      keyframes:{
        loading:{
          '0%, 100%': {
            boxShadow: 'inset 0 0 3px 1px rgba(117,182,255,0.4),0 0 3px rgba(117,182,255,0.1)'
          },
          '50%': {
            boxShadow: 'inset 0 0 3px 1px rgba(117,182,255,0.5),0 0 3px rgba(117,182,255,1)'
          }
        }
      },
      animation: {
        loading: 'loading 3s linear infinite',
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

