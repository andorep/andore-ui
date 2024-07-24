import {MaterialTailwindUiThemePlugin} from "@material-tailwind-ui/theme-plugin";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["../packages/**/*.{js,ts,jsx,tsx}"],
  plugins: [MaterialTailwindUiThemePlugin],
};
