import React from 'react';
import {twMerge} from 'tailwind-merge';
import {CardMediaProps} from './CardMedia.types';
import {CardMediaBaseClassName, CardMediaImageGuttersClassName} from './CardMedia.classes';

const CardMedia = React.forwardRef<HTMLImageElement, CardMediaProps>((props, forwardedRef) => {
    const {children, className, disabledGutters, ...rest} = props;
    const guttersClassName = disabledGutters ? '' : CardMediaImageGuttersClassName;
    const classes = twMerge(CardMediaBaseClassName, guttersClassName, className);
    return (
        <img {...rest} ref={forwardedRef} className={classes}>
            {children}
        </img>
    );
});

export default CardMedia;
