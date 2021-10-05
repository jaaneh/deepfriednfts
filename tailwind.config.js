module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'df-yellow': '#fcd34d',
        'df-secondary': '#20134e',
        'df-divider': '#2c384c',
        'df-blue': '#4e44ce',
        'df-one': '#010101',
        'df-two': '#151523'
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(3px)'
          }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.400'),
            maxWidth: 'none',

            a: {
              color: theme('colors.gray.300'),
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            h3: {
              color: theme('colors.gray.100'),
              '&:hover': {
                color: theme('colors.gray.100')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  daisyui: {
    themes: ['synthwave']
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
