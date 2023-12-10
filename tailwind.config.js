/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Lato']
    },
    colors: {
      transparent: 'transparent',
      red: {
        100: '#E67777'
      },
      grey: {
        100: '#E9E7E7'
      },
    },
    screens: {
      'desktop': '1580px',
    },
    extend: {
      gradientColorStopPositions: {
        50: '50%',
      }
    },
  },
  plugins: [],
}

