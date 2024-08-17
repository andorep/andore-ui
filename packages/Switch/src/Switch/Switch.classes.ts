import {twMerge} from "tailwind-merge";

export const SwitchBaseClassName = twMerge(
    "MTSwitch-root group",
    "transition-all duration-short3 ease-emphasized",
    "w-14 h-8 rounded-full relative outline-none cursor-default",
    "border-2 border-outline bg-surface-container-highest dark:bg-surface-dark-container-highest dark:border-outline-dark",
);

export const SwitchRootClassName = twMerge(
    SwitchBaseClassName,
    "data-[state=checked]:bg-primary dark:data-[state=checked]:bg-primary-dark-DEFAULT",
);

export const SwitchBaseDisabledClassName = twMerge(
    SwitchRootClassName,
    "MTSwitch-disabled",
    "opacity-50 cursor-not-allowed",
);
