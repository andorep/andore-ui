import {twMerge} from "tailwind-merge";
import {IconButtonColor, IconButtonVariant} from "./IconButton.types";

export const IconButtonPrimary = "MTIconButton-primary";
export const IconButtonSecondary = "MTIconButton-secondary";
export const IconButtonInfo = "MTIconButton-info";
export const IconButtonSuccess = "MTIconButton-success";
export const IconButtonWarning = "MTIconButton-warning";
export const IconButtonError = "MTIconButton-error";

export const IconButtonBaseClassName = twMerge(
    "MTIconButton-root rounded-full transition-colorsShadow duration-medium2 ease-emphasized focus-visible:outline-none",
);

export const IconButtonHoverShadowClassName =
    "hover:shadow-sm active:shadow-none dark:hover:shadow-dark dark:active:shadow-dark-none";

export const IconButtonBaseToggleClassName = twMerge(
    IconButtonBaseClassName,
    "MTIconButton-variant-toggle"
);

export const IconButtonBaseFilledClassName = twMerge(
    IconButtonBaseClassName,
    "bg-surface-container-highest dark:bg-surface-dark-container-highest",
    IconButtonHoverShadowClassName,
    "MTIconButton-variant-filled"
);

export const IconButtonBaseOutlinedClassName = twMerge(
    IconButtonBaseClassName,
    "MTIconButton-variant-outlined border border-solid"
);

export const IconButtonContentClassName = "MTIconButton-content p-2 box-content min-h-6 min-w-6 rounded-[inherit] flex items-center justify-center transition-[inherit] duration-[inherit] ease-[inherit]";

export const IconButtonContentFilledClassName = twMerge(
    IconButtonContentClassName,
    "MTIconButton-variant-filled"
);

export const IconButtonContentFilledToggleClassName = twMerge(
    IconButtonContentClassName,
    "MTIconButton-variant-filled-toggle"
);

export const IconButtonContentOutlinedClassName = twMerge(
    IconButtonContentClassName,
    "MTIconButton-variant-outlined"
);

export const IconButtonContentOutlinedToggleClassName = twMerge(
    IconButtonContentClassName,
    "MTIconButton-variant-outlined-toggle"
);

export const IconButtonContentStandardClassName = twMerge(
    IconButtonContentClassName,
    "MTIconButton-variant-standard"
);


export const IconButtonVariantMapClassName: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
    filled: {
        primary: twMerge(
            IconButtonBaseFilledClassName,
            IconButtonPrimary
        ),
        secondary: twMerge(
            IconButtonBaseFilledClassName,
            IconButtonSecondary
        ),
        info: twMerge(
            IconButtonBaseFilledClassName,
            IconButtonInfo
        ),
        success: twMerge(
            IconButtonBaseFilledClassName,
            IconButtonSuccess
        ),
        warning: twMerge(
            IconButtonBaseFilledClassName,
            IconButtonWarning
        ),
        error: twMerge(
            IconButtonBaseFilledClassName,
            IconButtonError
        ),
    },
    outlined: {
        primary: twMerge(
            IconButtonBaseOutlinedClassName,
            IconButtonPrimary,
            "border-primary dark:border-primary-dark-DEFAULT",
        ),
        secondary: twMerge(
            IconButtonBaseOutlinedClassName,
            IconButtonSecondary,
            "border-secondary dark:border-secondary-dark-DEFAULT",
        ),
        info: twMerge(
            IconButtonBaseOutlinedClassName,
            IconButtonInfo,
            "border-info dark:border-info-dark-DEFAULT",
        ),
        success: twMerge(
            IconButtonBaseOutlinedClassName,
            IconButtonSuccess,
            "border-success dark:border-success-dark-DEFAULT",
        ),
        warning: twMerge(
            IconButtonBaseOutlinedClassName,
            IconButtonWarning,
            "border-warning dark:border-warning-dark-DEFAULT",
        ),
        error: twMerge(
            IconButtonBaseOutlinedClassName,
            IconButtonError,
            "border-error dark:border-error-dark-DEFAULT",
        ),
    },
    standard: {
        primary: twMerge(
            IconButtonBaseClassName,
            IconButtonPrimary,
        ),
        secondary: twMerge(
            IconButtonBaseClassName,
            IconButtonSecondary,
        ),
        info: twMerge(
            IconButtonBaseClassName,
            IconButtonInfo,
        ),
        success: twMerge(
            IconButtonBaseClassName,
            IconButtonSuccess,
        ),
        warning: twMerge(
            IconButtonBaseClassName,
            IconButtonWarning,
        ),
        error: twMerge(
            IconButtonBaseClassName,
            IconButtonError,
        ),
    },
}

