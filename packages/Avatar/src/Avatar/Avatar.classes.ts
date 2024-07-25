import { AvatarColor } from "./Avatar.types";
import { twMerge } from "tailwind-merge";

export const AvatarBaseClassName =
  "avatar-root rounded-full align-middle w-11 h-11 select-none items-center justify-center overflow-hidden inline-flex text-2xl tracking-wide font-medium leading-normal";

export const AvatarColorMapClassName: Record<AvatarColor, string> = {
  primary: twMerge(
    AvatarBaseClassName,
    "bg-primary-container text-primary-container-text dark:bg-primary-dark-container dark:text-primary-dark-container-text",
  ),
  secondary: twMerge(
    AvatarBaseClassName,
    "bg-secondary-container text-secondary-container-text dark:bg-secondary-dark-container dark:text-secondary-dark-container-text",
  ),
  info: twMerge(
    AvatarBaseClassName,
    "bg-info-container text-info-container-text dark:bg-info-dark-container dark:text-info-dark-container-text",
  ),
  success: twMerge(
    AvatarBaseClassName,
    "bg-success-container text-success-container-text dark:bg-success-dark-container dark:text-success-dark-container-text",
  ),
  warning: twMerge(
    AvatarBaseClassName,
    "bg-warning-container text-warning-container-text dark:bg-warning-dark-container dark:text-warning-dark-container-text",
  ),
  error: twMerge(
    AvatarBaseClassName,
    "bg-error-container text-error-container-text dark:bg-error-dark-container dark:text-error-dark-container-text",
  ),
};
