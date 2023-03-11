/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#02E5FF",
        blue: "#53BCDF",
        sphere: "#0BDBFE",
      },
      screens: { sm: { max: "576px" } },
    },
  },
  plugins: [],
};
