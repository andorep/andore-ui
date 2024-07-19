import {twMerge} from "tailwind-merge";

export const DropdownMenuItemColorClassName = "hover:bg-surface-text/10 dark:hover:bg-surface-dark-text/10";

export const DropdownMenuItemBaseClassName = twMerge(
    DropdownMenuItemColorClassName,
    "dropdown-menu-item-root text-secondary-container-text px-3 py-4 flex items-center justify-between text-base outline-none cursor-pointer",
);

export const DropdownMenuItemTextClassName = "text-surface-text dark:text-surface-dark-text";

export const DropdownMenuItemTrailingIconClassName = "text-surface-text-variant dark:text-surface-dark-text-variant";
