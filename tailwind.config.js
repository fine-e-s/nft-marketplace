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
      },
      screens: {
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
