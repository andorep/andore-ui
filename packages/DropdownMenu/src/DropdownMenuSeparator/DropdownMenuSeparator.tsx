import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuSeparator as RadixDropdownMenuSeparator} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSeparatorProps } from './DropdownMenuSeparator.types';
import { DropdownMenuSeparatorBaseClassName } from './DropdownMenuSeparator.classes';

const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuSeparatorBaseClassName, className);
    return (
    <RadixDropdownMenuSeparator
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuSeparator;
