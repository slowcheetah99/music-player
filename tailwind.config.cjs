/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDE8E9",
        secondary: "#3C4449",
        accent: "#5928E5",
        blur: "rgba(0, 0, 0, 0.25)",
        blur2: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
