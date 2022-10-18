const { teal } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enable: true,
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.ts'],
  },
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora'],
      },
      colors: {
        'ab-primary': '#893947',
        'ab-gray': '#893947',
      },
      opacity: {
        85: '0.85',
      },
      boxShadow: {
        ab: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        'ab-lg': 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
      },
      borderRadius: {
        4: '4%',
      },
    },
  },
  variants: {},
  plugins: [],
}
