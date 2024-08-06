import {FabColor, FabFloating, FabSize} from "./Fab.types";
import {twMerge} from "tailwind-merge";

export const FabBaseShadowClassName = "shadow-md active:shadow-sm dark:shadow-dark-md dark:active:shadow-dark-sm";

export const FabBaseClassName = twMerge(
    "MTfab-root group font-semibold bg-surface-container-low rounded-md inline-flex items-center justify-center transition-colorsShadow duration-short3 ease-emphasizedAccelerate",
    FabBaseShadowClassName
);

export const FabContentClassName = "MTfab-content box-content p-4 rounded-[inherit] transition-[inherit] duration-[inherit] ease-[inherit] flex items-center justify-center group-[.MTfab-small]:min-h-6 group-[.MTfab-small]:min-w-6 group-[.MTfab-medium]:min-h-6 group-[.MTfab-medium]:min-w-6 group-[.MTfab-large]:min-h-9 group-[.MTfab-large]:min-w-9";


export const FabIconClassName = "MTfab-icon inline-flex group-[.MTfab-small]:h-6 group-[.MTfab-small]:w-6 group-[.MTfab-medium]:h-6 group-[.MTfab-medium]:w-6 group-[.MTfab-large]:h-9 group-[.MTfab-large]:w-9";

export const FabTextClassName = "MTfab-text ml-2.5 first:m-0";

export const FabBaseFloatingMapClassName: Record<FabFloating, string> = {
    'right': twMerge(
        "fixed right-4 bottom-4",
    ),
    'left': twMerge(
        "fixed left-4 bottom-4",
    ),
    'center': twMerge(
        "fixed left-1/2 bottom-4 transform -translate-x-1/2",
    )
}

export const FabBaseMapClassName: Record<FabColor, string> = {
    primary: twMerge(
        FabBaseClassName,
        "MTfab-primary bg-primary-container text-primary-container-text dark:bg-primary-dark-container dark:text-primary-dark-container-text",
    ),
    secondary: twMerge(
        FabBaseClassName,
        "MTfab-secondary bg-secondary-container text-secondary-container-text dark:bg-secondary-dark-container dark:text-secondary-dark-container-text",
    ),
    info: twMerge(
        FabBaseClassName,
        "MTfab-info bg-info-container text-info-container-text dark:bg-info-dark-container dark:text-info-dark-container-text",
    ),
    success: twMerge(
        FabBaseClassName,
        "MTfab-success bg-success-container text-success-container-text dark:bg-success-dark-container dark:text-success-dark-container-text",
    ),
    warning: twMerge(
        FabBaseClassName,
        "MTfab-warning bg-warning-container text-warning-container-text dark:bg-warning-dark-container dark:text-warning-dark-container-text",
    ),
    error: twMerge(
        FabBaseClassName,
        "MTfab-error bg-error-container text-error-container-text dark:bg-error-dark-container dark:text-error-dark-container-text",
    )
};


export const FabBaseSizeMapClassName: Record<FabSize, string> = {
    small: twMerge(
        "MTfab-small rounded-md h-fit",
    ),
    medium: twMerge(
        "MTfab-medium rounded-lg h-fit",
    ),
    large: twMerge(
        "MTfab-large rounded-xl h-fit",
    )
};


export const FabContentSizeMapClassName: Record<FabSize, string> = {
    small: twMerge(
        "p-2 text-sm leading-[0]",
    ),
    medium: twMerge(
        "p-4 text-sm leading-[0]",
    ),
    large: twMerge(
        "p-7 text-base leading-[0]",
    )
};


export const FabContentMapClassName: Record<FabColor, string> = {
    primary: twMerge(
        FabContentClassName,
        "MTfab-primary group-hover:bg-primary-container-text/[0.07] group-active:bg-primary-container-text/[0.12] group-hover:dark:bg-primary-dark-container-text/[0.07] group-active:dark:bg-primary-dark-container-text/[0.12]",
    ),
    secondary: twMerge(
        FabContentClassName,
        "MTfab-secondary group-hover:bg-secondary-container-text/[0.07] group-active:bg-secondary-container-text/[0.12] group-hover:dark:bg-secondary-dark-container-text/[0.07] group-active:dark:bg-secondary-dark-container-text/[0.12]",
    ),
    info: twMerge(
        FabContentClassName,
        "MTfab-info group-hover:bg-info-container-text/[0.07] group-active:bg-info-container-text/[0.12] group-hover:dark:bg-info-dark-container-text/[0.07] group-active:dark:bg-info-dark-container-text/[0.12]",
    ),
    success: twMerge(
        FabContentClassName,
        "MTfab-success group-hover:bg-success-container-text/[0.07] group-active:bg-success-container-text/[0.12] group-hover:dark:bg-success-dark-container-text/[0.07] group-active:dark:bg-success-dark-container-text/[0.12]",
    ),
    warning: twMerge(
        FabContentClassName,
        "MTfab-warning group-hover:bg-warning-container-text/[0.07] group-active:bg-warning-container-text/[0.12] group-hover:dark:bg-warning-dark-container-text/[0.07] group-active:dark:bg-warning-dark-container-text/[0.12]",
    ),
    error: twMerge(
        FabContentClassName,
        "MTfab-error group-hover:bg-error-container-text/[0.07] group-active:bg-error-container-text/[0.12] group-hover:dark:bg-error-dark-container-text/[0.07] group-active:dark:bg-error-dark-container-text/[0.12]",
    )
};

