module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: true,
  theme: {
    fontSize: {
      '2xs': '0.625rem',
      xs: '0.725rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#ec4755',
        secondary: '#a12c34',
        tertiary: '#99a0a3',
        border: '#1a2e35',
        background: '#ffffff',
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },screens: {
      'xsm': '240px',
      // => @media (min-width: 240px) { ... }

      'sml': '320px',
      // => @media (min-width: 320px) { ... }

      'med': '480px',
      // => @media (min-width: 480px) { ... }

      'note': '640px',
      // => @media (min-width: 540px) { ... }

      'tab': '767px',
      // => @media (min-width: 640px) { ... }

      'lap': '840px',
      // => @media (min-width: 840px) { ... }

      'dsk': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lrg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [],
}
