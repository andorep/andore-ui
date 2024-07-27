import { ButtonColor, ButtonVariant } from "./Button.types";
import { twMerge } from "tailwind-merge";

export const ButtonBaseClassName =
  "MTButton-root rounded-full font-medium text-base flex items-center justify-center transition-colorsShadow duration-short3 ease-emphasizedAccelerate";

export const ButtonBasePaddingClassName =
  "py-2.5 px-6 has-[.MTButton-start-icon]:pl-4 has-[.MTButton-end-icon]:pr-4";

export const ButtonBaseSpanPaddingClassName =
  "MTButton-span flex items-center justify-center";

export const ButtonBaseDisabledClassName = twMerge(
  ButtonBaseClassName,
  ButtonBasePaddingClassName,
  "cursor-not-allowed",
);

export const ButtonBaseIconClassName =
  "MTButton-icon w-4 h-4 flex items-center justify-center";

export const ButtonBaseStartIconClassName = twMerge(
  ButtonBaseIconClassName,
  "MTButton-start-icon mr-2",
);

export const ButtonBaseEndIconClassName = twMerge(
  ButtonBaseIconClassName,
  "MTButton-end-icon ml-2",
);

export const ButtonElevatedClassName = twMerge(
  ButtonBaseClassName,
  "MTButton-variant-elevated shadow-sm hover:shadow dark:shadow-dark-sm dark:hover:shadow-dark",
);

export const ButtonElevatedSpanClassName = twMerge(
  ButtonBasePaddingClassName,
  ButtonBaseSpanPaddingClassName,
  // if it has a start or end icon, we need to add padding to the span
  "MTButton-variant-elevated-span rounded-[inherit] w-full h-full flex items-center justify-center",
);

export const ButtonFilledClassName = twMerge(
  ButtonBaseClassName,
  ButtonBasePaddingClassName,
  "MTButton-variant-filled",
);

export const ButtonOutlinedClassName = twMerge(
  ButtonBaseClassName,
  ButtonBasePaddingClassName,
  "MTButton-variant-outlined border border-solid",
);

export const ButtonTextClassName = twMerge(
  ButtonBaseClassName,
  ButtonBasePaddingClassName,
  "MTButton-variant-text px-3 has-[.MTButton-start-icon]:pr-4 has-[.MTButton-end-icon]:pl-4",
);

export const ButtonBaseDisabledClassNameMap: Record<ButtonVariant, string> = {
  elevated: twMerge(
    ButtonBaseDisabledClassName,
    "bg-surface-disabled/10 surface-text-disabled dark:bg-surface-dark-disabled/10 dark:text-surface-dark-text-disabled/35",
  ),
  filled: twMerge(
    ButtonFilledClassName,
    ButtonBaseDisabledClassName,
    "bg-surface-disabled/10 surface-text-disabled dark:bg-surface-dark-disabled/10 dark:text-surface-dark-text-disabled/35",
  ),
  outlined: twMerge(
    ButtonOutlinedClassName,
    ButtonBaseDisabledClassName,
    "border-surface-disabled/10 surface-text-disabled dark:border-surface-dark-disabled/10 dark:text-surface-dark-text-disabled/35",
  ),
  text: twMerge(
    ButtonTextClassName,
    ButtonBaseDisabledClassName,
    "surface-text-disabled dark:text-surface-dark-text-disabled/35",
  ),
};

export const ButtonElevatedClassNameMap: Record<ButtonColor, string> = {
  primary: twMerge(
    ButtonElevatedClassName,
    "group bg-surface-container-lowest text-primary dark:bg-surface-dark-container-lowest dark:text-primary-dark-DEFAULT",
  ),
  secondary: twMerge(
    ButtonElevatedClassName,
    "group bg-surface-container-lowest text-secondary dark:bg-surface-dark-container-lowest dark:text-secondary-dark-DEFAULT",
  ),
  info: twMerge(
    ButtonElevatedClassName,
    "group bg-surface-container-lowest text-info dark:bg-surface-dark-container-lowest dark:text-info-dark-DEFAULT",
  ),
  success: twMerge(
    ButtonElevatedClassName,
    "group bg-surface-container-lowest text-success dark:bg-surface-dark-container-lowest dark:text-success-dark-DEFAULT",
  ),
  warning: twMerge(
    ButtonElevatedClassName,
    "group bg-surface-container-lowest text-warning dark:bg-surface-dark-container-lowest dark:text-warning-dark-DEFAULT",
  ),
  error: twMerge(
    ButtonElevatedClassName,
    "group bg-surface-container-lowest text-error dark:bg-surface-dark-container-lowest dark:text-error-dark-DEFAULT",
  ),
};

