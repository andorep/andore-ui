import React from 'react';
import {twMerge} from 'tailwind-merge';
import {CardIconButtonProps} from './CardIconButton.types';
import {
    CardIconButtonContentVariantMapClassName,
    CardIconButtonVariantMapClassName,
} from './CardIconButton.classes';

const CardIconButton = React.forwardRef<HTMLButtonElement, CardIconButtonProps>((props, forwardedRef) => {
    const {
        children,
        className,
        color = 'primary',
        ...rest
    } = props;

    const variantClass = CardIconButtonVariantMapClassName[color];
    const classes = twMerge(variantClass, className);

    const variantContentClassName = CardIconButtonContentVariantMapClassName[color];

    return (
        <button {...rest} ref={forwardedRef} className={classes}>
            <span className={variantContentClassName}>
                {children}
            </span>
        </button>
    );
});

export default CardIconButton;
