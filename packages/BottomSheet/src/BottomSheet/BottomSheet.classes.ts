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

export const BottomSheetHeaderClassName = twMerge(
    "MTBottomSheet-title",
    "flex flex-col pl-4 mb-3 gap-1"
);

export const BottomSheetHeaderHiddenClassName = twMerge(
    "MTBottomSheet-headerHidden",
    "hidden"
);

export const BottomSheetTitleClassName = twMerge(
    "MTBottomSheet-title",
    "typography-root text-surface-text dark:text-surface-dark-text typography-title font-bold text-xl leading-[26px] tracking-[0.1px]"
);
export const BottomSheetTitleHiddenClassName = twMerge(
    "MTBottomSheet-titleHidden",
    "w-1 h-1 p-0 m-[-1px] overflow-hidden clip-rect(0,0,0,0) whitespace-nowrap border-0 absolute",
    "focus:outline-none focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:clip-auto focus:whitespace-normal focus:border-none"
);

export const BottomSheetDescriptionClassName = twMerge(
    "MTBottomSheet-description",
    "typography-root dark:text-surface-dark-text typography-body text-base leading-[20px] tracking-[0.25px] text-secondary"
);


export const BottomSheetOverlayClassName = twMerge(
    "MTBottomSheet-overlay",
    "fixed inset-0 z-50",
    "bg-surface-scrim/[0.32] dark:bg-surface-dark-scrim/[0.32]"
);
