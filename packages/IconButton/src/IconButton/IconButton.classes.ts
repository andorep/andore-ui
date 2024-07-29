import {twMerge} from "tailwind-merge";
import {IconButtonColor, IconButtonVariant} from "./IconButton.types";

export const IconButtonBaseClassName = "MTicon-button-root rounded-full transition-colorsShadow duration-short3 ease-emphasizedAccelerate";
export const IconButtonContentClassName = "MTicon-button-content p-2 box-content min-h-6 min-w-6 rounded-[inherit] flex items-center justify-center transition-colorsShadow duration-short3 ease-emphasizedAccelerate";

export const IconButtonFilledClassName = twMerge(
    IconButtonContentClassName,
    "MTicon-button-filled"
);

export const IconButtonFilledToggleClassName = twMerge(
    IconButtonContentClassName,
    "MTicon-button-filled-toggle"
);

export const IconButtonOutlinedClassName = twMerge(
    IconButtonContentClassName,
    "MTicon-button-outlined border border-solid"
);

export const IconButtonOutlinedToggleClassName = twMerge(
    IconButtonContentClassName,
    "MTicon-button-outlined-toggle border border-solid"
);


export const IconButtonStandardClassName = twMerge(
    IconButtonContentClassName,
    "MTicon-button-standard"
);

