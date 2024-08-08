import React, {PropsWithChildren} from 'react';


export type FabColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export type FabSize = 'sm' | 'md' | 'lg';

export type FabFloating = 'left' | 'right' | 'center';

export interface FabProps extends PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
    icon?: React.ReactNode;
    color?: FabColor;
    size?: FabSize;
    floating?: FabFloating;
}
