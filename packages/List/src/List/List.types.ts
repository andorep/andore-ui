import React, { PropsWithChildren } from 'react';
export interface ListProps extends PropsWithChildren<React.HTMLAttributes<HTMLUListElement>> {
    divider?: boolean;
}
