import {twMerge} from "tailwind-merge";

export const SnackbarBaseClassName = twMerge(
    "MTSnackbar-root",
    "flex flex-row items-center",
    "rounded-sm",
    "bg-surface-inverse dark:bg-surface-dark-inverse",
    "shadow-md dark:shadow-dark-md",
    "min-h-12",
    "p-4",
    "gap-4",
    "has-[.MTSnackbarAction-root]:py-2",
    "has-[.MTSnackbarCloseIcon-root]:pr-2",
    "data-[state=open]:animate-snackbarShow",
    "data-[state=closed]:animate-snackbarHide",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
    "data-[swipe=end]:animate-swipeOut",
);

export const SnackbarViewPortClassName = twMerge(
    "MTSnackbar-viewport",
    "p-6",
    "w-fit max-w-[100vw]",
    "z-50",
    "outline-none list-none",
    "fixed bottom-4 left-1/2 transform -translate-x-1/2",
);


export const SnackbarTextContainerBaseClassName = twMerge(
    "MTSnackbar-textContainer",
    "flex flex-col",
    "gap-2",
);

export const SnackbarActionsContainerBaseClassName = twMerge(
    "MTSnackbar-actionsContainer",
    "flex flex-row",
);
