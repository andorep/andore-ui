import {twMerge} from "tailwind-merge";

export const NavigationItemBaseClassName = twMerge(
    "MTNavigationItem-root",
    "transition-colorsShadow duration-short3 ease-emphasizedAccelerate",
    "group",
    "w-full",
    "cursor-pointer",
    "rounded-full",
    "text-base font-medium",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "hover:text-surface-text dark:hover:text-surface-dark-text",
);

export const NavigationItemBaseActiveClassName = twMerge(
    "MTNavigationItem-active",
    "font-bold",
    "bg-secondary-container dark:bg-secondary-dark-container",
    "text-secondary-container-text dark:text-secondary-dark-container-text",
    "hover:text-secondary-container-text dark:hover:text-secondary-dark-container-text",
);

export const NavigationItemBaseCondensedClassName = twMerge(
    "MTNavigationItem-condensed",
    "text-sm"
);

export const NavigationItemBaseIconOnlyClassName = twMerge(
    "MTNavigationItem-iconOnly",
    "w-fit"
);

export const NavigationItemBaseNoPaddingClassName = twMerge(
    "MTNavigationItem-noPadding",
    "rounded-l-none"
);

export const NavigationItemBaseVerticalClassName = twMerge(
    "MTNavigationItem-vertical",
    "flex flex-col items-center",
    "bg-transparent",
    "w-16 m-h-14",
    "text-sm",
);


export const NavigationItemBaseVariantClassNameMap: Record<string, string> = {
    'no-padding': NavigationItemBaseNoPaddingClassName,
    'vertical': NavigationItemBaseVerticalClassName,
};

export const NavigationItemStateClassName = twMerge(
    "MTNavigationItem-state",
    "transition-[inherit] duration-[inherit] ease-[inherit]",
    "text-[inherit]",
    "w-full h-14 flex items-center px-4 rounded-[inherit]",
    "hover:bg-surface-text-variant/[0.07] dark:hover:bg-surface-dark-text/[0.07]",
    "active:bg-surface-text-variant/[0.12] dark:active:bg-surface-dark-text/[0.12]",
    "group-[.MTNavigationItem-active]:hover:bg-secondary-container-text/[0.07] dark:group-[.MTNavigationItem-active]:hover:bg-secondary-dark-container-text/[0.07]",
    "group-[.MTNavigationItem-active]:active:bg-secondary-container-text/[0.12] dark:group-[.MTNavigationItem-active]:active:bg-secondary-dark-container-text/[0.12]",
    "group-[.MTNavigationItem-condensed]:h-8",
    "group-[.MTNavigationItem-iconOnly]:px-4",
    "group-[.MTNavigationItem-iconOnly]:w-fit",
    "group-[.MTNavigationItem-vertical]:w-full",
    "group-[.MTNavigationItem-vertical]:relative",
    "group-[.MTNavigationItem-vertical]:h-8",
    "group-[.MTNavigationItem-vertical]:justify-center",
    "group-[.MTNavigationItem-vertical]:group-[.MTNavigationItem-active]:bg-secondary-container dark:group-[.MTNavigationItem-vertical]:group-[.MTNavigationItem-active]:bg-secondary-dark-container",
);

export const NavigationItemIconClassName = twMerge(
    "MTNavigationItem-icon",
    "w-6 h-6 mr-3",
    "shrink-0",
    "group-[.MTNavigationItem-condensed]:w-5 h-5",
    "group-[.MTNavigationItem-iconOnly]:mr-0",
    "group-[.MTNavigationItem-vertical]:mr-0",
    "*:w-full *:h-full",
);

export const NavigationItemLabelClassName = twMerge(
    "MTNavigationItem-label",
    "flex-1",
    "max-w-[calc(100%-]",
    "group-[.MTNavigationItem-vertical]:mt-1",
);

export const NavigationItemTrailingClassName = twMerge(
    "MTNavigationItem-trailing",
    "font-medium",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-[.MTNavigationItem-condensed]:text-sm",
    "group-[.MTNavigationItem-vertical]:absolute",
    "group-[.MTNavigationItem-vertical]:top-0",
    "group-[.MTNavigationItem-vertical]:left-1/2",
    "group-[.MTNavigationItem-vertical]:translate-x-0",
    "group-[.MTNavigationItem-vertical]:text-xs",
    "group-[.MTNavigationItem-vertical]:bg-error",
    "group-[.MTNavigationItem-vertical]:text-error-text",
    "group-[.MTNavigationItem-vertical]:px-1",
    "group-[.MTNavigationItem-vertical]:rounded-full",
);

export const NavigationItemTrailingDotClassName = twMerge(
    "MTNavigationItem-trailingDot",
    "group-[.MTNavigationItem-vertical]:translate-x-1",
    "w-2 h-2",
    "p-0"
);
