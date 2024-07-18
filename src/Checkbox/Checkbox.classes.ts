import { CheckboxColors } from "@/Checkbox/Checkbox.types.ts";
import { twMerge } from "tailwind-merge";

export const CheckboxBaseClassName =
  "checkbox-root w-5 h-5 flex border-surface-text-variant border-2 rounded-sm items-center justify-center transition-colors ease-standardAccelerate duration-short4 disabled:opacity-50 disabled:cursor-not-allowed dark:border-surface-dark-text";

export const CheckboxContainerDisabledClassName =
  "has-[:disabled]:bg-transparent has-[:disabled]:hover:bg-transparent has-[:disabled]:active:bg-transparent";

export const CheckboxContainerBaseClassName = twMerge(
  CheckboxContainerDisabledClassName,
  "checkbox-container-root hover:bg-surface-text/10 flex items-center p-3 rounded-full transition-colors ease-standardAccelerate duration-short4 dark:hover:bg-surface-dark-text/10",
);

export const CheckboxColorMapClassName: Record<CheckboxColors, string> = {
  primary: twMerge(
    CheckboxBaseClassName,
    "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-text dark:data-[state=checked]:bg-primary-dark-DEFAULT dark:data-[state=checked]:border-primary-dark-DEFAULT dark:data-[state=checked]:text-primary-dark-text",
  ),
    secondary: twMerge(
        CheckboxBaseClassName,
        "data-[state=checked]:bg-secondary data-[state=checked]:border-secondary data-[state=checked]:text-secondary-text dark:data-[state=checked]:bg-secondary-dark-DEFAULT dark:data-[state=checked]:border-secondary-dark-DEFAULT dark:data-[state=checked]:text-secondary-dark-text",
    ),
    info: twMerge(
        CheckboxBaseClassName,
        "data-[state=checked]:bg-info data-[state=checked]:border-info data-[state=checked]:text-info-text dark:data-[state=checked]:bg-info-dark-DEFAULT dark:data-[state=checked]:border-info-dark-DEFAULT dark:data-[state=checked]:text-info-dark-text",
    ),
    success: twMerge(
        CheckboxBaseClassName,
        "data-[state=checked]:bg-success data-[state=checked]:border-success data-[state=checked]:text-success-text dark:data-[state=checked]:bg-success-dark-DEFAULT dark:data-[state=checked]:border-success-dark-DEFAULT dark:data-[state=checked]:text-success-dark-text",
    ),
    warning: twMerge(
        CheckboxBaseClassName,
        "data-[state=checked]:bg-warning data-[state=checked]:border-warning data-[state=checked]:text-warning-text dark:data-[state=checked]:bg-warning-dark-DEFAULT dark:data-[state=checked]:border-warning-dark-DEFAULT dark:data-[state=checked]:text-warning-dark-text",
    ),
    error: twMerge(
        CheckboxBaseClassName,
        "data-[state=checked]:bg-error data-[state=checked]:border-error data-[state=checked]:text-error-text dark:data-[state=checked]:bg-error-dark-DEFAULT dark:data-[state=checked]:border-error-dark-DEFAULT dark:data-[state=checked]:text-error-dark-text",
    ),
};

export const CheckboxContainerColorMapClassName: Record<
  CheckboxColors,
  string
> = {
  primary: twMerge(
    CheckboxContainerBaseClassName,
    "active:bg-primary/30 has-[:checked]:hover:bg-primary/15 has-[:checked]:active:bg-surface-text/20 dark:active:bg-primary-dark-DEFAULT/30 dark:has-[:checked]:hover:bg-primary-dark-DEFAULT/15 dark:has-[:checked]:active:bg-surface-dark-text/20",
  ),
    secondary: twMerge(
        CheckboxContainerBaseClassName,
        "active:bg-secondary/30 has-[:checked]:hover:bg-secondary/15 has-[:checked]:active:bg-surface-text/20 dark:active:bg-secondary-dark-DEFAULT/30 dark:has-[:checked]:hover:bg-secondary-dark-DEFAULT/15 dark:has-[:checked]:active:bg-surface-dark-text/20",
    ),
    info: twMerge(
        CheckboxContainerBaseClassName,
        "active:bg-info/30 has-[:checked]:hover:bg-info/15 has-[:checked]:active:bg-surface-text/20 dark:active:bg-info-dark-DEFAULT/30 dark:has-[:checked]:hover:bg-info-dark-DEFAULT/15 dark:has-[:checked]:active:bg-surface-dark-text/20",
    ),
    success: twMerge(
        CheckboxContainerBaseClassName,
        "active:bg-success/30 has-[:checked]:hover:bg-success/15 has-[:checked]:active:bg-surface-text/20 dark:active:bg-success-dark-DEFAULT/30 dark:has-[:checked]:hover:bg-success-dark-DEFAULT/15 dark:has-[:checked]:active:bg-surface-dark-text/20",
    ),
    warning: twMerge(
        CheckboxContainerBaseClassName,
        "active:bg-warning/30 has-[:checked]:hover:bg-warning/15 has-[:checked]:active:bg-surface-text/20 dark:active:bg-warning-dark-DEFAULT/30 dark:has-[:checked]:hover:bg-warning-dark-DEFAULT/15 dark:has-[:checked]:active:bg-surface-dark-text/20",
    ),
    error: twMerge(
        CheckboxContainerBaseClassName,
        "active:bg-error/30 has-[:checked]:hover:bg-error/15 has-[:checked]:active:bg-surface-text/20 dark:active:bg-error-dark-DEFAULT/30 dark:has-[:checked]:hover:bg-error-dark-DEFAULT/15 dark:has-[:checked]:active:bg-surface-dark-text/20",
    ),
};
