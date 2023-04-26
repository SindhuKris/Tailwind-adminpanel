/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{html,ts}",
],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: false,
  theme:{
    extend:{
      colors:{
        gray:{
          400: '#969798',
          500: '#666666',
          700: '#353535',
          800: '#262626',
          900: '#171818',
        }
      }
    }
  }
}
