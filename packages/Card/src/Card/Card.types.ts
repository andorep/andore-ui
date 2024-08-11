import React, { PropsWithChildren } from 'react';

export type CardVariant = 'elevated' | 'filled' | 'outlined';
export interface CardProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    variant?: CardVariant;
    disabledDragImage?: boolean;
    disabled?: boolean;
}
