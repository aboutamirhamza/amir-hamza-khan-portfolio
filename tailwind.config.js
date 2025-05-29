/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: '"Inter", sans-serif',
      },

      spacing:{
        primary: "1320px",
      },
      
      screens:{
        extrasmall: '320px',
      },

      colors:{
        primary: "1F1F1F",
        secondary: "F2F2F2",
      },

    },
  },
  plugins: [],
}

