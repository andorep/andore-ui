import {twMerge} from "tailwind-merge";
import {RadioButtonColor, RadioButtonSize} from "./RadioButton.types";


export const RadioButtonBaseClassName = twMerge(
    "MTRadioButton-root group/rootButton",
    "flex items-center",
    "transition-colorsShadow duration-short3 ease-emphasizedAccelerate"
);

export const RadioButtonButtonClassName = twMerge(
    "MTRadioButton-button group/button",
    "cursor-default p-2 mr-1 rounded-full transition-[inherit] duration-[inherit] ease-[inherit]",
    "hover:bg-surface-text/[0.07] dark:hover:bg-surface-dark-text/[0.07]",
    "active:bg-surface-text/[0.15] dark:active:bg-surface-dark-text/[0.15]",
);

export const RadioButtonButtonDisabledClassName = twMerge(
    RadioButtonButtonClassName,
    "cursor-not-allowed",
    "hover:bg-transparent dark:hover:bg-transparent",
    "active:bg-transparent dark:active:bg-transparent",
);

export const RadioButtonIconClassName = twMerge(
    "MTRadioButton-icon",
    "w-5 h-5 flex items-center rounded-[inherit]  transition-[inherit] duration-[inherit] ease-[inherit]",
);

export const RadioButtonIconSizeMapClassName: Record<RadioButtonSize, string> = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
}

export const RadioButtonUncheckedIconClassName = twMerge(
    RadioButtonIconClassName,
    "MTRadioButton-icon-unchecked",
    "group-data-[state=checked]/button:hidden",
    "fill-surface-text dark:fill-surface-dark-text",
);

export const RadioButtonUncheckedDisabledIconClassName = twMerge(
    RadioButtonUncheckedIconClassName,
    "fill-surface-text/[0.38] dark:fill-surface-dark-text/[0.38]",
);

export const RadioButtonCheckedIconClassName = twMerge(
    RadioButtonIconClassName,
    "MTRadioButton-icon-checked",
    "group-data-[state=unchecked]/button:hidden",
);

export const RadioButtonCheckedDisabledIconClassName = twMerge(
    RadioButtonCheckedIconClassName,
    "fill-surface-text/[0.38] dark:fill-surface-dark-text/[0.38]",
);


export const RadioButtonLabelClassName = "MTRadioButton-label text-surface-text dark:text-surface-dark-text";

export const RadioButtonLabelDisabledClassName = twMerge(
    RadioButtonLabelClassName,
    "text-surface-text/[0.38] dark:text-surface-dark-text/[0.38]",
);


export const RadioButtonButtonMapClassName
    :
    Record<RadioButtonColor, string> = {
    primary: twMerge(
        RadioButtonButtonClassName,
        "data-[state='checked']:hover:bg-primary/[0.07] dark:data-[state='checked']:hover:bg-primary-dark-DEFAULT/[0.07]",
        "data-[state='checked']:active:bg-primary/[0.15] dark:data-[state='checked']:active:bg-primary-dark-DEFAULT/[0.15]",
    ),
    secondary: twMerge(
        RadioButtonButtonClassName,
        "data-[state='checked']:hover:bg-secondary/[0.07] dark:data-[state='checked']:hover:bg-secondary-dark-DEFAULT/[0.07]",
        "data-[state='checked']:active:bg-secondary/[0.15] dark:data-[state='checked']:active:bg-secondary-dark-DEFAULT/[0.15]",
    ),
    info: twMerge(
        RadioButtonButtonClassName,
        "data-[state='checked']:hover:bg-info/[0.07] dark:data-[state='checked']:hover:bg-info-dark-DEFAULT/[0.07]",
        "data-[state='checked']:active:bg-info/[0.15] dark:data-[state='checked']:active:bg-info-dark-DEFAULT/[0.15]",
    ),
    success: twMerge(
        RadioButtonButtonClassName,
        "data-[state='checked']:hover:bg-success/[0.07] dark:data-[state='checked']:hover:bg-success-dark-DEFAULT/[0.07]",
        "data-[state='checked']:active:bg-success/[0.15] dark:data-[state='checked']:active:bg-success-dark-DEFAULT/[0.15]",
    ),
    warning: twMerge(
        RadioButtonButtonClassName,
        "data-[state='checked']:hover:bg-warning/[0.07] dark:data-[state='checked']:hover:bg-warning-dark-DEFAULT/[0.07]",
        "data-[state='checked']:active:bg-warning/[0.15] dark:data-[state='checked']:active:bg-warning-dark-DEFAULT/[0.15]",
    ),
    error: twMerge(
        RadioButtonButtonClassName,
        "data-[state='checked']:hover:bg-error/[0.07] dark:data-[state='checked']:hover:bg-error-dark-DEFAULT/[0.07]",
        "data-[state='checked']:active:bg-error/[0.15] dark:data-[state='checked']:active:bg-error-dark-DEFAULT/[0.15]",
    ),
}

export const RadioButtonUncheckedIconMapClassName: Record<RadioButtonColor, string> = {
    primary: twMerge(
        RadioButtonUncheckedIconClassName,
    ),
    secondary: twMerge(
        RadioButtonUncheckedIconClassName,
    ),
    info: twMerge(
        RadioButtonUncheckedIconClassName,
    ),
    success: twMerge(
        RadioButtonUncheckedIconClassName,
    ),
    warning: twMerge(
        RadioButtonUncheckedIconClassName,
    ),
    error: twMerge(
        RadioButtonUncheckedIconClassName,
    ),
}

export const RadioButtonCheckedIconMapClassName: Record<RadioButtonColor, string> = {
    primary: twMerge(
        RadioButtonCheckedIconClassName,
        "fill-primary dark:fill-primary-dark-DEFAULT",
    ),
    secondary: twMerge(
        RadioButtonCheckedIconClassName,
        "fill-secondary dark:fill-secondary-dark-DEFAULT",
    ),
    info: twMerge(
        RadioButtonCheckedIconClassName,
        "fill-info dark:fill-info-dark-DEFAULT",
    ),
    success: twMerge(
        RadioButtonCheckedIconClassName,
        "fill-success dark:fill-success-dark-DEFAULT",
    ),
    warning: twMerge(
        RadioButtonCheckedIconClassName,
        "fill-warning dark:fill-warning-dark-DEFAULT",
    ),
    error: twMerge(
        RadioButtonCheckedIconClassName,
        "fill-error dark:fill-error-dark-DEFAULT",
    ),
}
