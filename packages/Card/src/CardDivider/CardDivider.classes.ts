import {twMerge} from "tailwind-merge";

export const CardDividerBaseClassName = twMerge(
    "MTCardDivider-root",
    "border-t border-divider-variant dark:border-divider-dark-variant"
);
