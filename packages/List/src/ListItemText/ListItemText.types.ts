import React, { PropsWithChildren } from 'react';
export interface ListItemTextProps extends PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> {
    supportingText?: string;
}
