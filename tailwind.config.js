const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: colors.white,
      black: colors.black,
      purple: colors.fuchsia,
      blue: colors.blue,
    },
    boxShadow: {
      artcard: '0 2px 8px rgba(0, 0, 0, .1)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      placeholder: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    gridTemplateColumns: {
      artgrid: 'repeat(auto-fill, 220px)',
      artgridMd: 'repeat(auto-fill, 330px)',
      artgridLg: 'repeat(auto-fill, 400px)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
