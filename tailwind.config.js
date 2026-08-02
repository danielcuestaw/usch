/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        usc: {
          blue: '#002f6c',
          red: '#c4161c',
          darkBlue: '#001a3d',
          lightRed: '#e31c23'
        }
      }
    }
  },
  plugins: [],
}