/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ['"Space Mono"', "monospace"],
    },
    extend: {
      colors: {
        darker: "#2b2b2b",
        lighter: "#3b3b3b",
        light: "#4b4b4b",
      },
      screens: {
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
