import type { Config } from "tailwindcss";
import { andoreui } from "@andore-ui/theme";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@andore-ui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    andoreui({
      enabledCssVariables: true,
    })
  ],
};
export default config;
