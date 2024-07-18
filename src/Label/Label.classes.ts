import {twMerge} from "tailwind-merge";

export const LabelBaseClassName = "label-root font-medium text-surface-text dark:text-surface-dark-text";

export const TypographyLabelLargeClassName = twMerge(
    LabelBaseClassName,
    "text-base leading-[20px] tracking-[0.1px]"
);

export const TypographyLabelMediumClassName = twMerge(
    LabelBaseClassName,
    "text-sm leading-[16px] tracking-[0.5px]"
);

export const TypographyLabelSmallClassName = twMerge(
    LabelBaseClassName,
    "text-xs leading-[16px] tracking-[0.5px]"
);
