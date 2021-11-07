const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
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
      fontFamily: {
        sora: ['Sora']
      },
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
      },
      boxShadow: {
        ab: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        'ab-lg': 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px'
      }
    }
  },
  variants: {},
  plugins: [],
}
