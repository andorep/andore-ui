import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DropdownMenuPortal as RadixDropdownMenuPortal} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuPortalProps } from './DropdownMenuPortal.types';
import { DropdownMenuPortalBaseClassName } from './DropdownMenuPortal.classes';

const DropdownMenuPortal = React.forwardRef<HTMLDivElement, DropdownMenuPortalProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DropdownMenuPortalBaseClassName, className);
    return (
    <RadixDropdownMenuPortal
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DropdownMenuPortal;
