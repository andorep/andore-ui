import React, { PropsWithChildren } from 'react';
export interface PopoverContentProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    disabledGutters?: boolean;
}
