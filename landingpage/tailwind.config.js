module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      display: ['group-hover'],
      screens: {
        '3xl': '2160px',
      },
      transitionProperty: {
        width: 'width',
      },
      fontSize: {
        min: '8px',
        tiny: '14px',
      },
      colors: {
        primary: '#146f9d',
        secondary: '#ffffff',
        morange: {
          100: '#f8e0d9',
          200: '#f1c0b4',
          300: '#eaa18e',
          400: '#e38169',
          500: '#dc6243',
          600: '#b04e36',
          700: '#843b28',
          800: '#58271b',
          900: '#2c140d',
        },
        bblue: {
          50: '#DCE9F0',
          100: '#d0e2eb',
          200: '#a1c5d8',
          300: '#72a9c4',
          350: '#5B9ABA',
          400: '#438cb1',
          440: '#3667A7',
          450: '#36517F',
          500: '#146f9d',
          600: '#10597e',
          700: '#0c435e',
          800: '#082c3f',
          900: '#04161f',
        },
      },
    },
  },
  plugins: [],
};
