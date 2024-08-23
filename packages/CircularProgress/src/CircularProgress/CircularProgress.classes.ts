import {twMerge} from "tailwind-merge";

export const CircularProgressBaseClassName = twMerge(
    "MTCircularProgress-root",
    "w-12 h-12",
    "animate-circularProgressIndeterminate",
    "fill-primary dark:fill-primary-dark-DEFAULT",
)
