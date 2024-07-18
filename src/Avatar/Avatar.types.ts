import { PropsWithChildren } from "react";
import type { AvatarProps as RadixAvatarProps } from "@radix-ui/react-avatar";

export type AvatarColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface AvatarProps extends PropsWithChildren<RadixAvatarProps> {
  color?: AvatarColor;
}
