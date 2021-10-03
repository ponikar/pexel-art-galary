const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      "header-background": "#232a34",
      primary: "#05a081",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
