import type { Config } from "tailwindcss";
import {MaterialTailwindUiThemePlugin} from "@material-tailwind-ui/theme-plugin";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind-ui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [MaterialTailwindUiThemePlugin],
};
export default config;
