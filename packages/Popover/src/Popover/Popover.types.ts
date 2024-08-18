import React, {PropsWithChildren} from 'react';
import {Placement as PlacementFloating} from '@floating-ui/react';

export interface PopoverProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
    open: boolean;
    onClose: () => void;
    anchorEl?: HTMLElement;
    disableGutters?: boolean;
    fluid?: boolean;
    placement?: PlacementFloating;
}

export type Placement = PlacementFloating;
