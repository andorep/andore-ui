import {twMerge} from "tailwind-merge";
import {CardVariant} from "../Card";

export const CardContentClassName = "MTCard-content"
export const CardContentGuttersClassName = "p-3";

export const CardContentDisabledMapClassName: Record<CardVariant, string> = {
    elevated: '',
    filled: '',
    outlined: '"group/disabled:opacity-20"',
}


export const CardBaseContentMapClassName: Record<CardVariant, string> = {
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
    CardContentClassName,
    "border-inherit rounded-[inherit] transition-[inherit] duration-[inherit] ease-[inherit]",
    CardContentDisabledMapClassName.elevated,
    CardContentDisabledMapClassName.filled,
    CardContentDisabledMapClassName.outlined,
    CardBaseContentMapClassName.elevated,
    CardBaseContentMapClassName.filled,
    CardBaseContentMapClassName.outlined,
)

