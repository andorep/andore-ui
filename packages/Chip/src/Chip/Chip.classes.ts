import { twMerge } from "tailwind-merge";
import { ChipVariant } from "./Chip.types";

export const ChipRootClassName = twMerge(
  "MTChip-root group",
  "flex items-center justify-center",
  "rounded",
  "font-medium text-base",
  "transition-colorsShadow duration-short4 ease-emphasized",
  "h-8",
  "box-border",
);

export const ChipRootSelectedClassName = twMerge(
  "MTChip-selected",
  "bg-secondary-container dark:bg-secondary-dark-container",
  "border-0",
);

export const ChipRootElevatedClassName = twMerge(
  "MTChip-elevated",
  "bg-surface-container-low dark:bg-surface-dark-container-low",
  "text-surface-text-variant dark:text-surface-dark-text-variant",
  "shadow-sm dark:shadow-dark-sm",
  "hover:shadow dark:hover:shadow-dark-DEFAULT",
  "active:shadow-sm dark:active:shadow-dark-sm",
  "has-[.MTChip-endIcon:hover]:shadow-sm",
);

export const ChipRootOutlinedClassName = twMerge(
  "MTChip-outlined",
  "border border-solid",
  "border-outline-variant dark:border-outline-dark-variant",
  "text-surface-text-variant dark:text-surface-dark-text-variant",
);

export const ChipStateClassName = twMerge(
  "MTChip-state",
  "flex items-center justify-center",
  "rounded-[inherit]",
  "transition-[inherit] duration-[inherit] ease-[inherit]",
  "w-full h-full",
  "px-3",
  "has-[.MTChip-startIcon]:pl-0",
  "has-[.MTChip-endIcon]:pr-0",
  "hover:bg-surface-text-variant/[0.07] dark:hover:bg-surface-dark-text-variant/[0.07]",
  "active:bg-surface-text-variant/[0.15] dark:active:bg-surface-dark-text-variant/[0.15]",
  "group-[.MTChip-selected]:hover:bg-secondary-container-text/[0.07] dark:group-[.MTChip-selected]:hover:bg-secondary-dark-container-text/[0.07]",
  "group-[.MTChip-selected]:active:bg-secondary-container-text/[0.15] dark:group-[.MTChip-selected]:active:bg-secondary-dark-container-text/[0.15]",
  "has-[.MTChip-endIcon:hover]:bg-transparent",
);

export const ChipStartIconClassName = twMerge(
  "MTChip-startIcon",
  "flex items-center justify-center",
  "mx-2",
  "has-[img]:mr-1",
  "*:h-6 *:w-6",
);

export const ChipEndIconClassName = twMerge(
  "MTChip-endIcon",
  "flex items-center justify-center",
  "mx-2",
  "has-[img]:ml-1",
  "*:h-6 *:w-6",
);

export const ChipDeleteIconClassName = twMerge(
  "MTChip-deleteIcon",
  "cursor-pointer",
  "p-1",
  "*:h-5 *:w-5",
  "mx-1",
  "rounded-full",
  "transition-[inherit] duration-[inherit] ease-[inherit]",
  "hover:bg-surface-text-variant/[0.07] dark:hover:bg-surface-dark-text-variant/[0.07]",
  "active:bg-surface-text-variant/[0.15] dark:active:bg-surface-dark-text-variant/[0.15]",
);

export const ChipRootClassNameMap: Record<ChipVariant, string> = {
  elevated: twMerge(ChipRootElevatedClassName),
  outlined: twMerge(ChipRootOutlinedClassName),
};
