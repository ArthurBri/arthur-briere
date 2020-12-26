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
      './src/**/*.jsx',
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
        'ab-gray': '#2c3e50'
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
