/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        chakra: ["Chakra Petch, serif"],
      },
      colors: {
        primary: '#41004C', // Example: Blue
        grayy: '#CFCFCF',
        
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}