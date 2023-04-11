/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "4/10": "40%",
        "6/10": "60%",
      },
      colors: {
        teal: "#94c7bf",
      },
      fontFamily: {
        dyana: ["DyanaPuff", "cursive"],
      },
    },
  },
  plugins: [],
};
