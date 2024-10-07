import {twMerge} from "tailwind-merge";

export const DrawerBaseClassName = twMerge(
    "MTDrawer-root",
    "fixed top-0 z-50 h-screen w-96",
    "data-[vaul-drawer-direction=left]:left-0",
    "data-[vaul-drawer-direction=right]:right-0",
);

export const DrawerContentClassName = twMerge(
    "MTDrawer-content",
    "overflow-auto",
    "flex flex-col w-full h-full",
    "rounded-r-2xl",
    "px-5 pb-5",
    "bg-surface-container-low dark:bg-surface-dark-container-low",
    "shadow-sm dark:shadow-dark-sm"
);

export const DrawerOverlayClassName = twMerge(
    "MTDrawer-overlay",
    "fixed inset-0 z-50",
    "bg-surface-scrim/[0.32] dark:bg-surface-dark-scrim/[0.32]"
);


export const DrawerTitleDescriptionClassName = twMerge(
    "MTDrawer-titleDescription",
    "hidden"
);
