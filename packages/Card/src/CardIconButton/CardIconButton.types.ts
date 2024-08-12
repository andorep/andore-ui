import React, { PropsWithChildren } from 'react';

export type CardIconButtonColor = "primary" | "secondary" | "info" | "success" | "warning" | "error";
export interface CardIconButtonProps extends PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
    color?: CardIconButtonColor;
}
