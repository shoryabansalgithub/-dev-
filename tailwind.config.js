/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // React/JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: '#0ea5e9',
        secondary: '#64748b',
        accent: '#f472b6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
