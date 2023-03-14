/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ['"Space Mono"', "monospace"],
    },
    extend: {
      screens: {
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
