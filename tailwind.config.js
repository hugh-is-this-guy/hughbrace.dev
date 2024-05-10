const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    "-rotate-6",
    "-rotate-5",
    "-rotate-4",
    "-rotate-3",
    "-rotate-2",
    "-rotate-1",
    "rotate-1",
    "rotate-2",
    "rotate-3",
    "rotate-4",
    "rotate-5",
    "rotate-6",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '12rem',
        xl: '14rem',
      }
    },
    extend: {
      colors:{
        black: "#010C1B",
        white: "#FFFFFF",

        red: "#F10A4A",
        "dark-red": "#6A052C",

        yellow: "#FCD148",
        "dark-yellow": "#FF2d05",

        blue: "#00A5FF",
        "dark-blue": "#003880",

        green: "#34E0AD",
        "dark-green": "#0151A1",
      },
      fontFamily: {
        'sans': ['Nunito Sans', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

