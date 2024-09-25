import { Colors } from "../theme/theme.types";
import { MaterialDesignThemeBuilderJSON } from "../types/material-design";

export const generateThemeFromMaterialThemeBuilder = (
  input: MaterialDesignThemeBuilderJSON,
) => {
  const { schemes } = input;
  const { light, dark } = schemes;
  return {
    primary: {
      DEFAULT: light.primary,
      container: light.primaryContainer,
      text: light.onPrimary,
      "container-text": light.onPrimaryContainer,
      "dark-DEFAULT": dark.primary,
      "dark-container": dark.primaryContainer,
      "dark-text": dark.onPrimary,
      "dark-container-text": dark.onPrimaryContainer,
    },
    secondary: {
      DEFAULT: light.secondary,
      container: light.secondaryContainer,
      text: light.onSecondary,
      "container-text": light.onSecondaryContainer,
      "dark-DEFAULT": dark.secondary,
      "dark-container": dark.secondaryContainer,
      "dark-text": dark.onSecondary,
      "dark-container-text": dark.onSecondaryContainer,
    },
    outline: {
      DEFAULT: light.outline,
      variant: light.outlineVariant,
      dark: light.outline,
      "dark-variant": light.outlineVariant,
    },
    surface: {
      DEFAULT: light.surface,
      text: light.onSurface,
      variant: light.surfaceVariant,
      "text-variant": light.onSurfaceVariant,
      dim: light.surfaceDim,
      bright: light.surfaceBright,
      "container-lowest": light.surfaceContainerLowest,
      "container-low": light.surfaceContainerLow,
      container: light.surfaceContainer,
      "container-high": light.surfaceContainerHigh,
      "container-highest": light.surfaceContainerHighest,
      scrim: light.scrim,
      inverse: light.inverseSurface,
      "inverse-text": light.inverseOnSurface,
      "inverse-primary": light.inversePrimary,
      "dark-DEFAULT": dark.surface,
      "dark-text": dark.onSurface,
      "dark-variant": dark.surfaceVariant,
      "dark-text-variant": dark.onSurfaceVariant,
      "dark-dim": dark.surfaceDim,
      "dark-bright": dark.surfaceBright,
      "dark-container-lowest": dark.surfaceContainerLowest,
      "dark-container-low": dark.surfaceContainerLow,
      "dark-container": dark.surfaceContainer,
      "dark-container-high": dark.surfaceContainerHigh,
      "dark-container-highest": dark.surfaceContainerHighest,
      "dark-scrim": dark.scrim,
      "dark-inverse": dark.inverseSurface,
      "dark-inverse-text": dark.inverseOnSurface,
      "dark-inverse-primary": dark.inversePrimary,
    },
    error: {
      DEFAULT: light.error,
      text: light.onError,
      container: light.errorContainer,
      "container-text": light.onErrorContainer,
      "dark-DEFAULT": dark.error,
      "dark-text": dark.onError,
      "dark-container": dark.errorContainer,
      "dark-container-text": dark.onErrorContainer,
    },
  } as Colors;
};
