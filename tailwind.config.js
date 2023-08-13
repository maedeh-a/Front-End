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
      "blue800":"#005BEA",
      "white":"#fff",
      "gray900":"#5D6F7E",
      "gray800":"#9DADBA",
      "white200": "#F8F8F8",
      "red":"#FF3E3E",
      "gray700":"#EAEEF3",
      "sky":"#FAFCFF",
    },
  },
  plugins: [],
};
