/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      'bungee-spice': ['Bungee Spice', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'outfit': ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

