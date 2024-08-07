import {twMerge} from "tailwind-merge";

export const DividerMaterialClassName = "bg-outline-variant dark:bg-outline-dark-variant data-[orientation=horizontal]:my-4 data-[orientation=vertical]:mx-4";

export const DividerRadixClassName = "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px";

export const DividerBaseClassName = twMerge(
    DividerRadixClassName,
    DividerMaterialClassName,
    "MTDivider-root"
)

export const DividerDisableSpaceBetweenClassName = "data-[orientation=horizontal]:my-0 data-[orientation=vertical]:mx-0";
