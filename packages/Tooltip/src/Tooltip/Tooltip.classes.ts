import {twMerge} from "tailwind-merge";

export const TooltipBaseClassName = twMerge(
    "MTTooltip-root",
    "rounded-sm px-2 text-sm",
    "bg-surface-inverse text-surface-inverse-text",
);
