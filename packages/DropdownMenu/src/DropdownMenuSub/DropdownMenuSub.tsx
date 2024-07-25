import React from 'react';
import {DropdownMenuSub as RadixDropdownMenuSub} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSubProps } from './DropdownMenuSub.types';

const DropdownMenuSub = React.forwardRef<HTMLDivElement, DropdownMenuSubProps>((props) => {
    return (
    <RadixDropdownMenuSub
        {...props}
    />
    );
});

export default DropdownMenuSub;
