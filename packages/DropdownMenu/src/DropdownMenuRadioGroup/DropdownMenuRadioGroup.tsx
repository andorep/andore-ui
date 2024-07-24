import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuRadioGroup as RadixDropdownMenuRadioGroup} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuRadioGroupProps } from './DropdownMenuRadioGroup.types';
import { DropdownMenuRadioGroupBaseClassName } from './DropdownMenuRadioGroup.classes';

const DropdownMenuRadioGroup = React.forwardRef<HTMLDivElement, DropdownMenuRadioGroupProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuRadioGroupBaseClassName, className);
    return (
    <RadixDropdownMenuRadioGroup
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuRadioGroup;
