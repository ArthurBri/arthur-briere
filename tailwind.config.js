const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enable: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.ts'
    ]
  },
  theme: {
    extend: {
      screen: {
        'xs': '320px'
      },
      colors: {
        teal: colors.teal,
        'ab-primary': colors.teal["800"],
        'ab-gray': '#233140'
      },
      opacity: {
        '85': '0.85'
      },
      borderWidth: {
        '6': '6px'
      }
    }
  },
  variants: {},
  plugins: [],
}