export const ButtonElevatedSpanClassNameMap: Record<ButtonColor, string> = {
  primary: twMerge(
    ButtonElevatedSpanClassName,
    "bg-primary/[0.07] group-hover:bg-primary/10  group-active:bg-primary/[0.15] dark:bg-primary-dark-DEFAULT/[0.07] dark:group-hover:bg-primary-dark-DEFAULT/10 dark:group-active:bg-primary-dark-DEFAULT/[0.15]",
  ),
  secondary: twMerge(
    ButtonElevatedSpanClassName,
    "bg-secondary/[0.07] group-hover:bg-secondary/10  group-active:bg-secondary/[0.15] dark:bg-secondary-dark-DEFAULT/[0.07] dark:group-hover:bg-secondary-dark-DEFAULT/10 dark:group-active:bg-secondary-dark-DEFAULT/[0.15]",
  ),
  info: twMerge(
    ButtonElevatedSpanClassName,
    "bg-info/[0.07] group-hover:bg-info/10  group-active:bg-info/[0.15] dark:bg-info-dark-DEFAULT/[0.07] dark:group-hover:bg-info-dark-DEFAULT/10 dark:group-active:bg-info-dark-DEFAULT/[0.15]",
  ),
  success: twMerge(
    ButtonElevatedSpanClassName,
    "bg-success/[0.07] group-hover:bg-success/10  group-active:bg-success/[0.15] dark:bg-success-dark-DEFAULT/[0.07] dark:group-hover:bg-success-dark-DEFAULT/10 dark:group-active:bg-success-dark-DEFAULT/[0.15]",
  ),
  warning: twMerge(
    ButtonElevatedSpanClassName,
    "bg-warning/[0.07] group-hover:bg-warning/10  group-active:bg-warning/[0.15] dark:bg-warning-dark-DEFAULT/[0.07] dark:group-hover:bg-warning-dark-DEFAULT/10 dark:group-active:bg-warning-dark-DEFAULT/[0.15]",
  ),
  error: twMerge(
    ButtonElevatedSpanClassName,
    "bg-error/[0.07] group-hover:bg-error/10  group-active:bg-error/[0.15] dark:bg-error-dark-DEFAULT/[0.07] dark:group-hover:bg-error-dark-DEFAULT/10 dark:group-active:bg-error-dark-DEFAULT/[0.15]",
  ),
};

export const ButtonFilledClassNameMap: Record<ButtonColor, string> = {
  primary: twMerge(
    ButtonFilledClassName,
    "bg-primary text-primary-text hover:bg-primary-darker  active:bg-primary-lighter dark:bg-primary-dark-DEFAULT dark:text-primary-dark-text dark:hover:bg-primary-dark-darker  dark:active:bg-primary-dark-lighter",
  ),
    secondary: twMerge(
        ButtonFilledClassName,
        "bg-secondary text-secondary-text hover:bg-secondary-darker  active:bg-secondary-lighter dark:bg-secondary-dark-DEFAULT dark:text-secondary-dark-text dark:hover:bg-secondary-dark-darker  dark:active:bg-secondary-dark-lighter",
    ),
    info: twMerge(
        ButtonFilledClassName,
        "bg-info text-info-text hover:bg-info-darker  active:bg-info-lighter dark:bg-info-dark-DEFAULT dark:text-info-dark-text dark:hover:bg-info-dark-darker  dark:active:bg-info-dark-lighter",
    ),
    success: twMerge(
        ButtonFilledClassName,
        "bg-success text-success-text hover:bg-success-darker  active:bg-success-lighter dark:bg-success-dark-DEFAULT dark:text-success-dark-text dark:hover:bg-success-dark-darker  dark:active:bg-success-dark-lighter",
    ),
    warning: twMerge(
        ButtonFilledClassName,
        "bg-warning text-warning-text hover:bg-warning-darker  active:bg-warning-lighter dark:bg-warning-dark-DEFAULT dark:text-warning-dark-text dark:hover:bg-warning-dark-darker  dark:active:bg-warning-dark-lighter",
    ),
    error: twMerge(
        ButtonFilledClassName,
        "bg-error text-error-text hover:bg-error-darker  active:bg-error-lighter dark:bg-error-dark-DEFAULT dark:text-error-dark-text dark:hover:bg-error-dark-darker  dark:active:bg-error-dark-lighter",
    ),
};

