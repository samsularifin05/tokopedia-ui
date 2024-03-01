/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1100px",
        large: "1400px",
      },
      backgroundColor: {
        color1: "#F0F3F7",
        color2: "#f1f3f7",
        color3: "#E02954",
        color4: "#04A95B",
        color5: "#212121",
      },
      textColor: {
        color1: "#6C7587",
        color2: "#4ca763",
        color3: "#393939",
        color4: "#04A95B",
        color5: "#212121",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        14: "14px",
      },
      fontFamily: {
        "open-sauce-one": ["Open Sauce One", "sans-serif"],
      },
      outlineColor: {
        color1: "#BFC9D8",
        color2: "#04A95B",
      },
      borderColor: {
        color1: "#4ca763",
      },
    },
  },
  plugins: [],
};
