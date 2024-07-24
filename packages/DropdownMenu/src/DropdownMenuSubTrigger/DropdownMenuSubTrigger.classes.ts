import {twMerge} from "tailwind-merge";

export const DropdownMenuSubTriggerColorClassName = "hover:bg-surface-text/10 dark:hover:bg-surface-dark-text/10";
export const DropdownMenuSubTriggerTextClassName = "text-surface-text dark:text-surface-dark-text";

export const DropdownMenuSubTriggerAtLeastOneLeadingClassName = "group-has-[.dropdown-menu-item-leading-root]:[&:not(:has(.dropdown-menu-item-leading-root))]:pl-12";

export const DropdownMenuSubTriggerCondensedClassName = " group-[.dropdown-menu-content-condensed-root]:py-1";

export const DropdownMenuSubTriggerBaseClassName = twMerge(
    DropdownMenuSubTriggerColorClassName,
    DropdownMenuSubTriggerTextClassName,
    DropdownMenuSubTriggerAtLeastOneLeadingClassName,
    "dropdown-menu-sub-trigger-root text-secondary-container-text px-3 py-4 flex items-center justify-between text-base outline-none cursor-pointer",
    DropdownMenuSubTriggerCondensedClassName
);
