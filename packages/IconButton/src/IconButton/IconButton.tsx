import React from 'react';
import {twMerge} from 'tailwind-merge';
import {IconButtonProps} from './IconButton.types';
import {
    IconButtonBaseClassName,
    IconButtonVariantMapClassName,
    IconButtonVariantToggleClassName
} from './IconButton.classes';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, forwardedRef) => {
    const {
        children,
        className,
        toggle = false,
        variant = 'standard',
        color = 'primary',
        toggleIcon,
        ...rest
    } = props;

    const classes = twMerge(IconButtonBaseClassName, className);

    const mapContentClassName = toggle ? IconButtonVariantToggleClassName : IconButtonVariantMapClassName;
    const variantClass = mapContentClassName[variant] ?? {};
    const variantContentClassName = variantClass[color];


    let childrenIcon = children;
    if (toggleIcon && toggle) {
        childrenIcon = toggleIcon;
    }

    return (
        <button {...rest} ref={forwardedRef} className={classes}>
            <span className={variantContentClassName}>
                {childrenIcon}
            </span>
        </button>
    );
});

export default IconButton;
