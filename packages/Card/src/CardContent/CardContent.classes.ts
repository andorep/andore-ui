import {twMerge} from "tailwind-merge";

export const CardContentRootBaseClassName = "MTCard-content"
export const CardContentRootGuttersClassName = "p-3";

export const CardContentRootClassName = twMerge(
    CardContentRootBaseClassName,
    "transition-[inherit] duration-[inherit] ease-[inherit]",
)

