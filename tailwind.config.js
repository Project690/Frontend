/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Display"],
        chakra: ["Chakra Petch, serif"],
      },
      colors: {
        primary: '#5a006a', // Example: Blue
        grayy: '#CFCFCF',
        
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}