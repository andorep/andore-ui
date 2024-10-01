import {twMerge} from "tailwind-merge";

export const SnackbarTitleBaseClassName = twMerge(
    "MTSnackbarTitle-root",
    "text-base",
    "font-semibold",
    "text-surface-inverse-text dark:text-surface-dark-inverse-text",
)
