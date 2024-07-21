import React from 'react';
import {DropdownMenuPortal as RadixDropdownMenuPortal} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuPortalProps} from './DropdownMenuPortal.types';

const DropdownMenuPortal = React.forwardRef<HTMLDivElement, DropdownMenuPortalProps>((props) => {
    return (
        <RadixDropdownMenuPortal
            {...props}
        />
    );
});

export default DropdownMenuPortal;
