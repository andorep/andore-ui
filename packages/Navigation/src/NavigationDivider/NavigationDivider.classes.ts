import {twMerge} from "tailwind-merge";



export const NavigationDividerBaseClassName = twMerge(
    "MTNavigationDivider-root",
    "h-px w-full",
    "bg-outline dark:bg-outline-dark my-4",
)

export const NavigationDividerDisableSpaceBetweenClassName = "my-0";
