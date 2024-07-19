import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuSubContent as RadixDropdownMenuSubContent} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSubContentProps } from './DropdownMenuSubContent.types';
import { DropdownMenuSubContentBaseClassName } from './DropdownMenuSubContent.classes';

const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, DropdownMenuSubContentProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuSubContentBaseClassName, className);
    return (
    <RadixDropdownMenuSubContent
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuSubContent;
