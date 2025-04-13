/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // Bright blue
        secondary: '#0EA5E9', // Sky blue
        accent: '#F97316', // Warm orange
        background: '#F8FAFC'
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif']
      }
    },
  },
  plugins: [],
}
