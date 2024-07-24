import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuGroup as RadixDropdownMenuGroup} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuGroupProps } from './DropdownMenuGroup.types';
import { DropdownMenuGroupBaseClassName } from './DropdownMenuGroup.classes';

const DropdownMenuGroup = React.forwardRef<HTMLDivElement, DropdownMenuGroupProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuGroupBaseClassName, className);
    return (
    <RadixDropdownMenuGroup
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuGroup;
