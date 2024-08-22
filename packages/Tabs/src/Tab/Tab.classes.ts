import {twMerge} from "tailwind-merge";

export const TabBaseClassName = twMerge(
    "MTTab-root group/tab",
    "h-12 px-4",
    "flex flex-col items-center justify-center flex-1",
    "transition-colors duration-short4 ease-in-out",
    "text-base leading-[20px] tracking-[0.25px] font-semibold",
    "text-surface-text dark:text-surface-dark-text",
    "hover:bg-surface-text/[0.07] dark:hover:bg-surface-dark-text/[0.07]",
    "active:bg-surface-text/[0.15] dark:active:bg-surface-dark-text/[0.15]",
    "data-[state='active']:text-primary dark:data-[state='active']:text-primary-dark-DEFAULT",
    "data-[state='active']:hover:bg-primary/[0.07] dark:data-[state='active']:hover:bg-primary-dark-DEFAULT/[0.07]",
    "data-[state='active']:active:bg-primary/[0.15] dark:data-[state='active']:active:bg-primary-dark-DEFAULT/[0.15]",
    "data-[state='active']:border-b-primary dark:data-[state='active']:border-b-primary-dark-DEFAULT",
    "group-[.MTTabsList-inline]:border-b border-outline-variant",
    "group-[.MTTabsList-inline]:h-12"
);

export const TabBaseContentClassName = twMerge(
    "MTTab-content",
    "flex flex-col items-center justify-center",
    "relative",
    "h-full",
    "group-[.MTTabsList-inline]:flex-row",
);


export const TabBaseWithIconClassName = twMerge(
    "h-16",
);

export const TabIconClassName = twMerge(
    "MTTab-icon",
    "relative",
    "w-6 h-6",
    "group-[.MTTabsList-inline]:mr-2",
);


export const TabBadgeClassName = twMerge(
    "MTTab-badge",
    "min-w-4 h-4 px-1",
    "text-[11px] font-semibold",
    "rounded-full",
    "inline-flex box-content",
    "bg-error dark:bg-error-dark-DEFAULT",
    "text-error-text dark:text-error-dark-text",
    "flex items-center justify-center",
);

export const TabBadgeInlineClassName = twMerge(
    "group-[:not(.MTTabsList-inline)]:hidden",
    "ml-1"
);

export const TabBadgeNotInlineClassName = twMerge(
    "group-[.MTTabsList-inline]:hidden",
    "absolute top-0 right-0",
    "transform translate-x-[calc(100%-4px)]",
);

export const TabBadgeSingleDigitClassName = twMerge(
    "MTTab-badge-single-digit",
    "w-4 h-4 px-0",
);

export const TabBadgeDotClassName = twMerge(
    "MTTab-badge-dot",
    "w-2 h-2 min-w-2 min-h-2 max-w-2 max-h-2",
    "rounded-full",
);


export const TabActivatorIndicatorClassName = twMerge(
    "MTTab-activator",
    "hidden",
    "group-[:not(.MTTabsList-inline)]:group-data-[state='active']/tab:block",
    "h-1 w-full",
    "absolute bottom-0 left-0 right-0",
    "rounded-t-sm",
    "bg-primary dark:bg-primary-dark-DEFAULT",
);
