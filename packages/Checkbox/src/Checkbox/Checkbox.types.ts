import { PropsWithChildren } from "react";
import type { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";

export type CheckboxColors =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface CheckboxProps extends PropsWithChildren<RadixCheckboxProps> {
  /**
   * The color of the checkbox.
   * @default "primary"
   */
  color?: CheckboxColors;
}
