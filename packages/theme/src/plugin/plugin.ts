// index.js
import tailwindPlugin from "tailwindcss/plugin";
import defaultTheme from "../theme";
import {
  mapColorsToCssVariables,
  transformColorsToCssVariables,
} from "../utils/colors.utils";
import {ThemeType, ThemeColors } from "../types";

interface PluginOptions {
  enabledCssVariables?: boolean;
  theme?:ThemeType;
}

const plugin = (options: PluginOptions = {}) => {
  const { enabledCssVariables = false, theme} = options;


  let colors = defaultTheme.colors;
  if(theme?.colors){
    colors = {
        ...colors,
        ...theme.colors
    }
  }
  let themeColors = colors;
  if (enabledCssVariables) {
    themeColors = mapColorsToCssVariables(colors) as ThemeColors;
  }

  return tailwindPlugin(
    ({ addBase }) => {
      if (enabledCssVariables) {
        const rootColors = transformColorsToCssVariables(colors);
        addBase({
          ":root": rootColors,
        });
      }
    },
    {
      theme: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        extend: {
          ...defaultTheme,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          colors: {
            ...themeColors,
          },
        },
      },
    },
  );
};

export default plugin;
