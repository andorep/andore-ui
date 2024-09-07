import {twMerge} from "tailwind-merge";

export const ListBaseClassName = twMerge(
    "MTList-root",
    "flex flex-col",
    "group/list",
);

export const ListBaseDividerClassName = twMerge(
    "MTList-divider",
);
