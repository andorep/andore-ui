import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuItemIndicator as RadixDropdownMenuItemIndicator} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItemIndicatorProps } from './DropdownMenuItemIndicator.types';
import { DropdownMenuItemIndicatorBaseClassName } from './DropdownMenuItemIndicator.classes';

const DropdownMenuItemIndicator = React.forwardRef<HTMLDivElement, DropdownMenuItemIndicatorProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuItemIndicatorBaseClassName, className);
    return (
    <RadixDropdownMenuItemIndicator
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuItemIndicator;
