/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'var(--color-primary)'
        },
        light: {
          500: 'var(--color-light)'
        },
        secondary: {
          500: 'var(--color-secondary)'
        },
        success: {
          500: 'var(--color-success)'
        },
        'success-light': {
          500: 'var(--color-success-light)'
        }
      },
      maxWidth: {
        "base": '1400px'
      },
      fontSize: {
        '35xl': '2rem',
        '45xl': '2.625rem',
      },
      borderWidth: {
        '1.5': '1.625px',
      }
    },
  },
  plugins: [],
}