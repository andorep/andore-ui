import React from 'react';
import {twMerge} from 'tailwind-merge';
import {DropdownMenuItem as RadixDropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuItemProps} from './DropdownMenuItem.types';
import {
    DropdownMenuItemBaseClassName,
} from './DropdownMenuItem.classes';

const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>((props, forwardedRef) => {
    const {className, children, ...rest} = props;
    const classes = twMerge(DropdownMenuItemBaseClassName, className);
    return (
        <RadixDropdownMenuItem
            {...rest}
            ref={forwardedRef}
            className={classes}
        >
            {children}
        </RadixDropdownMenuItem>
    );
});

export default DropdownMenuItem;
