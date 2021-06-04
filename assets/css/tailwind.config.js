const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.blue,
    },
    extend: {
      colors: {
        warmgray: {
          700: '#2f3335',
          800: '#1e2022',
          900: '#181a1b',
        },
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
