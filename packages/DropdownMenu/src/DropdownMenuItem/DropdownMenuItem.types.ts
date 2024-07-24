import React, {PropsWithChildren} from 'react';
import type {DropdownMenuItemProps as RadixDropdownMenuItemProps} from "@radix-ui/react-dropdown-menu";

export interface DropdownMenuItemProps extends PropsWithChildren<RadixDropdownMenuItemProps> {
    trailing?: React.ReactNode;
}
