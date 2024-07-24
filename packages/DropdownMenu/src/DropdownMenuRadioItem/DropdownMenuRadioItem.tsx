import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuRadioItem as RadixDropdownMenuRadioItem} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuRadioItemProps } from './DropdownMenuRadioItem.types';
import { DropdownMenuRadioItemBaseClassName } from './DropdownMenuRadioItem.classes';

const DropdownMenuRadioItem = React.forwardRef<HTMLDivElement, DropdownMenuRadioItemProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuRadioItemBaseClassName, className);
    return (
    <RadixDropdownMenuRadioItem
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuRadioItem;
