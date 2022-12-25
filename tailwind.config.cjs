/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D2E",
        primary2: "#1D1F20",
        // primary: "#FDE8E9",
        secondary: "#f3f3f3",
        // secondary: "#3C4449",
        accent: "#FE8281",
        // accent: "#5928E5",
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
