import type { Config } from "tailwindcss";
import { AndoreUIThemePlugin } from "@andore-ui/theme-plugin";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@andore-ui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    AndoreUIThemePlugin({
      enabledCssVariables: true,
    })
  ],
};
export default config;
