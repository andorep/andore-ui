import {FabColor, FabSize} from "./Fab.types";
import {twMerge} from "tailwind-merge";

export const FabBaseClassName = "MTfab-root group font-semibold bg-surface-container-low shadow-md active:shadow-sm rounded-md inline-flex items-center justify-center transition-colorsShadow duration-short3 ease-emphasizedAccelerate";

export const FabContentClassName = "MTfab-content box-content p-4 rounded-[inherit] transition-[inherit] duration-[inherit] ease-[inherit] flex items-center justify-center group-[.MTfab-small]:min-h-6 group-[.MTfab-small]:min-w-6 group-[.MTfab-medium]:min-h-6 group-[.MTfab-medium]:min-w-6 group-[.MTfab-large]:min-h-9 group-[.MTfab-large]:min-w-9";


export const FabIconClassName = "MTfab-icon inline-flex group-[.MTfab-small]:h-6 group-[.MTfab-small]:w-6 group-[.MTfab-medium]:h-6 group-[.MTfab-medium]:w-6 group-[.MTfab-large]:h-9 group-[.MTfab-large]:w-9";

export const FabTextClassName = "MTfab-text";


export const FabBaseMapClassName: Record<FabColor, string> = {
    primary: twMerge(
        FabBaseClassName,
        "MTfab-primary bg-primary-container text-primary-container-text dark:bg-primary-dark-container dark:text-primary-dark-container-text",
    ),
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
        "MTfab-primary group-hover:bg-primary-container-text/[0.07] group-active:bg-primary-container-text/[0.12] group-focus:dark:bg-primary-dark-container-text/[0.07] group-active:dark:bg-primary-dark-container-text/[0.12]",
    ),
};

