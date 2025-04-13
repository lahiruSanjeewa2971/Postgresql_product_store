import daisyui from "daisyui";
import themes from "daisyui/theme/object";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "pastel",
      "retro",
      "coffee",
      "forest",
      "syberpunk",
      "luxury",
      "autumn",
      "valentine",
      "aqua",
      "business",
      "night",
      "dracular",
    ],
  },
};
