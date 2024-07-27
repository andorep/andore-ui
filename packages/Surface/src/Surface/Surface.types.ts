import React, { PropsWithChildren } from 'react';

export type SurfaceVariant = 'elevated' | 'filled' | 'outlined';
export interface SurfaceProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    variant?: SurfaceVariant;
}
