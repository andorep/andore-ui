import React, { PropsWithChildren } from 'react';
export interface PopoverHeaderProps extends PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>> {
    disabledGutters?: boolean;
}
