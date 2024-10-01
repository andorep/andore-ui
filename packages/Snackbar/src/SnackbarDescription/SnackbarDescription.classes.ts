import {twMerge} from "tailwind-merge";

export const SnackbarDescriptionBaseClassName = twMerge(
    "MTSnackbarDescription-root",
    "text-sm",
    "text-surface-inverse-text dark:text-surface-dark-inverse-text",
);
