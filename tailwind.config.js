/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1196F5',
        'secondary': '#EBF1F4',
        'tertiary': '#2C2D30'
      },
      fontFamily: {
        'sans': 'Ubuntu',
      },
      minHeight: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}

