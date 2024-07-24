import React from 'react';
import {DropdownMenuArrow as RadixDropdownMenuArrow} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuArrowProps } from './DropdownMenuArrow.types';

const DropdownMenuArrow = React.forwardRef<HTMLDivElement, DropdownMenuArrowProps>((props) => {
    return (
    <RadixDropdownMenuArrow
        {...props}
    />
    );
});

export default DropdownMenuArrow;
