import {
  ThemeColors,
  ThemeCoreColor,
  ThemeOutlineColor,
  ThemeSurfaceColor,
} from "../types";

export const mapColorsToCssVariables = (colors = {}, parentKey = "") => {
  const output = {} as Record<string, unknown>;

  for (const [key, value] of Object.entries(colors)) {
    let newKey = key;
    if (key === "DEFAULT") {
      newKey = parentKey;
    } else {
      newKey = parentKey ? `${parentKey}-${key}` : key;
    }

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Recursively handle nested objects
      output[key] = mapColorsToCssVariables(value, newKey);
    } else {
      // Convert the value to a CSS variable format
      output[key] = `rgb(var(--aui-${newKey}))`;
    }
  }

  return output;
};

export const transformColorsToCssVariables = (input = {}, parentKey = "") => {
  let cssVariables = {};

  for (const [key, value] of Object.entries(input)) {
    let newKey = key;
    if (key === "DEFAULT") {
      newKey = parentKey;
    } else {
      newKey = parentKey ? `${parentKey}-${key}` : key;
    }

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Recursively handle nested objects
      cssVariables = {
        ...cssVariables,
        ...transformColorsToCssVariables(value, newKey),
      };
    } else {
      // Convert hex color to RGB
      const rgb = hexToRgb(value as string);
      if (rgb) {
        cssVariables = {
          ...cssVariables,
          [`--aui-${newKey}`]: rgb,
        };
      }
    }
  }

  return cssVariables;
};

