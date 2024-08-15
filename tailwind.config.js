/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#800000',
        primaryYellow: '#F2E8C6',
        
        },
        height: {
          '700': '700px',
          '128': '32rem',
        }
    },
  },
  plugins: [],
}