import {twMerge} from "tailwind-merge";

export const PopoverContentBaseClassName = twMerge(
    "MTPopoverContent-root",
    "text-base leading-[20px] tracking-[0.25px] font-normal"
);

export const PopoverContentGuttersClassName = twMerge(
    "MTPopoverContent-gutters",
    "px-4"
);
