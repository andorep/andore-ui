import React, { PropsWithChildren } from 'react';
export interface LabelProps extends PropsWithChildren<React.HTMLAttributes<HTMLLabelElement>> {
    htmlFor: string;
}
