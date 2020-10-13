module.exports = {
  experimental: {
    applyComplexClasses: true,
    darkModeVariant: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screen: {
        'xs': '320px'
      },
      colors: {
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
