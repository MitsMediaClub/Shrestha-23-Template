/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#02E5FF",
        blue: "#02E5FF",
        sphere: "#0BDBFE",
      },
      screens: { sm: { max: "576px" } },
      inset: {
        circlebottom: "-75%",
        locasep: "4.5rem",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