export const IconButtonVariantToggleClassName: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
    filled: {
        primary: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseFilledClassName,
            IconButtonPrimary,
            "text-primary-text bg-primary dark:text-primary-dark-text dark:bg-primary-dark-DEFAULT",
        ),
        secondary: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseFilledClassName,
            IconButtonSecondary,
            "text-secondary-text bg-secondary dark:text-secondary-dark-text dark:bg-secondary-dark-DEFAULT",
        ),
        info: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseFilledClassName,
            IconButtonInfo,
            "text-info-text bg-info dark:text-info-dark-text dark:bg-info-dark-DEFAULT",
        ),
        success: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseFilledClassName,
            IconButtonSuccess,
            "text-success-text bg-success dark:text-success-dark-text dark:bg-success-dark-DEFAULT",
        ),
        warning: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseFilledClassName,
            IconButtonWarning,
            "text-warning-text bg-warning dark:text-warning-dark-text dark:bg-warning-dark-DEFAULT",
        ),
        error: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseFilledClassName,
            IconButtonError,
            "text-error-text bg-error dark:text-error-dark-text dark:bg-error-dark-DEFAULT",
        ),
    },
    outlined: {
        primary: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseOutlinedClassName,
            IconButtonPrimary,
            IconButtonHoverShadowClassName,
            "text-primary-text border-primary bg-primary dark:text-primary-dark-text dark:bg-primary-dark-DEFAULT",
            "hover:border-primary-text/[0.07] active:border-primary-text/[0.15] dark:border-primary-dark-text dark:hover:border-primary-dark-text/[0.07] dark:active:border-primary-dark-text/[0.15]",
        ),
        secondary: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseOutlinedClassName,
            IconButtonSecondary,
            IconButtonHoverShadowClassName,
            "text-secondary-text border-secondary bg-secondary dark:text-secondary-dark-text dark:bg-secondary-dark-DEFAULT",
            "hover:border-secondary-text/[0.07] active:border-secondary-text/[0.15] dark:border-secondary-dark-text dark:hover:border-secondary-dark-text/[0.07] dark:active:border-secondary-dark-text/[0.15]",
        ),
        info: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseOutlinedClassName,
            IconButtonInfo,
            IconButtonHoverShadowClassName,
            "text-info-text border-info bg-info dark:text-info-dark-text dark:bg-info-dark-DEFAULT",
            "hover:border-info-text/[0.07] active:border-info-text/[0.15] dark:border-info-dark-text dark:hover:border-info-dark-text/[0.07] dark:active:border-info-dark-text/[0.15]",
        ),
        success: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseOutlinedClassName,
            IconButtonSuccess,
            IconButtonHoverShadowClassName,
            "text-success-text border-success bg-success dark:text-success-dark-text dark:bg-success-dark-DEFAULT",
            "hover:border-success-text/[0.07] active:border-success-text/[0.15] dark:border-success-dark-text dark:hover:border-success-dark-text/[0.07] dark:active:border-success-dark-text/[0.15]",
        ),
        warning: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseOutlinedClassName,
            IconButtonWarning,
            IconButtonHoverShadowClassName,
            "text-warning-text border-warning bg-warning dark:text-warning-dark-text dark:bg-warning-dark-DEFAULT",
            "hover:border-warning-text/[0.07] active:border-warning-text/[0.15] dark:border-warning-dark-text dark:hover:border-warning-dark-text/[0.07] dark:active:border-warning-dark-text/[0.15]",
        ),
        error: twMerge(
            IconButtonBaseToggleClassName,
            IconButtonBaseOutlinedClassName,
            IconButtonError,
            IconButtonHoverShadowClassName,
            "text-error-text border-error bg-error dark:text-error-dark-text dark:bg-error-dark-DEFAULT",
            "hover:border-error-text/[0.07] active:border-error-text/[0.15] dark:border-error-dark-text dark:hover:border-error-dark-text/[0.07] dark:active:border-error-dark-text/[0.15]",
        ),
    },
    standard: {
        primary: IconButtonBaseToggleClassName,
        secondary: IconButtonBaseToggleClassName,
        info: IconButtonBaseToggleClassName,
        success: IconButtonBaseToggleClassName,
        warning: IconButtonBaseToggleClassName,
        error: IconButtonBaseToggleClassName,
    },
}

