import React, { PropsWithChildren } from 'react';
export interface NavigationDividerProps extends PropsWithChildren<React.HTMLAttributes<HTMLHRElement>> {
    disableSpaceBetween?: boolean;
}
