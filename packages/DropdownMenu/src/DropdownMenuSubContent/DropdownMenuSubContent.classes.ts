import {twMerge} from "tailwind-merge";

export const DropdownMenuSubContentAnimationClassName = "will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade";

export const DropdownMenuSubContentBaseClassName = twMerge(
    DropdownMenuSubContentAnimationClassName,
    "dropdown-menu-sub-content-root group min-w-[200px] max-w-[340px] w-full",
);
export const DropdownMenuSubSurfaceClassName = "dropdown-menu-sub-surface w-full h-full flex flex-col bg-surface-container-lowest rounded-md shadow focus:outline-none dark:bg-surface-dark-container-lowest dark:shadow-dark-md";

export const DropdownMenuSubTintClassName = "dropdown-menu-sub-tint w-full h-full flex py-2 flex-col rounded-[inherit] bg-primary/[0.07] dark:bg-primary/[0.07]";

export const DropdownMenuSubCondensedClassName = "dropdown-menu-content-condensed-root";
