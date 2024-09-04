import React, { PropsWithChildren } from 'react';

export type NavigationVariant = 'standard' | 'vertical' | 'no-padding';

export interface NavigationListProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    variant?: NavigationVariant;
    condensed?: boolean;
    iconOnly?: boolean;
}

export interface NavigationContextValue {
    variant: NavigationVariant;
    condensed: boolean;
    iconOnly: boolean;
}
