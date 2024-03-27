/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '8rem',
      }
    },
    extend: {
      colors:{
        black: "#010C1B",
        white: "#FFFFFF",

        red: "#FD0944",
        "dark-red": "#B30760",

        blue: "#00A5FF",
        "dark-blue": "#003880",

        yellow: "#FCD148",
        "dark-yellow": "#FF2d05",

        green: "#34E0AD",
        "dark-green": "#0151A1",
      }
    },
  },
  plugins: [],
}

