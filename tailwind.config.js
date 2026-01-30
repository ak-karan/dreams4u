/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderSpin: {
          "0%": { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
      },
      animation: {
        borderSpin: "borderSpin 4s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
