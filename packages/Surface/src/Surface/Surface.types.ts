import React, { PropsWithChildren } from 'react';

export type SurfaceVariant = 'elevated' | 'filled' | 'outlined';

export type SurfaceElevation = 0 | 1 | 2 | 3 | 4;

export interface SurfaceProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    variant?: SurfaceVariant;
    elevation?: SurfaceElevation;
}
