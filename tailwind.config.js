const colors = require('tailwindcss/colors')



module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.trueGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.rose,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
        
      },
    },
    keyframes: {

      levitate: {
        '0%, 100%': { transform: 'translateY(15px)' },

        '50%': { transform: 'translateY(-15px)' },

      },

      blob: {
        '0%, 100%': {transform: 'translate(0px, 0px) scale(1)'},
        '33%': {transform: 'translate(20px, -20px) scale(1.1)'},
        '66%': {transform: ' translate(-20px, 20px)scale(0.9)'},
          

      }
    },

    animation: {
      levitate: 'levitate 6s ease-in-out infinite',
      blob: 'blob 10s ease-in-out infinite'
     },
    
    
  },
  variants: {
    extend: {
      // variable : [selector]
      
      scale: ['group-hover'],
      translate: ['group-hover'],
      blur: ['dark'],
      opacity: ['dark'],
    },
  
  },
  plugins: [],
}


