import React, { PropsWithChildren } from 'react';
export interface CardMediaProps extends PropsWithChildren<React.ImgHTMLAttributes<HTMLImageElement>> {
    disabledGutters?: boolean;
}
