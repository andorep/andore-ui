import React from 'react';
import {twMerge} from 'tailwind-merge';
import {PopoverContentProps} from './PopoverContent.types';
import {PopoverContentBaseClassName, PopoverContentGuttersClassName} from './PopoverContent.classes';

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>((props, forwardedRef) => {
    const {children, className, disabledGutters, ...rest} = props;
    const gutterClasses = disabledGutters ? "" : PopoverContentGuttersClassName;
    const classes = twMerge(PopoverContentBaseClassName, gutterClasses, className);
    return (
        <div {...rest} ref={forwardedRef} className={classes}>
            {children}
        </div>
    );
});

export default PopoverContent;
