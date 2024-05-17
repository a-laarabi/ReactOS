/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sanfranciscoLight: ['sanfranciscoLight'],
        sanfranciscoRegular: ['sanfranciscoRegular'],
        sanfranciscoMedium: ['sanfranciscoMedium'],
        sanfranciscoBold: ['sanfranciscoBold']
      }
    },
  },
  plugins: [],
}

