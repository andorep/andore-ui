import {twMerge} from "tailwind-merge";

export const NavigationListBaseClassName = twMerge(
    "MTNavigationList-root",
    "flex flex-col",
    "px-3"
);

export const NavigationListBaseNoPaddingClassName = twMerge(
    "MTNavigationList-noPadding",
    "pl-0"
);

export const NavigationListBaseVerticalClassName = twMerge(
    "MTNavigationList-vertical",
    "gap-3"
);

export const NavigationListBaseVariantClassNameMap: Record<string, string> = {
    'no-padding': NavigationListBaseNoPaddingClassName,
    "vertical": NavigationListBaseVerticalClassName
};
