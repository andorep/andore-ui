import {twMerge} from "tailwind-merge";
import {TypographyColors, TypographySizes, TypographyVariants} from "./Typography.types";

export const TypographyBaseClassName = "typography-root text-surface-text dark:text-surface-dark-text";

export const TypographyDisplayBaseClassName = twMerge(
    TypographyBaseClassName,
    "typography-display font-bold",
);

export const TypographyHeadlineBaseClassName = twMerge(
    TypographyBaseClassName,
    "typography-headline font-bold",
);

export const TypographyTitleBaseClassName = twMerge(
    TypographyBaseClassName,
    "typography-title font-bold",
);

export const TypographyBodyBaseClassName = twMerge(
    TypographyBaseClassName,
    "typography-body",
);

export const TypographyDisplayLargeClassName = twMerge(
    TypographyDisplayBaseClassName,
    "text-9xl leading-[64px] tracking-[-0.25px]",
);

export const TypographyDisplayMediumClassName = twMerge(
    TypographyDisplayBaseClassName,
    "text-8xl leading-[52px] tracking-normal",
);

export const TypographyDisplaySmallClassName = twMerge(
    TypographyDisplayBaseClassName,
    "text-7xl leading-[44px] tracking-normal",
);

// Base class for Headline typography

export const TypographyHeadlineLargeClassName = twMerge(
    TypographyHeadlineBaseClassName,
    "text-6xl leading-[40px] tracking-normal",
);

export const TypographyHeadlineMediumClassName = twMerge(
    TypographyHeadlineBaseClassName,
    "text-5xl leading-[36px] tracking-normal",
);

export const TypographyHeadlineSmallClassName = twMerge(
    TypographyHeadlineBaseClassName,
    "text-4xl leading-[32px] tracking-normal",
);

export const TypographyTitleLargeClassName = twMerge(
    TypographyTitleBaseClassName,
    "text-3xl leading-[28px] tracking-normal",
);

export const TypographyTitleMediumClassName = twMerge(
    TypographyTitleBaseClassName,
    "text-2xl leading-[24px] tracking-[0.15px]",
);

export const TypographyTitleSmallClassName = twMerge(
    TypographyTitleBaseClassName,
    "text-xl leading-[20px] tracking-[0.1px]",
);

// Base class for Body typography

export const TypographyBodyLargeClassName = twMerge(
    TypographyBodyBaseClassName,
    "text-lg leading-[24px] tracking-[0.5px]",
);

export const TypographyBodyMediumClassName = twMerge(
    TypographyBodyBaseClassName,
    "text-base leading-[20px] tracking-[0.25px]",
);

export const TypographyBodySmallClassName = twMerge(
    TypographyBodyBaseClassName,
    "text-sm leading-[16px] tracking-[0.4px]",
);

export const TypographyMapClassName: Record<
    TypographyVariants,
    Record<TypographySizes, string>
> = {
    display: {
        lg: TypographyDisplayLargeClassName,
        md: TypographyDisplayMediumClassName,
        sm: TypographyDisplaySmallClassName,
    },
    headline: {
        lg: TypographyHeadlineLargeClassName,
        md: TypographyHeadlineMediumClassName,
        sm: TypographyHeadlineSmallClassName,
    },
    title: {
        lg: TypographyTitleLargeClassName,
        md: TypographyTitleMediumClassName,
        sm: TypographyTitleSmallClassName,
    },
    body: {
        lg: TypographyBodyLargeClassName,
        md: TypographyBodyMediumClassName,
        sm: TypographyBodySmallClassName,
    },
};

export const TypographyColorMapClassName: Record<TypographyColors, string> = {
    primary: "text-primary dark:text-primary-dark-DEFAULT",
    secondary: "text-secondary dark:text-secondary-dark-DEFAULT",
    info: "text-info dark:text-info-dark-DEFAULT",
    success: "text-success dark:text-success-dark-DEFAULT",
    warning: "text-warning dark:text-warning-dark-DEFAULT",
    error: "text-error dark:text-error-dark-DEFAULT",
};
