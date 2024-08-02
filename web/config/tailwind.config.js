/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E0F6FF',
          100: '#C7EFFF',
          200: '#8FDFFF',
          300: '#52CEFF',
          400: '#1ABEFF',
          500: '#009FE0',
          600: '#0080B3',
          700: '#005F85',
          800: '#00425C',
          900: '#00212E',
          950: '#000F14',
        },
        secondary: {
          50: '#FEFAFD',
          100: '#FDF1F8',
          200: '#FCE4F0',
          300: '#FAD6E9',
          400: '#F8C8E1',
          500: '#F7BCDA',
          600: '#EE6DB0',
          700: '#E42085',
          800: '#9B1259',
          900: '#4D092C',
          950: '#290518',
        },
      },
    },
  },
  plugins: [],
}
