import {twMerge} from "tailwind-merge";

export const SnackbarCloseIconBaseClassName = twMerge(
    "MTSnackbarCloseIcon-root",
    "inline-flex",
    "text-sm",
    "rounded-full",
    "p-2",
    "*:w-5 *:h-5",
    "text-surface-inverse-text dark:text-surface-dark-inverse-text",
    "fill-surface-inverse-text dark:fill-surface-dark-inverse-text",
    "hover:bg-surface-inverse-text/[0.07] dark:hover:bg-surface-dark-inverse-text/[0.07]",
    "active:bg-surface-inverse-text/[0.15] dark:active:bg-surface-dark-inverse-text/[0.15]",
);
