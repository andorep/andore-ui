export interface MaterialDesignThemeBuilderJSON {
  description: string;
  seed: string;
  coreColors: MaterialDesignCoreColors;
  extendedColors: MaterialDesignExtendedColor[];
  schemes: MaterialDesignSchemes;
  palettes: MaterialDesignPalettes;
}

export interface MaterialDesignCoreColors {
  primary: string;
}

export interface MaterialDesignExtendedColor {
  name: string;
  color: string;
  description: string;
  harmonized: boolean;
}

export interface MaterialDesignPalettes {
  primary: { [key: string]: string };
  secondary: { [key: string]: string };
  tertiary: { [key: string]: string };
  neutral: { [key: string]: string };
  "neutral-variant": { [key: string]: string };
}

export interface MaterialDesignSchemes {
  light: MaterialDesignTheme;
  "light-medium-contrast": MaterialDesignTheme;
  "light-high-contrast": MaterialDesignTheme;
  dark: MaterialDesignTheme;
  "dark-medium-contrast": MaterialDesignTheme;
  "dark-high-contrast": MaterialDesignTheme;
}

export interface MaterialDesignTheme {
  primary: string;
  surfaceTint: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  primaryFixed: string;
  onPrimaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixedVariant: string;
  secondaryFixed: string;
  onSecondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixedVariant: string;
  tertiaryFixed: string;
  onTertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixedVariant: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
}
