import type { Config } from "tailwindcss";
import tailwindPlugin from "tailwindcss/plugin";
import { MaterialTailwindUiThemePlugin } from "@andore-ui/theme-plugin";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@andore-ui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    MaterialTailwindUiThemePlugin,
    tailwindPlugin(function ({ addBase, theme }) {
      const colors = theme('colors');
      const colorVariables = {};

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        if (typeof colorValue === 'string') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
          colorVariables[`--tw-bg-${colorName}`] = colorValue;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
          colorVariables[`--tw-text-${colorName}`] = colorValue;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
          colorVariables[`--tw-border-${colorName}`] = colorValue;
        } else if (typeof colorValue === 'object') {
          Object.entries(colorValue).forEach(([shade, shadeValue]) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            colorVariables[`--tw-bg-${colorName}-${shade}`] = shadeValue;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            colorVariables[`--tw-text-${colorName}-${shade}`] = shadeValue;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            colorVariables[`--tw-border-${colorName}-${shade}`] = shadeValue;
          });
        }
      });

      addBase({
        ':root': colorVariables,
      });
    }),
  ],
};
export default config;
