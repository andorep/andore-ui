import {twMerge} from "tailwind-merge";

export const LinearProgressIndicatorIndeterminateClassName = "linear-progress-indicator-indeterminate group-data-[state=indeterminate]:animate-progressIndeterminate";

export const LinearProgressIndicatorBaseClassName = twMerge(
    "linear-progress-indicator-root bg-primary dark:bg-primary-dark-DEFAULT  w-full h-full transition-transform duration-extraLong1 ease-emphasizedAccelerate",
    LinearProgressIndicatorIndeterminateClassName,
);
