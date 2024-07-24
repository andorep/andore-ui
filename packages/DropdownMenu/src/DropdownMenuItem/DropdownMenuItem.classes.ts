import {twMerge} from "tailwind-merge";

export const DropdownMenuItemColorClassName = "hover:bg-surface-text/10 dark:hover:bg-surface-dark-text/10 active:bg-surface-text/15 dark:active:bg-surface-dark-text/15";
export const DropdownMenuItemTextClassName = "text-surface-text dark:text-surface-dark-text";

export const DropdownMenuItemAtLeastOneLeadingClassName = "group-has-[.dropdown-menu-item-leading-root]:[&:not(:has(.dropdown-menu-item-leading-root))]:pl-12 has-[.dropdown-menu-item-indicator-root]:!pl-3";

export const DropdownMenuItemCondensedClassName = " group-[.dropdown-menu-content-condensed-root]:py-1";

export const DropdownMenuItemBaseClassName = twMerge(
    DropdownMenuItemColorClassName,
    DropdownMenuItemTextClassName,
    DropdownMenuItemAtLeastOneLeadingClassName,
    "dropdown-menu-item-root text-secondary-container-text px-3 py-4 flex items-center text-base outline-none cursor-pointer",
    DropdownMenuItemCondensedClassName
);
