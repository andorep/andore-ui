import {twMerge} from "tailwind-merge";

export const NavigationHeadlineBaseClassName = twMerge(
    "MTNavigationHeadline-root",
    "text-lg",
    "font-medium",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "flex flex-1 px-4.5 mb-4",
);

export const NavigationHeadlineCondensedClassName = twMerge(
    "MTNavigationHeadline-condensed",
    "text-sm",
    "mb-2",
);

export const NavigationHeadlineVerticalClassName = twMerge(
    "MTNavigationHeadline-vertical",
    "text-sm",
    "px-0",
    "w-16",
    "text-center",
    "flex flex-col items-center",
    "hidden",
);

export const NavigationHeadlineIconOnlyClassName = twMerge(
    "MTNavigationHeadline-iconOnly",
    "hidden",
);

export const NavigationHeadlineVariantClassNameMap: Record<string, string> = {
    standard: '',
    vertical: NavigationHeadlineVerticalClassName,
};

