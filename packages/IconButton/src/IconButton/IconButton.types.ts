import React, { PropsWithChildren } from 'react';

export type IconButtonVariant = 'filled' | 'outlined' | 'standard';

export type IconButtonColor = "primary" | "secondary" | "info" | "success" | "warning" | "error";

export interface IconButtonProps extends PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
    variant?: IconButtonVariant;
    color?: IconButtonColor;
    toggled?: boolean;
    toggleIcon?: React.ReactNode;
}
