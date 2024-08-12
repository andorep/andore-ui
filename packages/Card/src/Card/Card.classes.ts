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
export const DisabledStatesClassName = "MTCard-disabledStates";


export const CardDraggableClassName = twMerge(
    "MTCard-draggable cursor-grab ",
);

export const CardDraggableRootClassName = twMerge(
    "MTCard-draggable-root",
    "absolute -top-[9999px] -left-[9999px] z-[-1] p-4 bg-transparent"
);

export const CardDraggableImageClassName = "MTCard-draggable-image";

export const CardIsDraggingClassName = "MTCard-dragging opacity-25"


export const CardContentDisabledMapClassName: Record<CardVariant, string> = {
    elevated: '',
    filled: '',
    outlined: '"group/disabled:opacity-20"',
}


export const CardBaseMapClassName: Record<CardVariant, string> = {
    elevated: twMerge(
        CardBaseClassName,
        CardElevatedClassName,
        " bg-surface-container-low shadow-sm dark:bg-surface-dark-container-low dark:shadow-dark-sm",
        "text-surface-text dark:text-surface-dark-text",
        "[&.MTCard-draggable-image]:shadow-md dark:[&.MTCard-draggable-image]:shadow-dark-md",
    ),
    filled: twMerge(
        CardBaseClassName,
        CardFilledClassName,
        "bg-surface-container-highest dark:bg-surface-dark-container-highest",
        "text-surface-text dark:text-surface-dark-text",
        "[&.MTCard-draggable-image]:shadow-md dark:[&.MTCard-draggable-image]:shadow-dark-md",
    ),
    outlined: twMerge(
        CardBaseClassName,
        CardOutlinedClassName,
        "bg-surface dark:bg-surface-dark-DEFAULT",
        "border border-outline-variant dark:border-outline-dark-variant",
        "text-surface-text dark:text-surface-dark-text",
        "[&.MTCard-draggable-image]:shadow-md dark:[&.MTCard-draggable-image]:shadow-dark-md",
    ),
}

export const CardBaseStatesMapClassName: Record<CardVariant, string> = {
    elevated: twMerge(
        "cursor-pointer",
        "hover:shadow dark:hover:shadow-dark",
        "active:shadow-sm dark:active:shadow-sm",
    ),
    filled: twMerge(
        "hover:shadow-sm dark:hover:shadow-dark-sm",
        "active:shadow-none dark:active:shadow-dark-none",
    ),
    outlined: twMerge(
        "cursor-pointer",
        "hover:shadow-sm dark:hover:shadow-dark-sm",
        "active:shadow-none dark:active:shadow-dark-none",
    ),
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
        CardOutlinedClassName,
        "shadow-none dark:shadow-dark-none ",
        "border-outline/[0.15]"
    ),
}


export const CardBaseContentStatesMapClassName: Record<CardVariant, string> = {
    elevated: twMerge(
        "group-hover/elevated:bg-surface-text/[0.07] dark:group-hover/elevated:bg-surface-dark-text/[0.07]",
        "group-active/elevated:bg-surface-text/[0.15] dark:group-active/elevated:bg-surface-dark-text/[0.15]",
        "group-[.MTCard-draggable-image]/elevated:bg-surface-text/[0.2] dark:group-[.MTCard-draggable-image]/elevated:bg-surface-dark-text/[0.2]",
    ),
    filled: twMerge(
        "group-hover/filled:bg-surface-text/[0.07] dark:group-hover/filled:bg-surface-dark-text/[0.07]",
        "group-active/filled:bg-surface-text/[0.15] dark:group-active/filled:bg-surface-dark-text/[0.15]",
        "group-[.MTCard-draggable-image]/filled:bg-surface-text/[0.2] dark:group-[.MTCard-draggable-image]/filled:bg-surface-dark-text/[0.2]",
    ),
    outlined: twMerge(
        "group-[]/outlined:bg-transparent",
        "group-hover/outlined:bg-surface-text/[0.07] dark:group-hover/outlined:bg-surface-dark-text/[0.07]",
        "group-active/outlined:bg-surface-text/[0.15] dark:group-active/outlined:bg-surface-dark-text/[0.15]",
        "group-[.MTCard-draggable-image]/outlined:bg-surface-text/[0.2] dark:group-[.MTCard-draggable-image]/outlined:bg-surface-dark-text/[0.2]",
    ),
}

export const CardContentBaseClassName = twMerge(
    "border-inherit rounded-[inherit] transition-[inherit] duration-[inherit] ease-[inherit] w-full h-full",
    CardContentDisabledMapClassName.elevated,
    CardContentDisabledMapClassName.filled,
    CardContentDisabledMapClassName.outlined,
)

export const CardContentBaseStatesClassName = twMerge(
    CardContentBaseClassName,
    CardBaseContentStatesMapClassName.elevated,
    CardBaseContentStatesMapClassName.filled,
    CardBaseContentStatesMapClassName.outlined,
)
