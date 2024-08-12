import React, { PropsWithChildren } from 'react';
export interface CardHeaderProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    title?: string;
    subtitle?: string;
    action?: React.ReactNode;
    avatar?: React.ReactNode;
    disableGutters?: boolean;
}
