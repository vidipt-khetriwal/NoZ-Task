/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "5/100": "5%",
        "1/10": "10%",
        "15/100": "15%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
      },
      colors: {
        teal: "#94c7bf",
      },
      fontFamily: {
        dyana: ["DyanaPuff", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
