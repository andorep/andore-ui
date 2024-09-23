import React, { PropsWithChildren } from "react";

export type ChipVariant = "elevated" | "outlined";

export type ChipColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface ChipProps
  extends PropsWithChildren<
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">
  > {
  variant?: ChipVariant;
  color?: ChipColor;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  selectedIcon?: React.ReactNode;
  selectedIconDisabled?: boolean;
  selected?: boolean;
  deletable?: boolean;
  onDelete?: () => void;
}
