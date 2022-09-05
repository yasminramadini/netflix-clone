/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    color: {
      transparent: "transparent",
      'black': '#000'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
