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
        primary: '#1B1B1B',
        secondary: '#393624',
        black: '#000000',
        blackTransparent: '#1b1b1bd2',
        grey: {
          light: '#C2C2C2',
          dark: '#9E9E9E'
        } 
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      width: {
        '120': '120%',
        'screen-10': '10vw',
        'screen-20': '20vw',
        'screen-30': '30vw',
        'screen-40': '40vw',
        'screen-50': '50vw',
        'screen-60': '60vw',
        'screen-70': '70vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
      },
      height : {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
        'screen-150': '150vh'
      },
      maxWidth: {
        '120': '120%'
      },
      minWidth: {
        '15': '15rem',
        '20': '20rem',
        '30': '30rem',
        '40': '40rem',
        '50': '50rem',
        '60': '60rem'
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
