import React from 'react';
import {Separator as RadixDivider} from '@radix-ui/react-separator';
import {twMerge} from 'tailwind-merge';
import {DividerProps} from './Divider.types';
import {DividerBaseClassName, DividerDisableSpaceBetweenClassName} from './Divider.classes';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, forwardedRef) => {
    const {className, disableSpaceBetween, ...rest} = props;

    const disabledSpaceBetweenClassName = disableSpaceBetween ? DividerDisableSpaceBetweenClassName : '';

    const classes = twMerge(
        DividerBaseClassName,
        disabledSpaceBetweenClassName,
        className
    );
    return (
        <RadixDivider {...rest} ref={forwardedRef} className={classes}/>
    );
});

export default Divider;
