import React from 'react';
import {twMerge} from 'tailwind-merge';
import {DropdownMenuItem as RadixDropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuItemProps} from './DropdownMenuItem.types';
import {
    DropdownMenuItemBaseClassName,
    DropdownMenuItemTextClassName,
    DropdownMenuItemTrailingIconClassName,
} from './DropdownMenuItem.classes';

const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>((props, forwardedRef) => {
    const {className, children, trailing, ...rest} = props;
    const classes = twMerge(DropdownMenuItemBaseClassName, className);
    return (
        <RadixDropdownMenuItem
            {...rest}
            ref={forwardedRef}
            className={classes}
        >
            <span className={DropdownMenuItemTextClassName}>{children}</span>
            {trailing && (
                <span className={DropdownMenuItemTrailingIconClassName}>
                    {trailing}
                </span>
            )}
        </RadixDropdownMenuItem>
    );
});

export default DropdownMenuItem;
