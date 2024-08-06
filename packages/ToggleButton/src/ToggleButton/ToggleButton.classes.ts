import {ToggleButtonColor} from "./ToggleButton.types";
import {twMerge} from "tailwind-merge";

export const ToggleButtonBaseClassName = twMerge(
    "MTToggleButton-root group/button rounded-full font-medium text-base flex items-center justify-center transition-colorsShadow duration-short3 ease-emphasizedAccelerate",
    // group behavior
    "group-[.MTToggleButtonGroup]/root:rounded-none",
    // first child
    "group-[.MTToggleButtonGroup]/root:first-of-type:rounded-l-full group-[.MTToggleButtonGroup]/root:first-of-type:border-r-0",
    // last child
    "group-[.MTToggleButtonGroup]/root:last-of-type:rounded-r-full group-[.MTToggleButtonGroup]/root:last-of-type:border-l-0",
)

export const ToggleButtonBasePaddingClassName = twMerge(""
)
export const ToggleButtonBaseSpanPaddingClassName = twMerge(
    "MTToggleButton-span flex items-center justify-center rounded-[inherit] transition-[inherit] duration-[inherit] ease-[inherit]",
    "py-2.5 px-8 has-[.MTToggleButton-icon]:px-6 has-[.MTToggleButton-icon]:pl-4",
    // group density -1
    "group-[.MTToggleButtonGroup-density-1]/root:py-1.5",
    // group density -2
    "group-[.MTToggleButtonGroup-density-2]/root:py-0.5",
    // group density -3
    "group-[.MTToggleButtonGroup-density-3]/root:py-0",
)


export const ToggleButtonBaseIconClassName =
    "MTToggleButton-icon w-4 h-4 flex items-center justify-center mr-2";

export const ToggleButtonStartIconAloneClassName = "MTToggleButton-icon MTToggleButton-startIconAlone w-4 h-4 flex items-center justify-center";


export const ToggleButtonClassName = twMerge(
    ToggleButtonBaseClassName,
    ToggleButtonBasePaddingClassName,
    "MTToggleButton-variant- border border-solid border-outline text-surface-text dark:border-outline-dark dark:text-surface-dark-text",
);


export const ToggleButtonBaseDisabledClassName = twMerge(
    ToggleButtonClassName,
    ToggleButtonBaseClassName,
    ToggleButtonBasePaddingClassName,
    "cursor-not-allowed",
    "border-surface-text/10 text-surface-text/35 dark:border-surface-dark-text/10 dark:text-surface-dark-text/35",
);

//  group-aria-pressed/button is a state attribute that indicates the current "pressed" state of toggle buttons.
export const ToggleButtonClassNameMap: Record<ToggleButtonColor, string> = {
    primary: twMerge(
        ToggleButtonClassName,
        "hover:bg-surface-text/[0.08] active:bg-surface-text/[0.15] dark:hover:bg-surface-dark-text/[0.08] dark:active:bg-surface-dark-text/[0.15]",
        "aria-pressed:bg-primary-container aria-pressed:hover:bg-primary-container aria-pressed:active:bg-primary-container aria-pressed:text-primary-container-text dark:aria-pressed:bg-primary-dark-container dark:aria-pressed:hover:bg-primary-dark-container dark:aria-pressed:active:bg-primary-dark-container dark:aria-pressed:text-primary-dark-container-text",
    ),
    secondary: twMerge(
        ToggleButtonClassName,
        "hover:bg-surface-text/[0.08] active:bg-surface-text/[0.15] dark:hover:bg-surface-dark-text/[0.08] dark:active:bg-surface-dark-text/[0.15]",
        "aria-pressed:bg-secondary-container aria-pressed:hover:bg-secondary-container aria-pressed:active:bg-secondary-container aria-pressed:text-secondary-container-text dark:aria-pressed:bg-secondary-dark-container dark:aria-pressed:hover:bg-secondary-dark-container dark:aria-pressed:active:bg-secondary-dark-container dark:aria-pressed:text-secondary-dark-container-text",
    ),
    info: twMerge(
        ToggleButtonClassName,
        "hover:bg-surface-text/[0.08] active:bg-surface-text/[0.15] dark:hover:bg-surface-dark-text/[0.08] dark:active:bg-surface-dark-text/[0.15]",
        "aria-pressed:bg-info-container aria-pressed:hover:bg-info-container aria-pressed:active:bg-info-container aria-pressed:text-info-container-text dark:aria-pressed:bg-info-dark-container dark:aria-pressed:hover:bg-info-dark-container dark:aria-pressed:active:bg-info-dark-container dark:aria-pressed:text-info-dark-container-text",
    ),
    success: twMerge(
        ToggleButtonClassName,
        "hover:bg-surface-text/[0.08] active:bg-surface-text/[0.15] dark:hover:bg-surface-dark-text/[0.08] dark:active:bg-surface-dark-text/[0.15]",
        "aria-pressed:bg-success-container aria-pressed:hover:bg-success-container aria-pressed:active:bg-success-container aria-pressed:text-success-container-text dark:aria-pressed:bg-success-dark-container dark:aria-pressed:hover:bg-success-dark-container dark:aria-pressed:active:bg-success-dark-container dark:aria-pressed:text-success-dark-container-text",
    ),
    warning: twMerge(
        ToggleButtonClassName,
        "hover:bg-surface-text/[0.08] active:bg-surface-text/[0.15] dark:hover:bg-surface-dark-text/[0.08] dark:active:bg-surface-dark-text/[0.15]",
        "aria-pressed:bg-warning-container aria-pressed:hover:bg-warning-container aria-pressed:active:bg-warning-container aria-pressed:text-warning-container-text dark:aria-pressed:bg-warning-dark-container dark:aria-pressed:hover:bg-warning-dark-container dark:aria-pressed:active:bg-warning-dark-container dark:aria-pressed:text-warning-dark-container-text",
    ),
    error: twMerge(
        ToggleButtonClassName,
        "hover:bg-surface-text/[0.08] active:bg-surface-text/[0.15] dark:hover:bg-surface-dark-text/[0.08] dark:active:bg-surface-dark-text/[0.15]",
        "aria-pressed:bg-error-container aria-pressed:hover:bg-error-container aria-pressed:active:bg-error-container aria-pressed:text-error-container-text dark:aria-pressed:bg-error-dark-container dark:aria-pressed:hover:bg-error-dark-container dark:aria-pressed:active:bg-error-dark-container dark:aria-pressed:text-error-dark-container-text",
    ),
};

