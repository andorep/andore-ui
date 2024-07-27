import {twMerge} from "tailwind-merge";
import {SurfaceVariant} from "./Surface.types";

export const SurfaceBaseClassName = "MTSurface-root bg-surface-container-low rounded-md text-surface-text dark:bg-surface-dark-container-low dark:text-surface-dark-text"

export const SurfaceBaseElevatedClassName = twMerge(
    SurfaceBaseClassName,
    "MTSurface-elevated shadow-md dark:shadow-dark-md"
)

export const SurfaceBaseFilledClassName = twMerge(
    SurfaceBaseClassName,
    "MTSurface-filled"
);

export const SurfaceBaseOutlinedClassName = twMerge(
    SurfaceBaseClassName,
    "MTSurface-outlined border border-neutral-300 dark:border-neutral-700"
);


export const SurfaceBaseContentClassName = "MTSurface-content border-inherit rounded-[inherit] p-3"

export const SurfaceBaseContentElevatedClassName = twMerge(
    SurfaceBaseContentClassName,
    "bg-primary/[0.07] dark:bg-primary-dark-DEFAULT/[0.07]"
)

export const SurfaceBaseContentFilledContentClassName = twMerge(
    SurfaceBaseContentClassName,
    "bg-primary/[0.2] dark:bg-primary-dark-DEFAULT/[0.2]"
)

export const SurfaceBaseContentOutlinedClassName = twMerge(
    SurfaceBaseContentClassName,
    "bg-transparent"
)

export const SurfaceBaseMapClassName: Record<SurfaceVariant, string> = {
    elevated: SurfaceBaseElevatedClassName,
    filled: SurfaceBaseFilledClassName,
    outlined: SurfaceBaseOutlinedClassName,
}


export const SurfaceBaseContentMapClassName: Record<SurfaceVariant, string> = {
    elevated: SurfaceBaseContentElevatedClassName,
    filled: SurfaceBaseContentFilledContentClassName,
    outlined: SurfaceBaseContentOutlinedClassName,
}
