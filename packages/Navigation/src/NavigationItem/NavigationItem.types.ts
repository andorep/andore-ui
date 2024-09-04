import React, { PropsWithChildren } from 'react';
export interface NavigationItemProps extends PropsWithChildren<React.HTMLAttributes<HTMLAnchorElement>> {
    href?: string;
    active?: boolean;
    icon?: React.ReactNode;
    trailing?: React.ReactNode;
}
