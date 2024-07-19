import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuCheckboxItem as RadixDropdownMenuCheckboxItem} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuCheckboxItemProps } from './DropdownMenuCheckboxItem.types';
import { DropdownMenuCheckboxItemBaseClassName } from './DropdownMenuCheckboxItem.classes';

const DropdownMenuCheckboxItem = React.forwardRef<HTMLDivElement, DropdownMenuCheckboxItemProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuCheckboxItemBaseClassName, className);
    return (
    <RadixDropdownMenuCheckboxItem
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuCheckboxItem;
