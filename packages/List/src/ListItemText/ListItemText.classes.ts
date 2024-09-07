import {twMerge} from "tailwind-merge";

export const ListItemTextBaseClassName = twMerge(
    "MTListItemText-root",
    "text-base",
    "flex flex-col",
    "text-surface-text dark:text-surface-dark-text",
    "mr-auto",
);

export const ListItemTextSupportingTextBaseClassName = twMerge(
    "MTListItemText-supportingText",
    "text-sm",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
);
