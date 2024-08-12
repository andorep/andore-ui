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
        toggled = false,
        variant = 'standard',
        color = 'primary',
        toggleIcon,
        ...rest
    } = props;

    const mapClassName = toggled ? IconButtonVariantToggleClassName : IconButtonVariantMapClassName;
    const variantClass = mapClassName[variant][color] ?? {};
    const classes = twMerge(variantClass, className);

    const mapContentClassName = toggled ? IconButtonContentVariantToggleClassName : IconButtonContentVariantMapClassName;
    const variantContentClass = mapContentClassName[variant] ?? {};
    const variantContentClassName = variantContentClass[color];


    let childrenIcon = children;
    if (toggleIcon && toggled) {
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