export const IconButtonVariantMapClassName: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
    filled: {
        primary: twMerge(
            IconButtonFilledClassName,
            "MTicon-button-primary text-primary bg-primary/[0.07] hover:bg-primary/10 active:bg-primary/[0.15] dark:text-primary-dark dark:bg-primary-dark-DEFAULT/[0.07] dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonFilledClassName,
            "MTicon-button-secondary text-secondary bg-secondary/[0.07] hover:bg-secondary/10 active:bg-secondary/[0.15] dark:text-secondary-dark dark:bg-secondary-dark-DEFAULT/[0.07] dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonFilledClassName,
            "MTicon-button-info text-info bg-info/[0.07] hover:bg-info/10 active:bg-info/[0.15] dark:text-info-dark dark:bg-info-dark-DEFAULT/[0.07] dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonFilledClassName,
            "MTicon-button-success text-success bg-success/[0.07] hover:bg-success/10 active:bg-success/[0.15] dark:text-success-dark dark:bg-success-dark-DEFAULT/[0.07] dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonFilledClassName,
            "MTicon-button-warning text-warning bg-warning/[0.07] hover:bg-warning/10 active:bg-warning/[0.15] dark:text-warning-dark dark:bg-warning-dark-DEFAULT/[0.07] dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonFilledClassName,
            "MTicon-button-error text-error bg-error/[0.07] hover:bg-error/10 active:bg-error/[0.15] dark:text-error-dark dark:bg-error-dark-DEFAULT/[0.07] dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    },
    //@ts-ignore
    outlined: {
        primary: twMerge(
            IconButtonOutlinedClassName,
            "MTicon-button-primary text-primary border-primary hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:border-primary-dark-DEFAULT dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonOutlinedClassName,
            "MTicon-button-secondary text-secondary border-secondary hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:border-secondary-dark-DEFAULT dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonOutlinedClassName,
            "MTicon-button-info text-info border-info hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:border-info-dark-DEFAULT dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonOutlinedClassName,
            "MTicon-button-success text-success border-success hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:border-success-dark-DEFAULT dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonOutlinedClassName,
            "MTicon-button-warning text-warning border-warning hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:border-warning-dark-DEFAULT dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonOutlinedClassName,
            "MTicon-button-error text-error border-error hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:border-error-dark-DEFAULT dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    },
    //@ts-ignore
    standard: {
        primary: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-primary text-primary bg hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:bg-primary-dark-DEFAULT/[0.07] dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-secondary text-secondary bg hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:bg-secondary-dark-DEFAULT/[0.07] dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-info text-info bg hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:bg-info-dark-DEFAULT/[0.07] dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-success text-success bg hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:bg-success-dark-DEFAULT/[0.07] dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-warning text-warning bg hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:bg-warning-dark-DEFAULT/[0.07] dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-error text-error bg hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:bg-error-dark-DEFAULT/[0.07] dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    }
}


export const IconButtonVariantToggleClassName: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
    filled: {
        primary: twMerge(
            IconButtonFilledToggleClassName,
            "MTicon-button-primary bg-primary text-primary-text hover:bg-primary-darker  active:bg-primary-lighter dark:bg-primary-dark-DEFAULT dark:text-primary-dark-text dark:hover:bg-primary-dark-darker  dark:active:bg-primary-dark-lighter",
        ),
        secondary: twMerge(
            IconButtonFilledToggleClassName,
            "MTicon-button-secondary bg-secondary text-secondary-text hover:bg-secondary-darker active:bg-secondary-lighter dark:bg-secondary-dark-DEFAULT dark:text-secondary-dark-text dark:hover:bg-secondary-dark-darker dark:active:bg-secondary-dark-lighter",
        ),
        info: twMerge(
            IconButtonFilledToggleClassName,
            "MTicon-button-info bg-info text-info-text hover:bg-info-darker active:bg-info-lighter dark:bg-info-dark-DEFAULT dark:text-info-dark-text dark:hover:bg-info-dark-darker dark:active:bg-info-dark-lighter",
        ),
        success: twMerge(
            IconButtonFilledToggleClassName,
            "MTicon-button-success bg-success text-success-text hover:bg-success-darker active:bg-success-lighter dark:bg-success-dark-DEFAULT dark:text-success-dark-text dark:hover:bg-success-dark-darker dark:active:bg-success-dark-lighter",
        ),
        warning: twMerge(
            IconButtonFilledToggleClassName,
            "MTicon-button-warning bg-warning text-warning-text hover:bg-warning-darker active:bg-warning-lighter dark:bg-warning-dark-DEFAULT dark:text-warning-dark-text dark:hover:bg-warning-dark-darker dark:active:bg-warning-dark-lighter",
        ),
        error: twMerge(
            IconButtonFilledToggleClassName,
            "MTicon-button-error bg-error text-error-text hover:bg-error-darker active:bg-error-lighter dark:bg-error-dark-DEFAULT dark:text-error-dark-text dark:hover:bg-error-dark-darker dark:active:bg-error-dark-lighter",
        ),
    },
    outlined: {
        primary: twMerge(
            IconButtonOutlinedToggleClassName,
            "bg-primary text-primary-text hover:bg-primary-darker  active:bg-primary-lighter dark:bg-primary-dark-DEFAULT dark:text-primary-dark-text dark:hover:bg-primary-dark-darker  dark:active:bg-primary-dark-lighter",
            "MTicon-button-primary border-primary hover:border-primary-darker active:border-primary-lighter dark:border-primary-dark-DEFAULT dark:hover:border-primary-dark-darker dark:active:border-primary-dark-lighter",
        ),
        secondary: twMerge(
            IconButtonOutlinedToggleClassName,
            "bg-secondary text-secondary-text hover:bg-secondary-darker active:bg-secondary-lighter dark:bg-secondary-dark-DEFAULT dark:text-secondary-dark-text dark:hover:bg-secondary-dark-darker dark:active:bg-secondary-dark-lighter",
            "MTicon-button-secondary border-secondary hover:border-secondary-darker active:border-secondary-lighter dark:border-secondary-dark-DEFAULT dark:hover:border-secondary-dark-darker dark:active:border-secondary-dark-lighter",
        ),
        info: twMerge(
            IconButtonOutlinedToggleClassName,
            "bg-info text-info-text hover:bg-info-darker active:bg-info-lighter dark:bg-info-dark-DEFAULT dark:text-info-dark-text dark:hover:bg-info-dark-darker dark:active:bg-info-dark-lighter",
            "MTicon-button-info border-info hover:border-info-darker active:border-info-lighter dark:border-info-dark-DEFAULT dark:hover:border-info-dark-darker dark:active:border-info-dark-lighter",
        ),
        success: twMerge(
            IconButtonOutlinedToggleClassName,
            "bg-success text-success-text hover:bg-success-darker active:bg-success-lighter dark:bg-success-dark-DEFAULT dark:text-success-dark-text dark:hover:bg-success-dark-darker dark:active:bg-success-dark-lighter",
            "MTicon-button-success border-success hover:border-success-darker active:border-success-lighter dark:border-success-dark-DEFAULT dark:hover:border-success-dark-darker dark:active:border-success-dark-lighter",
        ),
        warning: twMerge(
            IconButtonOutlinedToggleClassName,
            "bg-warning text-warning-text hover:bg-warning-darker active:bg-warning-lighter dark:bg-warning-dark-DEFAULT dark:text-warning-dark-text dark:hover:bg-warning-dark-darker dark:active:bg-warning-dark-lighter",
            "MTicon-button-warning border-warning hover:border-warning-darker active:border-warning-lighter dark:border-warning-dark-DEFAULT dark:hover:border-warning-dark-darker dark:active:border-warning-dark-lighter",
        ),
        error: twMerge(
            IconButtonOutlinedToggleClassName,
            "bg-error text-error-text hover:bg-error-darker active:bg-error-lighter dark:bg-error-dark-DEFAULT dark:text-error-dark-text dark:hover:bg-error-dark-darker dark:active:bg-error-dark-lighter",
            "MTicon-button-error border-error hover:border-error-darker active:border-error-lighter dark:border-error-dark-DEFAULT dark:hover:border-error-dark-darker dark:active:border-error-dark-lighter",
        ),
    },
    standard: {
        primary: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-primary text-primary bg hover:bg-primary/[0.07] active:bg-primary/[0.15] dark:text-primary-dark-DEFAULT dark:bg-primary-dark-DEFAULT/10 dark:hover:bg-primary-dark-DEFAULT/10 dark:active:bg-primary-dark-DEFAULT/[0.15]",
        ),
        secondary: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-secondary text-secondary bg hover:bg-secondary/[0.07] active:bg-secondary/[0.15] dark:text-secondary-dark-DEFAULT dark:bg-secondary-dark-DEFAULT/10 dark:hover:bg-secondary-dark-DEFAULT/10 dark:active:bg-secondary-dark-DEFAULT/[0.15]",
        ),
        info: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-info text-info bg hover:bg-info/[0.07] active:bg-info/[0.15] dark:text-info-dark-DEFAULT dark:bg-info-dark-DEFAULT/10 dark:hover:bg-info-dark-DEFAULT/10 dark:active:bg-info-dark-DEFAULT/[0.15]",
        ),
        success: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-success text-success bg hover:bg-success/[0.07] active:bg-success/[0.15] dark:text-success-dark-DEFAULT dark:bg-success-dark-DEFAULT/10 dark:hover:bg-success-dark-DEFAULT/10 dark:active:bg-success-dark-DEFAULT/[0.15]",
        ),
        warning: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-warning text-warning bg hover:bg-warning/[0.07] active:bg-warning/[0.15] dark:text-warning-dark-DEFAULT dark:bg-warning-dark-DEFAULT/10 dark:hover:bg-warning-dark-DEFAULT/10 dark:active:bg-warning-dark-DEFAULT/[0.15]",
        ),
        error: twMerge(
            IconButtonStandardClassName,
            "MTicon-button-error text-error bg hover:bg-error/[0.07] active:bg-error/[0.15] dark:text-error-dark-DEFAULT dark:bg-error-dark-DEFAULT/10 dark:hover:bg-error-dark-DEFAULT/10 dark:active:bg-error-dark-DEFAULT/[0.15]",
        ),
    }
}

