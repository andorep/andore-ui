import {
  argbFromHex,
  hexFromArgb,
  Theme,
  themeFromSourceColor,
  TonalPalette,
} from "@material/material-color-utilities";

export const generateColorFromSeed = (seed: string) => {
  // Get the theme from a hex color
  const theme = themeFromSourceColor(argbFromHex(seed));
  return theme as Theme;
};




export const generateColorScheme = (seed: string) => {
  const theme = generateColorFromSeed(seed);
  const primary = generatePrimaryColors(theme.palettes.primary);
  const secondary = generatePrimaryColors(theme.palettes.secondary);
  const error = generatePrimaryColors(theme.palettes.error);
  const success = generatePrimaryColors(theme.palettes.tertiary);
  const warning = generatePrimaryColors(theme.palettes.tertiary);
  const info = generatePrimaryColors(theme.palettes.tertiary);
  const surface = generateSurfaceColors(theme.palettes);
  const outline = generateOutlineColors(theme.palettes);
  return {
    primary,
    secondary,
    error,
    surface,
    success,
    warning,
    info,
    outline,
  };
};

const generatePrimaryColors = (tonal: TonalPalette) => {
  return {
    DEFAULT: hexFromArgb(tonal.getHct(40).toInt()),
    text: hexFromArgb(tonal.getHct(100).toInt()),
    container: hexFromArgb(tonal.getHct(90).toInt()),
    "container-text": hexFromArgb(tonal.getHct(10).toInt()),
    "dark-DEFAULT": hexFromArgb(tonal.getHct(80).toInt()),
    "dark-text": hexFromArgb(tonal.getHct(20).toInt()),
    "dark-container": hexFromArgb(tonal.getHct(30).toInt()),
    "dark-container-text": hexFromArgb(tonal.getHct(90).toInt()),
  };
};

const generateSurfaceColors = (palettes: Theme["palettes"]) => {
  return {
    DEFAULT: hexFromArgb(palettes.neutral.getHct(98).toInt()),
    text: hexFromArgb(palettes.neutral.getHct(10).toInt()),
    variant: hexFromArgb(palettes.neutralVariant.getHct(90).toInt()),
    "text-variant": hexFromArgb(palettes.neutralVariant.getHct(30).toInt()),
    dim: hexFromArgb(palettes.neutral.getHct(87).toInt()),
    bright: hexFromArgb(palettes.neutral.getHct(98).toInt()),
    "container-lowest": hexFromArgb(palettes.neutral.getHct(100).toInt()),
    "container-low": hexFromArgb(palettes.neutral.getHct(96).toInt()),
    container: hexFromArgb(palettes.neutral.getHct(94).toInt()),
    "container-high": hexFromArgb(palettes.neutral.getHct(92).toInt()),
    "container-highest": hexFromArgb(palettes.neutral.getHct(90).toInt()),
    scrim: hexFromArgb(palettes.neutral.getHct(0).toInt()),
    inverse: hexFromArgb(palettes.neutral.getHct(20).toInt()),
    "inverse-text": hexFromArgb(palettes.neutral.getHct(95).toInt()),
    "inverse-primary": hexFromArgb(palettes.primary.getHct(80).toInt()),
    "dark-DEFAULT": hexFromArgb(palettes.neutral.getHct(6).toInt()),
    "dark-text": hexFromArgb(palettes.neutral.getHct(90).toInt()),
    "dark-variant": hexFromArgb(palettes.neutralVariant.getHct(30).toInt()),
    "dark-text-variant": hexFromArgb(
      palettes.neutralVariant.getHct(90).toInt(),
    ),
    "dark-dim": hexFromArgb(palettes.neutral.getHct(6).toInt()),
    "dark-bright": hexFromArgb(palettes.neutral.getHct(24).toInt()),
    "dark-container-lowest": hexFromArgb(palettes.neutral.getHct(4).toInt()),
    "dark-container-low": hexFromArgb(palettes.neutral.getHct(10).toInt()),
    "dark-container": hexFromArgb(palettes.neutral.getHct(12).toInt()),
    "dark-container-high": hexFromArgb(palettes.neutral.getHct(17).toInt()),
    "dark-container-highest": hexFromArgb(palettes.neutral.getHct(24).toInt()),
    "dark-scrim": hexFromArgb(palettes.neutral.getHct(0).toInt()),
    "dark-inverse": hexFromArgb(palettes.neutral.getHct(90).toInt()),
    "dark-inverse-text": hexFromArgb(palettes.neutral.getHct(20).toInt()),
    "dark-inverse-primary": hexFromArgb(palettes.primary.getHct(40).toInt()),
  };
};

const generateOutlineColors = (palettes: Theme["palettes"]) => {
  return {
    DEFAULT: hexFromArgb(palettes.neutralVariant.getHct(50).toInt()),
    variant: hexFromArgb(palettes.neutralVariant.getHct(80).toInt()),
    dark: hexFromArgb(palettes.neutralVariant.getHct(60).toInt()),
    "dark-variant": hexFromArgb(palettes.neutralVariant.getHct(30).toInt()),
  };
};
