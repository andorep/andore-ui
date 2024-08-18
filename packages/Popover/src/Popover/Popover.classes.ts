import {twMerge} from "tailwind-merge";

export const PopoverBaseClassName = twMerge(
    "MTPopover-root",
    "rounded-md *:rounded-[inherit]",
    "shadow dark:shadow-dark-DEFAULT",
    "bg-surface-container dark:bg-surface-dark-container",
)


export const PopoverBaseGuttersClassName = twMerge(
    "MTPopover-gutters",
    "pt-3 pb-2",
)

export const PopoverDefaultWidth = "w-80";
