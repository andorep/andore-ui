import { twMerge } from "tailwind-merge";
import { DialogContentSizes } from "./DialogContent.types";

export const DialogContentBaseClassName =
    "group dialog-content-root data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] focus:outline-none";

export const DialogContentLargeClassName = twMerge(
    DialogContentBaseClassName,
    "dialog-content-large max-w-[800px] w-full",
);

export const DialogContentMediumClassName = twMerge(
    DialogContentBaseClassName,
    "dialog-content-medium max-w-[500px] w-full",
);

export const DialogContentSmallClassName = twMerge(
    DialogContentBaseClassName,
    "dialog-content-small max-w-[300px] w-full",
);

export const DialogContentSurfaceClassName = "w-full h-full flex flex-col bg-surface-container-lowest rounded-3xl group-[.dialog-content-full]:rounded-none shadow-md focus:outline-none dark:bg-surface-dark-container-lowest dark:shadow-dark-md";

export const DialogContentTintClassName = "w-full h-full flex flex-col rounded-[inherit] group-[.dialog-content-full]:rounded-none p-6 bg-primary/[0.07] dark:bg-primary/[0.07]";


export const DialogContentMapClassName: Record<
    DialogContentSizes,
    string
> = {
    lg: DialogContentLargeClassName,
    md: DialogContentMediumClassName,
    sm: DialogContentSmallClassName,
};