export const ButtonOutlinedClassNameMap: Record<ButtonColor, string> = {
  primary: twMerge(
    ButtonOutlinedClassName,
    "border-primary text-primary hover:bg-primary/[0.08] active:bg-primary/[0.15] dark:border-primary-dark-DEFAULT dark:text-primary-dark-DEFAULT dark:hover:bg-primary-dark-DEFAULT/[0.08] dark:active:bg-primary-dark-DEFAULT/[0.15]",
  ),
  secondary: twMerge(
    ButtonOutlinedClassName,
    "border-secondary text-secondary hover:bg-secondary/[0.08] active:bg-secondary/[0.15] dark:border-secondary-dark-DEFAULT dark:text-secondary-dark-DEFAULT dark:hover:bg-secondary-dark-DEFAULT/[0.08] dark:active:bg-secondary-dark-DEFAULT/[0.15]",
  ),
  info: twMerge(
    ButtonOutlinedClassName,
    "border-info text-info hover:bg-info/[0.08] active:bg-info/[0.15] dark:border-info-dark-DEFAULT dark:text-info-dark-DEFAULT dark:hover:bg-info-dark-DEFAULT/[0.08] dark:active:bg-info-dark-DEFAULT/[0.15]",
  ),
  success: twMerge(
    ButtonOutlinedClassName,
    "border-success text-success hover:bg-success/[0.08] active:bg-success/[0.15] dark:border-success-dark-DEFAULT dark:text-success-dark-DEFAULT dark:hover:bg-success-dark-DEFAULT/[0.08] dark:active:bg-success-dark-DEFAULT/[0.15]",
  ),
  warning: twMerge(
    ButtonOutlinedClassName,
    "border-warning text-warning hover:bg-warning/[0.08] active:bg-warning/[0.15] dark:border-warning-dark-DEFAULT dark:text-warning-dark-DEFAULT dark:hover:bg-warning-dark-DEFAULT/[0.08] dark:active:bg-warning-dark-DEFAULT/[0.15]",
  ),
  error: twMerge(
    ButtonOutlinedClassName,
    "border-error text-error hover:bg-error/[0.08] active:bg-error/[0.15] dark:border-error-dark-DEFAULT dark:text-error-dark-DEFAULT dark:hover:bg-error-dark-DEFAULT/[0.08] dark:active:bg-error-dark-DEFAULT/[0.15]",
  ),
};

export const ButtonTextClassNameMap: Record<ButtonColor, string> = {
  primary: twMerge(
    ButtonTextClassName,
    "text-primary hover:bg-primary/[0.08] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:hover:bg-primary-dark-DEFAULT/[0.08] dark:active:bg-primary-dark-DEFAULT/[0.15]",
  ),
  secondary: twMerge(
    ButtonTextClassName,
    "text-secondary hover:bg-secondary/[0.08] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:hover:bg-secondary-dark-DEFAULT/[0.08] dark:active:bg-secondary-dark-DEFAULT/[0.15]",
  ),
  info: twMerge(
    ButtonTextClassName,
    "text-info hover:bg-info/[0.08] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:hover:bg-info-dark-DEFAULT/[0.08] dark:active:bg-info-dark-DEFAULT/[0.15]",
  ),
  success: twMerge(
    ButtonTextClassName,
    "text-success hover:bg-success/[0.08] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:hover:bg-success-dark-DEFAULT/[0.08] dark:active:bg-success-dark-DEFAULT/[0.15]",
  ),
  warning: twMerge(
    ButtonTextClassName,
    "text-warning hover:bg-warning/[0.08] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:hover:bg-warning-dark-DEFAULT/[0.08] dark:active:bg-warning-dark-DEFAULT/[0.15]",
  ),
  error: twMerge(
    ButtonTextClassName,
    "text-error hover:bg-error/[0.08] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:hover:bg-error-dark-DEFAULT/[0.08] dark:active:bg-error-dark-DEFAULT/[0.15]",
  ),
};

export const VariantClassNameMap: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  elevated: ButtonElevatedClassNameMap,
  filled: ButtonFilledClassNameMap,
  outlined: ButtonOutlinedClassNameMap,
  text: ButtonTextClassNameMap,
};
