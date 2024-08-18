import {twMerge} from "tailwind-merge";

export const PopoverHeaderBaseClassName = twMerge(
    "MTPopoverHeader-root",
    "pb-1",
    "text-base leading-[20px] tracking-[0.25px] font-semibold",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
);

export const PopoverHeaderGuttersClassName = twMerge(
    "MTPopoverHeader-gutters",
    "px-4",
);
