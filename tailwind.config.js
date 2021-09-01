module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'spartan': ['Spartan']
      },
      fontSize: {
        'xxxl': '200px'
      },
      colors: {
        black: '#1B1B1B',
        blackTransparent: '#1b1b1bd2',
        grey: {
          light: '#C2C2C2',
          dark: '#9E9E9E'
        } 
      },
      zIndex: {
        '-1': '-1',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      width: {
        '120': '120%'
      },
      maxWidth: {
        '120': '120%'
      },
      top: {
        '4/5': '45%'
      },
      inset: {
        '4/5': '45%'
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropGrayscale: {
        50: '.5',
      },
      grayscale: {
        80: '80%',
      }
    },
  },
  variants: {
    extend: {
      padding: ['group-hover'],
      width: ['hover','group-hover'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
