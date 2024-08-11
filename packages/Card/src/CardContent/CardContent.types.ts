import React, { PropsWithChildren } from 'react';
export interface CardContentProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    disabledGutters?: boolean;
}