function hexToRgb(hex: string) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the hex string
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r} ${g} ${b}`;
}

export const extendColors = (
  defaultColors: ThemeColors,
  newThemeColors: ThemeColors,
) => {
  const primaryCoreColors = extendCoreColors(
    defaultColors.primary,
    newThemeColors?.primary,
  );

  const secondaryCoreColors = extendCoreColors(
    defaultColors.secondary,
    newThemeColors?.secondary,
  );

  const infoCoreColors = extendCoreColors(
    defaultColors.info,
    newThemeColors?.info,
  );

  const successCoreColors = extendCoreColors(
    defaultColors.success,
    newThemeColors?.success,
  );

  const warningCoreColors = extendCoreColors(
    defaultColors.warning,
    newThemeColors?.warning,
  );

  const errorCoreColors = extendCoreColors(
    defaultColors.error,
    newThemeColors?.error,
  );

  const surfaceColors = extendSurfaceColors(
    defaultColors?.surface,
    newThemeColors?.surface,
  );

  const outlinedColors = extendOutlinedColors(
    defaultColors?.outline,
    newThemeColors?.outline,
  );

  return {
    ...defaultColors,
    ...newThemeColors,
    primary: primaryCoreColors,
    secondary: secondaryCoreColors,
    info: infoCoreColors,
    success: successCoreColors,
    warning: warningCoreColors,
    error: errorCoreColors,
    outline: outlinedColors,
    surface: surfaceColors,
    gray: {
      ...defaultColors.gray,
      ...newThemeColors.gray,
    },
    white: newThemeColors.white || defaultColors.white,
  } as ThemeColors;
};

const extendCoreColors = (
  defaultColors?: ThemeCoreColor,
  newThemeColors?: ThemeCoreColor,
) => {
  return {
    DEFAULT: newThemeColors?.DEFAULT || defaultColors?.DEFAULT,
    container: newThemeColors?.container || defaultColors?.container,
    text: newThemeColors?.text || defaultColors?.text,
    "container-text":
      newThemeColors?.["container-text"] || defaultColors?.["container-text"],
    "dark-DEFAULT":
      newThemeColors?.["dark-DEFAULT"] || defaultColors?.["dark-DEFAULT"],
    "dark-container":
      newThemeColors?.["dark-container"] || defaultColors?.["dark-container"],
    "dark-text": newThemeColors?.["dark-text"] || defaultColors?.["dark-text"],
    "dark-container-text":
      newThemeColors?.["dark-container-text"] ||
      defaultColors?.["dark-container-text"],
  } as ThemeCoreColor;
};

const extendSurfaceColors = (
  defaultColors?: ThemeSurfaceColor,
  newThemeColors?: ThemeSurfaceColor,
) => {
  return {
    scrim: newThemeColors?.scrim || defaultColors?.scrim,
    inverse: newThemeColors?.inverse || defaultColors?.inverse,
    "inverse-text":
      newThemeColors?.["inverse-text"] || defaultColors?.["inverse-text"],
    "inverse-primary":
      newThemeColors?.["inverse-primary"] || defaultColors?.["inverse-primary"],
    "dark-inverse":
      newThemeColors?.["dark-inverse"] || defaultColors?.["dark-inverse"],
    "dark-inverse-text":
      newThemeColors?.["dark-inverse-text"] ||
      defaultColors?.["dark-inverse-text"],
    "dark-inverse-primary":
      newThemeColors?.["dark-inverse-primary"] ||
      defaultColors?.["dark-inverse-primary"],
    dim: newThemeColors?.dim || defaultColors?.dim,
    DEFAULT: newThemeColors?.DEFAULT || defaultColors?.DEFAULT,
    bright: newThemeColors?.bright || defaultColors?.bright,
    text: newThemeColors?.text || defaultColors?.text,
    variant: newThemeColors?.variant || defaultColors?.variant,
    "text-variant":
      newThemeColors?.["text-variant"] || defaultColors?.["text-variant"],
    "container-lowest":
      newThemeColors?.["container-lowest"] ||
      defaultColors?.["container-lowest"],
    "container-low":
      newThemeColors?.["container-low"] || defaultColors?.["container-low"],
    container: newThemeColors?.container || defaultColors?.container,
    "container-high":
      newThemeColors?.["container-high"] || defaultColors?.["container-high"],
    "container-highest":
      newThemeColors?.["container-highest"] ||
      defaultColors?.["container-highest"],
    disabled: newThemeColors?.disabled || defaultColors?.disabled,
    "dark-scrim":
      newThemeColors?.["dark-scrim"] || defaultColors?.["dark-scrim"],
    "dark-dim": newThemeColors?.["dark-dim"] || defaultColors?.["dark-dim"],
    "dark-DEFAULT":
      newThemeColors?.["dark-DEFAULT"] || defaultColors?.["dark-DEFAULT"],
    "dark-bright":
      newThemeColors?.["dark-bright"] || defaultColors?.["dark-bright"],
    "dark-container-lowest":
      newThemeColors?.["dark-container-lowest"] ||
      defaultColors?.["dark-container-lowest"],
    "dark-container-low":
      newThemeColors?.["dark-container-low"] ||
      defaultColors?.["dark-container-low"],
    "dark-container":
      newThemeColors?.["dark-container"] || defaultColors?.["dark-container"],
    "dark-container-high":
      newThemeColors?.["dark-container-high"] ||
      defaultColors?.["dark-container-high"],
    "dark-container-highest":
      newThemeColors?.["dark-container-highest"] ||
      defaultColors?.["dark-container-highest"],
    "dark-text": newThemeColors?.["dark-text"] || defaultColors?.["dark-text"],
    "dark-variant":
      newThemeColors?.["dark-variant"] || defaultColors?.["dark-variant"],
    "dark-text-variant":
      newThemeColors?.["dark-text-variant"] ||
      defaultColors?.["dark-text-variant"],
  };
};

export const extendOutlinedColors = (
  defaultColors?: ThemeOutlineColor,
  newThemeColors?: ThemeOutlineColor,
) => {
  return {
    DEFAULT: newThemeColors?.DEFAULT || defaultColors?.DEFAULT,
    variant: newThemeColors?.variant || defaultColors?.variant,
    dark: newThemeColors?.dark || defaultColors?.dark,
    "dark-variant":
      newThemeColors?.["dark-variant"] || defaultColors?.["dark-variant"],
  };
};
