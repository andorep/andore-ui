import React, { PropsWithChildren } from 'react';
export interface TooltipProps extends PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> {
    title: string;
}
