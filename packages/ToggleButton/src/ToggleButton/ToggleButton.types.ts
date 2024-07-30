import React, { PropsWithChildren } from "react";

export type ToggleButtonColor =
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";

export interface ToggleButtonProps
    extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    selected?: boolean;
    color?: ToggleButtonColor;
    startIcon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
}
