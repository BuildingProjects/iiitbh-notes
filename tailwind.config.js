/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUltilities = {
        ".constom-scroll": {
          scrollbarWidth: "thin",
          scrollbarColor: "white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#3730a3",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#6366F1",
            borderRadius: "20px",
            border: "none",
          },
        },
      };
      addUtilities(newUltilities, ["responsive", "hover"]);
    },
    require("tailwind-scrollbar-hide"),
  ],
};
