/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./components/layout/**/*.{html,js,jsx}",
    "./HOC/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "blue900": "#173046",
      "white":"#fff",
      "gray900":"#5D6F7E",
      "white200":"#F8F8F8"
    },
  },
  plugins: [],
};
