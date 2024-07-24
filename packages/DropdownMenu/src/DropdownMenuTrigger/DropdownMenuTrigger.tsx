import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuTrigger as RadixDropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTriggerProps } from './DropdownMenuTrigger.types';
import { DropdownMenuTriggerBaseClassName } from './DropdownMenuTrigger.classes';

const DropdownMenuTrigger = React.forwardRef<HTMLDivElement, DropdownMenuTriggerProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuTriggerBaseClassName, className);
    return (
    <RadixDropdownMenuTrigger
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuTrigger;
