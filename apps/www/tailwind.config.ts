import type { Config } from "tailwindcss";
import { andoreui } from "@andore-ui/theme";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mdx-components.tsx",
    "./node_modules/@andore-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floatingElement: "3s ease-in-out infinite floatingElement",
      },
      keyframes: {
        floatingElement: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [
    andoreui({
      enabledCssVariables: true,
    }),
  ],
};
export default config;
