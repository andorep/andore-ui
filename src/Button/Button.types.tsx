import React, { PropsWithChildren } from "react";

export type ButtonVariant = "elevated" | "filled" | "outlined" | "text";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface ButtonProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
