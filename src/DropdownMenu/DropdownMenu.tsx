import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenu as RadixDropdownMenu} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuProps } from './DropdownMenu.types';
import { DropdownMenuBaseClassName } from './DropdownMenu.classes';

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuBaseClassName, className);
    return (
    <RadixDropdownMenu
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenu;
