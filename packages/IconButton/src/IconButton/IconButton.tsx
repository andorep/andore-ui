import React from 'react';
import {twMerge} from 'tailwind-merge';
import {IconButtonProps} from './IconButton.types';
import {
    IconButtonContentVariantMapClassName,
    IconButtonContentVariantToggleClassName,
    IconButtonVariantMapClassName,
    IconButtonVariantToggleClassName,
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

    const mapClassName = toggle ? IconButtonVariantToggleClassName : IconButtonVariantMapClassName;
    const variantClass = mapClassName[variant][color] ?? {};
    const classes = twMerge(variantClass, className);

    const mapContentClassName = toggle ? IconButtonContentVariantToggleClassName : IconButtonContentVariantMapClassName;
    const variantContentClass = mapContentClassName[variant] ?? {};
    const variantContentClassName = variantContentClass[color];


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
