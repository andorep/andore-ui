import React from 'react';
import {twMerge} from 'tailwind-merge';
import {DropdownMenuSubTrigger as RadixDropdownMenuSubTrigger} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuSubTriggerProps} from './DropdownMenuSubTrigger.types';
import {
    DropdownMenuSubTriggerBaseClassName,
} from './DropdownMenuSubTrigger.classes';

const DropdownMenuSubTrigger = React.forwardRef<HTMLDivElement, DropdownMenuSubTriggerProps>((props, forwardedRef) => {
    const {className, children, ...rest} = props;
    const classes = twMerge(DropdownMenuSubTriggerBaseClassName, className);
    return (
        <RadixDropdownMenuSubTrigger
            {...rest}
            ref={forwardedRef}
            className={classes}
        >
            {children}
        </RadixDropdownMenuSubTrigger>
    );
});

export default DropdownMenuSubTrigger;
