import React from 'react';
import {twMerge} from 'tailwind-merge';
import {NavigationDividerProps} from './NavigationDivider.types';
import {NavigationDividerBaseClassName, NavigationDividerDisableSpaceBetweenClassName} from './NavigationDivider.classes';

const NavigationDivider = React.forwardRef<HTMLHRElement, NavigationDividerProps>((props, forwardedRef) => {
    const {className, disableSpaceBetween, ...rest} = props;

    const disabledSpaceBetweenClassName = disableSpaceBetween ? NavigationDividerDisableSpaceBetweenClassName : '';

    const classes = twMerge(
        NavigationDividerBaseClassName,
        disabledSpaceBetweenClassName,
        className
    );
    return (
        <hr {...rest} ref={forwardedRef} className={classes}/>
    );
});

export default NavigationDivider;
