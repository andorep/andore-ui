import { twMerge } from "tailwind-merge";

export const SnackbarActionBaseClassName = twMerge(
  "MTSnackbarAction-root",
  "inline-flex",
  "text-sm",
  "rounded-full",
  "p-2",
  "text-surface-inverse-primary dark:text-surface-dark-inverse-primary",
  "hover:bg-surface-inverse-primary/[0.07] dark:hover:bg-surface-dark-inverse-primary/[0.07]",
  "active:bg-surface-inverse-primary/[0.15] dark:active:bg-surface-dark-inverse-primary/[0.15]",
);
