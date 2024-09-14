import {twMerge} from "tailwind-merge";


export const ListItemBaseDividerClassName = twMerge(
    "MTListItem-divider",
    "group-[.MTList-divider]/list:border-b border-outline dark:border-outline-dark",
    "group-[.MTList-divider]/list:last:border-b-0",
);

export const ListItemBaseClassName = twMerge(
    "MTListItem-root",
    "transition-all duration-short4 ease-emphasized",
    "flex flex-row items-center gap-2",
    ListItemBaseDividerClassName
);

export const ListItemBaseClickableClassName = twMerge(
    "MTListItem-clickable",
    "cursor-pointer",
);


export const ListItemStateClassName = twMerge(
    "MTListItem-state",
    "flex flex-row items-center gap-2",
    "transition-[inherit] duration-[inherit] ease-[inherit]",
    "h-14 w-full",
    "px-4 py-2",
);

export const ListItemStateActionEffectClassName = twMerge(
    "hover:bg-surface-text/[0.08] dark:hover:bg-surface-dark-text/[0.08]",
    "focus:bg-surface-text/[0.12] dark:focus:bg-surface-dark-text/[0.12]",
    "active:bg-surface-text/[0.12] dark:active:bg-surface-dark-text/[0.12]",
);
