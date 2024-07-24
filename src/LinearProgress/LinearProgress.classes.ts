import {LinearProgressSizes} from "./LinearProgress.types.ts";
import {twMerge} from "tailwind-merge";

export const LinearProgressBaseColorClassName = "bg-primary/10 dark:bg-primary-dark-DEFAULT/10";

export const LinearProgressBaseClassName = twMerge(
    LinearProgressBaseColorClassName,
    "linear-progress-root group relative overflow-hidden rounded-full w-full transform-[translateZ(0)]"
);

export const LinearProgressSizeMapClassName: Record<LinearProgressSizes, string> = {
    sm: "h-[4px]",
    md: "h-[15px]",
};
