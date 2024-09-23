import { twMerge } from "tailwind-merge";
import { SurfaceElevation, SurfaceVariant } from "./Surface.types";

export const SurfaceBaseClassName =
  "MTSurface-root bg-surface-container-low rounded-md text-surface-text dark:bg-surface-dark-container-low dark:text-surface-dark-text";

export const SurfaceBaseElevatedClassName = twMerge(
  SurfaceBaseClassName,
  "MTSurface-elevated shadow-md dark:shadow-dark-md",
);

export const SurfaceBaseFilledClassName = twMerge(
  SurfaceBaseClassName,
  "MTSurface-filled",
);

export const SurfaceBaseOutlinedClassName = twMerge(
  SurfaceBaseClassName,
  "MTSurface-outlined border border-neutral-300 dark:border-neutral-700",
);

export const SurfaceBaseContentClassName =
  "MTSurface-content border-inherit rounded-[inherit] p-3 h-full flex flex-col";

export const SurfaceBaseContentElevatedClassName = twMerge(
  SurfaceBaseContentClassName,
  "bg-primary/[0.07] dark:bg-primary-dark-DEFAULT/[0.07]",
);

export const SurfaceBaseContentFilledContentClassName = twMerge(
  SurfaceBaseContentClassName,
  "bg-primary/[0.2] dark:bg-primary-dark-DEFAULT/[0.2]",
);

export const SurfaceBaseContentOutlinedClassName = twMerge(
  SurfaceBaseContentClassName,
  "bg-transparent",
);

export const SurfaceBaseMapClassName: Record<SurfaceVariant, string> = {
  elevated: SurfaceBaseElevatedClassName,
  filled: SurfaceBaseFilledClassName,
  outlined: SurfaceBaseOutlinedClassName,
};

export const SurfaceBaseContentMapClassName: Record<SurfaceVariant, string> = {
  elevated: SurfaceBaseContentElevatedClassName,
  filled: SurfaceBaseContentFilledContentClassName,
  outlined: SurfaceBaseContentOutlinedClassName,
};

export const SurfaceBaseElevationClassNameMap: Record<
  SurfaceElevation,
  string
> = {
  0: "bg-surface-container-lowest dark:bg-surface-dark-container-lowest",
  1: "bg-surface-container-low dark:bg-surface-dark-container-low",
  2: "bg-surface-container dark:bg-surface-dark-container",
  3: "bg-surface-container-high dark:bg-surface-dark-container-high",
  4: "bg-surface-container-highest dark:bg-surface-dark-container-highest",
};
