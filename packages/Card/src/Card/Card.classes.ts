import {twMerge} from "tailwind-merge";
import {CardVariant} from "./Card.types";


export const CardBaseClassName = "MTCard-root group bg-card-container-low rounded-md text-card-text dark:bg-card-dark-container-low dark:text-card-dark-text transition-colorsShadow duration-medium2 ease-emphasized"

export const CardBaseDisabledClassName = twMerge(
    CardBaseClassName,
    "pointer-events-none"
);

export const CardElevatedClassName = "MTCard-elevated group/elevated";
export const CardFilledClassName = "MTCard-filled group/filled";
export const CardOutlinedClassName = "MTCard-outlined group/outlined";

export const CardBaseElevatedClassName = twMerge(
    CardBaseClassName,
    CardElevatedClassName,
    "cursor-pointer bg-surface-container-low shadow-sm dark:bg-surface-dark-container-low dark:shadow-dark-sm",
    "hover:shadow dark:hover:shadow-dark",
    "active:shadow-sm dark:active:shadow-sm",
    "text-surface-text dark:text-surface-dark-text",
    "[&.MTCard-draggable-image]:shadow-md dark:[&.MTCard-draggable-image]:shadow-dark-md",
)

export const CardBaseFilledClassName = twMerge(
    CardBaseClassName,
    CardFilledClassName,
    "bg-surface-container-highest dark:bg-surface-dark-container-highest",
    "text-surface-text dark:text-surface-dark-text",
    "hover:shadow-sm dark:hover:shadow-dark-sm",
    "active:shadow-none dark:active:shadow-dark-none",
    "[&.MTCard-draggable-image]:shadow-md dark:[&.MTCard-draggable-image]:shadow-dark-md",
);

export const CardBaseOutlinedClassName = twMerge(
    CardBaseClassName,
    CardOutlinedClassName,
    "bg-surface dark:bg-surface-dark-DEFAULT",
    "border border-outline-variant dark:border-outline-dark-variant",
    "hover:shadow-sm dark:hover:shadow-dark-sm",
    "active:shadow-none dark:active:shadow-dark-none",
    "text-surface-text dark:text-surface-dark-text",
    "[&.MTCard-draggable-image]:shadow-md dark:[&.MTCard-draggable-image]:shadow-dark-md",
);




export const CardDraggableClassName = twMerge(
    "MTCard-draggable cursor-grab ",
);

export const CardDraggableRootClassName = twMerge(
    "MTCard-draggable-root",
    "absolute -top-[9999px] -left-[9999px] z-[-1] p-4 bg-transparent"
);

export const CardDraggableImageClassName = "MTCard-draggable-image";

export const CardIsDraggingClassName = "MTCard-dragging opacity-25"

export const CardBaseMapClassName: Record<CardVariant, string> = {
    elevated: CardBaseElevatedClassName,
    filled: CardBaseFilledClassName,
    outlined: CardBaseOutlinedClassName,
}



export const CardDisabledMapClassName: Record<CardVariant, string> = {
    elevated: twMerge(
        CardBaseDisabledClassName,
        CardElevatedClassName,
        "opacity-35",
        "shadow-sm dark:shadow-dark-sm",
        " bg-surface dark:bg-surface-dark-DEFAULT",
        "text-surface-text dark:text-surface-dark-text"
    ),
    filled: twMerge(
        CardBaseDisabledClassName,
        CardFilledClassName,
        "opacity-20",
        "shadow-none dark:shadow-dark-none ",
        "bg-surface-text-variant dark:bg-surface-dark-text-variant"
    ),
    outlined: twMerge(
        CardBaseDisabledClassName,
        CardBaseOutlinedClassName,
        "shadow-none dark:shadow-dark-none ",
        "border-outline/[0.15]"
    ),
}


