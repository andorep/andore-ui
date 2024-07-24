import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuSub as RadixDropdownMenuSub} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSubProps } from './DropdownMenuSub.types';
import { DropdownMenuSubBaseClassName } from './DropdownMenuSub.classes';

const DropdownMenuSub = React.forwardRef<HTMLDivElement, DropdownMenuSubProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuSubBaseClassName, className);
    return (
    <RadixDropdownMenuSub
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuSub;
