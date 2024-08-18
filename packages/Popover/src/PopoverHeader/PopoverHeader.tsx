import React from 'react';
import {twMerge} from 'tailwind-merge';
import {PopoverHeaderProps} from './PopoverHeader.types';
import {PopoverHeaderBaseClassName, PopoverHeaderGuttersClassName} from './PopoverHeader.classes';

const PopoverHeader = React.forwardRef<HTMLHeadingElement, PopoverHeaderProps>((props, forwardedRef) => {
    const {children, className, disabledGutters, ...rest} = props;
    const gutterClasses = disabledGutters ? "" : PopoverHeaderGuttersClassName;
    const classes = twMerge(PopoverHeaderBaseClassName, gutterClasses, className);
    return (
        <h6 {...rest} ref={forwardedRef} className={classes}>
            {children}
        </h6>
    );
});

export default PopoverHeader;
