import {PropsWithChildren} from 'react';
import type {DropdownMenuProps as RadixDropdownMenuProps} from "@radix-ui/react-dropdown-menu";

export interface DropdownMenuProps extends PropsWithChildren<RadixDropdownMenuProps> {
    condensed?: boolean;
}

export interface DropdownMenuContextValue {
    condensed: boolean;
}