export const ToggleButtonContentMapClassName: Record<ToggleButtonColor, string> = {
    primary: twMerge(
        ToggleButtonBaseSpanPaddingClassName,
        "group-aria-pressed/button:hover:bg-primary-container-text/[0.08] group-aria-pressed/button:active:bg-primary-container-text/[0.15] dark:group-aria-pressed/button:hover:bg-primary-dark-container-text/[0.08] dark:group-aria-pressed/button:active:bg-primary-dark-container-text/[0.15]",
    ),
    secondary: twMerge(
        ToggleButtonBaseSpanPaddingClassName,
        "group-aria-pressed/button:hover:bg-secondary-container-text/[0.08] group-aria-pressed/button:active:bg-secondary-container-text/[0.15] dark:group-aria-pressed/button:hover:bg-secondary-dark-container-text/[0.08] dark:group-aria-pressed/button:active:bg-secondary-dark-container-text/[0.15]",
    ),
    info: twMerge(
        ToggleButtonBaseSpanPaddingClassName,
        "group-aria-pressed/button:hover:bg-info-container-text/[0.08] group-aria-pressed/button:active:bg-info-container-text/[0.15] dark:group-aria-pressed/button:hover:bg-info-dark-container-text/[0.08] dark:group-aria-pressed/button:active:bg-info-dark-container-text/[0.15]",
    ),
    success: twMerge(
        ToggleButtonBaseSpanPaddingClassName,
        "group-aria-pressed/button:hover:bg-success-container-text/[0.08] group-aria-pressed/button:active:bg-success-container-text/[0.15] dark:group-aria-pressed/button:hover:bg-success-dark-container-text/[0.08] dark:group-aria-pressed/button:active:bg-success-dark-container-text/[0.15]",
    ),
    warning: twMerge(
        ToggleButtonBaseSpanPaddingClassName,
        "group-aria-pressed/button:hover:bg-warning-container-text/[0.08] group-aria-pressed/button:active:bg-warning-container-text/[0.15] dark:group-aria-pressed/button:hover:bg-warning-dark-container-text/[0.08] dark:group-aria-pressed/button:active:bg-warning-dark-container-text/[0.15]",
    ),
    error: twMerge(
        ToggleButtonBaseSpanPaddingClassName,
        "group-aria-pressed/button:hover:bg-error-container-text/[0.08] group-aria-pressed/button:active:bg-error-container-text/[0.15] dark:group-aria-pressed/button:hover:bg-error-dark-container-text/[0.08] dark:group-aria-pressed/button:active:bg-error-dark-container-text/[0.15]",
    ),
};
