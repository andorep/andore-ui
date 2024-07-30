import React, { PropsWithChildren } from 'react';

export type ToggleButtonGroupDensity = 0 | -1 | -2 | -3

export interface ToggleButtonGroupProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    density?: ToggleButtonGroupDensity
}
