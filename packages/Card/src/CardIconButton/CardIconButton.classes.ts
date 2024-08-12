import {twMerge} from "tailwind-merge";
import {CardIconButtonColor} from "./CardIconButton.types";

export const CardIconButtonPrimary = "MTCardIconButton-primary";
export const CardIconButtonSecondary = "MTCardIconButton-secondary";
export const CardIconButtonInfo = "MTCardIconButton-info";
export const CardIconButtonSuccess = "MTCardIconButton-success";
export const CardIconButtonWarning = "MTCardIconButton-warning";
export const CardIconButtonError = "MTCardIconButton-error";

export const CardIconButtonBaseClassName = twMerge(
    "MTCardIconButton-root rounded-full transition-colorsShadow duration-medium2 ease-emphasized focus-visible:outline-none",
);

export const CardIconButtonContentClassName = "MTCardIconButton-content p-2 box-content min-h-6 min-w-6 rounded-[inherit] flex items-center justify-center transition-[inherit] duration-[inherit] ease-[inherit]";

export const CardIconButtonContentStandardClassName = twMerge(
    CardIconButtonContentClassName,
    "MTCardIconButton-variant-standard"
);

export const CardIconButtonVariantMapClassName: Record<CardIconButtonColor, string> = {
    primary: twMerge(
        CardIconButtonBaseClassName,
        CardIconButtonPrimary,
    ),
    secondary: twMerge(
        CardIconButtonBaseClassName,
        CardIconButtonSecondary,
    ),
    info: twMerge(
        CardIconButtonBaseClassName,
        CardIconButtonInfo,
    ),
    success: twMerge(
        CardIconButtonBaseClassName,
        CardIconButtonSuccess,
    ),
    warning: twMerge(
        CardIconButtonBaseClassName,
        CardIconButtonWarning,
    ),
    error: twMerge(
        CardIconButtonBaseClassName,
        CardIconButtonError,
    ),
}

/* ********Content Maps********* */

export const CardIconButtonContentVariantMapClassName: Record<CardIconButtonColor, string> = {
    primary: twMerge(
        CardIconButtonContentStandardClassName,
        " text-primary bg hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:hover:bg-primary-dark-DEFAULT[0.07] dark:active:bg-primary-dark-DEFAULT/[0.15]",
    ),
    secondary: twMerge(
        CardIconButtonContentStandardClassName,
        " text-secondary bg hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:hover:bg-secondary-dark-DEFAULT/[0.07] dark:active:bg-secondary-dark-DEFAULT/[0.15]",
    ),
    info: twMerge(
        CardIconButtonContentStandardClassName,
        " text-info bg hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:hover:bg-info-dark-DEFAULT/[0.07] dark:active:bg-info-dark-DEFAULT/[0.15]",
    ),
    success: twMerge(
        CardIconButtonContentStandardClassName,
        " text-success bg hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:hover:bg-success-dark-DEFAULT/[0.07] dark:active:bg-success-dark-DEFAULT/[0.15]",
    ),
    warning: twMerge(
        CardIconButtonContentStandardClassName,
        " text-warning bg hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:hover:bg-warning-dark-DEFAULT/[0.07] dark:active:bg-warning-dark-DEFAULT/[0.15]",
    ),
    error: twMerge(
        CardIconButtonContentStandardClassName,
        " text-error bg hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:hover:bg-error-dark-DEFAULT/[0.07] dark:active:bg-error-dark-DEFAULT/[0.15]",
    ),
}
