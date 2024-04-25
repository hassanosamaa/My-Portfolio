/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        

      },
      fontFamily:{
        font_family: ["Poppins", 'sans_serif'],

      },
      screens:{
        sm:'500px',
        md:'700px',
        lg:'900px',
        xl:'1200px',
        '2xl':'1400px'
      }
    },
  },
  plugins: [],
  darkMode:'class',
}

