import { twMerge } from "tailwind-merge";
import { AlertDialogContentSizes } from "./AlertDialogContent.types";

export const AlertDialogContentBaseClassName =
  "group alert-dialog-content-root data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] focus:outline-none";

export const AlertDialogContentLargeClassName = twMerge(
  AlertDialogContentBaseClassName,
  "alert-dialog-content-large max-w-[800px] w-full",
);

export const AlertDialogContentMediumClassName = twMerge(
  AlertDialogContentBaseClassName,
  "alert-dialog-content-medium max-w-[500px] w-full",
);

export const AlertDialogContentSmallClassName = twMerge(
  AlertDialogContentBaseClassName,
  "alert-dialog-content-small max-w-[300px] w-full",
);

export const AlertDialogContentSurfaceClassName = "w-full h-full flex flex-col bg-surface-container-lowest rounded-xl group-[.alert-dialog-content-full]:rounded-none shadow-md focus:outline-none dark:bg-surface-dark-container-lowest dark:shadow-dark-md";

export const AlertDialogContentTintClassName = "w-full h-full flex flex-col rounded-[inherit] group-[.alert-dialog-content-full]:rounded-none p-6 bg-primary/[0.07] dark:bg-primary/[0.07]";


export const AlertDialogContentMapClassName: Record<
  AlertDialogContentSizes,
  string
> = {
  lg: AlertDialogContentLargeClassName,
  md: AlertDialogContentMediumClassName,
  sm: AlertDialogContentSmallClassName,
};
