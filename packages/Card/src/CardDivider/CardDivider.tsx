import React from 'react';
import {twMerge} from 'tailwind-merge';
import {CardDividerProps} from './CardDivider.types';
import {CardDividerBaseClassName} from './CardDivider.classes';

const CardDivider = React.forwardRef<HTMLHRElement, CardDividerProps>((props, forwardedRef) => {
    const {className, ...rest} = props;
    const classes = twMerge(CardDividerBaseClassName, className);
    return (
        <hr {...rest} ref={forwardedRef} className={classes}/>
    );
});

export default CardDivider;
