/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Activer le mode sombre
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Custom colors if needed, but starting with basics
      },
    },
  },
  plugins: [],
}