/* ********Content Maps********* */

export const IconButtonContentVariantMapClassName: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
    filled: {
        primary: twMerge(
            IconButtonContentFilledClassName,
            " text-primary hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark dark:bg-primary-dark-DEFAULT/[0.07] dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonContentFilledClassName,
            " text-secondary hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark dark:bg-secondary-dark-DEFAULT/[0.07] dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonContentFilledClassName,
            " text-info hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark dark:bg-info-dark-DEFAULT/[0.07] dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonContentFilledClassName,
            " text-success hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark dark:bg-success-dark-DEFAULT/[0.07] dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonContentFilledClassName,
            " text-warning hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark dark:bg-warning-dark-DEFAULT/[0.07] dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonContentFilledClassName,
            " text-error hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark dark:bg-error-dark-DEFAULT/[0.07] dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    },
    //@ts-ignore
    outlined: {
        primary: twMerge(
            IconButtonContentOutlinedClassName,
            " text-primary hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:border-primary-dark-DEFAULT dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonContentOutlinedClassName,
            " text-secondary hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:border-secondary-dark-DEFAULT dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonContentOutlinedClassName,
            " text-info hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:border-info-dark-DEFAULT dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonContentOutlinedClassName,
            " text-success hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:border-success-dark-DEFAULT dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonContentOutlinedClassName,
            " text-warning hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:border-warning-dark-DEFAULT dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonContentOutlinedClassName,
            " text-error hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:border-error-dark-DEFAULT dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    },
    //@ts-ignore
    standard: {
        primary: twMerge(
            IconButtonContentStandardClassName,
            " text-primary bg hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:bg-primary-dark-DEFAULT/[0.07] dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-secondary text-secondary bg hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:bg-secondary-dark-DEFAULT/[0.07] dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-info text-info bg hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:bg-info-dark-DEFAULT/[0.07] dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-success text-success bg hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:bg-success-dark-DEFAULT/[0.07] dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-warning text-warning bg hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:bg-warning-dark-DEFAULT/[0.07] dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-error text-error bg hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:bg-error-dark-DEFAULT/[0.07] dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    }
}

export const IconButtonContentVariantToggleClassName: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
    filled: {
        primary: twMerge(
            IconButtonContentFilledToggleClassName,
            " text-primary-text hover:bg-primary-text/[0.07] active:bg-primary-text/[0.15] dark:text-primary-dark-text dark:hover:bg-primary-dark-text/[0.07] dark:active:bg-primary-dark-text/[0.15]",
        ),
        secondary: twMerge(
            IconButtonContentFilledToggleClassName,
            " text-secondary-text hover:bg-secondary-text/[0.07] active:bg-secondary-text/[0.15] dark:text-secondary-dark-text dark:hover:bg-secondary-dark-text/[0.07] dark:active:bg-secondary-dark-text/[0.15]",
        ),
        info: twMerge(
            IconButtonContentFilledToggleClassName,
            " text-info-text hover:bg-info-text/[0.07] active:bg-info-text/[0.15] dark:text-info-dark-text dark:hover:bg-info-dark-text/[0.07] dark:active:bg-info-dark-text/[0.15]",
        ),
        success: twMerge(
            IconButtonContentFilledToggleClassName,
            " text-success-text hover:bg-success-text/[0.07] active:bg-success-text/[0.15] dark:text-success-dark-text dark:hover:bg-success-dark-text/[0.07] dark:active:bg-success-dark-text/[0.15]",
        ),
        warning: twMerge(
            IconButtonContentFilledToggleClassName,
            " text-warning-text hover:bg-warning-text/[0.07] active:bg-warning-text/[0.15] dark:text-warning-dark-text dark:hover:bg-warning-dark-text/[0.07] dark:active:bg-warning-dark-text/[0.15]",
        ),
        error: twMerge(
            IconButtonContentFilledToggleClassName,
            " text-error-text hover:bg-error-text/[0.07] active:bg-error-text/[0.15] dark:text-error-dark-text dark:hover:bg-error-dark-text/[0.07] dark:active:bg-error-dark-text/[0.15]",
        ),
    },
    outlined: {
        primary: twMerge(
            IconButtonContentOutlinedToggleClassName,
            "text-primary-text hover:bg-primary-text/[0.07] active:bg-primary-text/[0.15] dark:text-primary-dark-text dark:hover:bg-primary-dark-text/[0.07] dark:active:bg-primary-dark-text/[0.15]",
        ),
        secondary: twMerge(
            IconButtonContentOutlinedToggleClassName,
            "text-secondary-text hover:bg-secondary-text/[0.07] active:bg-secondary-text/[0.15] dark:text-secondary-dark-text dark:hover:bg-secondary-dark-text/[0.07] dark:active:bg-secondary-dark-text/[0.15]",
        ),
        info: twMerge(
            IconButtonContentOutlinedToggleClassName,
            "text-info-text hover:bg-info-text/[0.07] active:bg-info-text/[0.15] dark:text-info-dark-text dark:hover:bg-info-dark-text/[0.07] dark:active:bg-info-dark-text/[0.15]",
        ),
        success: twMerge(
            IconButtonContentOutlinedToggleClassName,
            "text-success-text hover:bg-success-text/[0.07] active:bg-success-text/[0.15] dark:text-success-dark-text dark:hover:bg-success-dark-text/[0.07] dark:active:bg-success-dark-text/[0.15]",
        ),
        warning: twMerge(
            IconButtonContentOutlinedToggleClassName,
            "text-warning-text hover:bg-warning-text/[0.07] active:bg-warning-text/[0.15] dark:text-warning-dark-text dark:hover:bg-warning-dark-text/[0.07] dark:active:bg-warning-dark-text/[0.15]",
        ),
        error: twMerge(
            IconButtonContentOutlinedToggleClassName,
            "text-error-text hover:bg-error-text/[0.07] active:bg-error-text/[0.15] dark:text-error-dark-text dark:hover:bg-error-dark-text/[0.07] dark:active:bg-error-dark-text/[0.15]",
        ),
    },
    standard: {
        primary: twMerge(
            IconButtonContentStandardClassName,
            " text-primary bg hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:bg-primary-dark-DEFAULT/10 dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-secondary text-secondary bg hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:bg-secondary-dark-DEFAULT/10 dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-info text-info bg hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:bg-info-dark-DEFAULT/10 dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-success text-success bg hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:bg-success-dark-DEFAULT/10 dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-warning text-warning bg hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:bg-warning-dark-DEFAULT/10 dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonContentStandardClassName,
            "MTIconButton-error text-error bg hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:bg-error-dark-DEFAULT/10 dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    }
}

