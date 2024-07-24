import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuLabel as RadixDropdownMenuLabel} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuLabelProps } from './DropdownMenuLabel.types';
import { DropdownMenuLabelBaseClassName } from './DropdownMenuLabel.classes';

const DropdownMenuLabel = React.forwardRef<HTMLDivElement, DropdownMenuLabelProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuLabelBaseClassName, className);
    return (
    <RadixDropdownMenuLabel
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuLabel;
