import {twMerge} from "tailwind-merge";

export const BottomSheetBaseClassName = twMerge(
    "MTBottomSheet-root",
    "fixed inset-x-0 bottom-0 z-50 mt-24 h-auto",
    "px-0 md:px-4",
);

export const BottomSheetContentClassName = twMerge(
    "MTBottomSheet-content",
    "flex flex-col w-full h-full",
    "rounded-t-2xl",
    "px-5 pb-5",
    "bg-surface-container-low dark:bg-surface-dark-container-low",
    "shadow-sm dark:shadow-dark-sm"
);

export const BottomSheetDragHandleClassName = twMerge(
    "MTBottomSheet-dragHandle",
    "h-1 w-8",
    "my-5",
    "bg-surface-text-variant dark:bg-surface-dark-text-variant",
    "rounded-full",
    "self-center"
);


export const BottomSheetOverlayClassName = twMerge(
    "MTBottomSheet-overlay",
    "fixed inset-0 z-50",
    "bg-surface-scrim/[0.32] dark:bg-surface-dark-scrim/[0.32]"
);
