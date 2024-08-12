import {twMerge} from "tailwind-merge";

export const CardHeaderBaseClassName = twMerge(
    "MTCardHeader-root",
    "flex items-center gap-2",
)

export const CardHeaderGuttersClassName = " p-2"


export const CardHeaderTitleClassName = "text-sm font-medium";

export const CardHeaderSubtitleClassName = "text-sm text-gray-500";

export const CardHeaderTitleSubtitleContainerClassName = "flex flex-col flex-1";
