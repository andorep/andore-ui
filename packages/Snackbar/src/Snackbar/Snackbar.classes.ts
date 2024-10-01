import { twMerge } from "tailwind-merge";
import { SnackbarColor } from "./Snackbar.types";

export const SnackbarBaseClassName = twMerge(
  "MTSnackbar-root",
  "flex flex-row items-center group",
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

export const SnackbarBaseColorClassNameMap: Record<SnackbarColor, string> = {
  primary: twMerge(
    "MTSnackbar-primary",
    "bg-primary dark:bg-primary-dark-DEFAULT",
    "text-primary-text dark:text-primary-dark-text",
  ),
  secondary: twMerge(
    "MTSnackbar-secondary",
    "bg-secondary dark:bg-secondary-dark-DEFAULT",
    "text-secondary-text dark:text-secondary-dark-text",
  ),
  success: twMerge(
    "MTSnackbar-success",
    "bg-success dark:bg-success-dark-DEFAULT",
    "text-success-text dark:text-success-dark-text",
  ),
  warning: twMerge(
    "MTSnackbar-warning",
    "bg-warning dark:bg-warning-dark-DEFAULT",
    "text-warning-text dark:text-warning-dark-text",
  ),
  error: twMerge(
    "MTSnackbar-error",
    "bg-error dark:bg-error-dark-DEFAULT",
    "text-error-text dark:text-error-dark-text",
  ),
  info: twMerge(
    "MTSnackbar-info",
    "bg-info dark:bg-info-dark-DEFAULT",
    "text-info-text dark:text-info-dark-text",
  ),
};

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
