import {PropsWithChildren} from 'react';
import type {DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps} from "@radix-ui/react-dropdown-menu";

export interface DropdownMenuSubTriggerProps extends PropsWithChildren<RadixDropdownMenuSubTriggerProps> {
    trailing?: React.ReactNode;
}
