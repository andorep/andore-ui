import {twMerge} from "tailwind-merge";

export const DialogCloseButtonPositionClassName = "appearance-none items-center justify-center rounded-full absolute top-[10px] right-[10px]";

export const DialogCloseButtonChildrenClassName = "*:w-6 *:h-6";

export const DialogCloseButtonEffectsClassName = "transition-colors ease-standardAccelerate duration-short4 hover:bg-surface-text/10 active:bg-surface-text/20 dark:hover:bg-surface-dark-text/10 dark:active:bg-surface-dark-text/20";

export const DialogCloseButtonBaseClassName = twMerge(
    DialogCloseButtonPositionClassName,
    DialogCloseButtonChildrenClassName,
    DialogCloseButtonEffectsClassName,
    "dialog-close-button-root flex items-center p-3 rounded-full text-surface-text-variant"
);
