import React, {PropsWithChildren} from 'react';


export type FabColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export type FabSize = 'small' | 'medium' | 'large';

export interface FabProps extends PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
    icon?: React.ReactNode;
    color?: FabColor;
    size?: FabSize;
}
