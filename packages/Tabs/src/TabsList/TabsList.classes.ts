import {twMerge} from "tailwind-merge";

export const TabsListBaseClassName = twMerge(
    "MTTabsList-root group",
    "flex flex-row",
    "bg-surface dark:bg-surface-dark-DEFAULT",
    "border-b border-outline-variant",
    "overflow-x-auto",
)

export const TabsListInlineClassName = twMerge(
    "MTTabsList-inline",
    "border-b-0",
)

