import React from 'react';
import {twMerge} from 'tailwind-merge';
import {CardContentProps} from './CardContent.types';
import {CardContentRootClassName, CardContentRootGuttersClassName} from './CardContent.classes';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>((props, forwardedRef) => {
    const {children, className, disabledGutters, ...rest} = props;
    const guttersClassName = disabledGutters ? '' : CardContentRootGuttersClassName;
    const classes = twMerge(CardContentRootClassName, guttersClassName, className);
    return (
        <div {...rest} ref={forwardedRef} className={classes}>
            {children}
        </div>
    );
});

export default CardContent;
