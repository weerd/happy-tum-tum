const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      fuchsia: '#ff00ff', // @TEMP!

      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: {
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },

      blue: colors.blue,
      cream: {
        100: '#fffefe',
        200: '#fdf9f7',
        300: '#fbf4f0',
        400: '#f9eeea',
        500: '#f7e9e3',
        600: '#bcb1ad',
        700: '#807976',
        800: '#454140',
        900: '#0a0909',
      },
      green: {
        100: '#f6fbfb',
        200: '#c1e5e1',
        300: '#8dcfc7',
        400: '#58b9ad',
        500: '#23a393',
        600: '#1b7c70',
        700: '#12554c',
        800: '#0a2e29',
        900: '#010706',
      },
      indigo: colors.indigo,
      pink: colors.pink,
      red: {
        100: '#fef7f8',
        200: '#f7c9d1',
        300: '#f19ba9',
        400: '#ea6d82',
        500: '#e43f5a',
        600: '#ad3044',
        700: '#77212f',
        800: '#401219',
        900: '#090304',
      },
    },
    extend: {},
  },
  plugins: [],
};
