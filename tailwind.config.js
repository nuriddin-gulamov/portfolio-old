/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#f7f9fc",
        gray200: "#d0d0d0",
        gray300: "#949597",
        gray400: "#727272",
        "dark-gray": "#323232",
        black: "#0f0f0f",
        primary: "#3d5ce3",
      },
      container: { center: true },
      padding: {
        box: "20px",
        20: "20px",
        50: "50px",
      },
      margin: {
        20: "20px",
        25: "25px",
        35: "35px",
        50: "50px",
      },
      width: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
