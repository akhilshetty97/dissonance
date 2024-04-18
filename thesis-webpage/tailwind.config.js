/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    objectPosition: {
    },
    extend: {
      fontFamily:{
        'degular-bold': ['DEGULAR'],
        'degular-medium':['DEGULARMEDIUM'],
        'input-mono':['INPUT'],
        'input-mono-regular':['INPUTREGULAR'],
        'input-mono-bold':['INPUTBOLD']
      }
    },
  },
  plugins: [],
}

