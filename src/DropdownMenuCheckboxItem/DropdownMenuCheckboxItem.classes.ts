import {twMerge} from "tailwind-merge";

export const DropdownMenuCheckboxItemHoverClassName = "hover:bg-surface-text/10 dark:hover:bg-surface-dark-text/10 active:bg-surface-text/15 dark:active:bg-surface-dark-text/15 data-[state=checked]:hover:bg-primary/20 dark:data-[state=checked]:hover:bg-primary-dark/20 data-[state=checked]:active:bg-primary/25 dark:data-[state=checked]:active:bg-primary-dark/25";
export const DropdownMenuCheckboxItemColorClassName = "data-[state=checked]:bg-primary/15 dark:data-[state=checked]:bg-primary-dark/15";
export const DropdownMenuCheckboxItemTextClassName = "text-surface-text dark:text-surface-dark-text";

export const DropdownMenuCheckboxItemAtLeastOneLeadingClassName = "group-has-[.dropdown-menu-item-leading-root]:[&:not(:has(.dropdown-menu-item-leading-root))]:pl-12 has-[.dropdown-menu-item-indicator-root]:!pl-3";

export const DropdownMenuCheckboxItemClassName = " group-[.dropdown-menu-content-condensed-root]:py-1";

export const DropdownMenuCheckboxItemBaseClassName = twMerge(
    DropdownMenuCheckboxItemHoverClassName,
    DropdownMenuCheckboxItemColorClassName,
    DropdownMenuCheckboxItemTextClassName,
    DropdownMenuCheckboxItemAtLeastOneLeadingClassName,
    "dropdown-menu-checkbox-item-root text-secondary-container-text px-3 py-4 flex items-center text-base outline-none cursor-pointer",
    DropdownMenuCheckboxItemClassName,
);
