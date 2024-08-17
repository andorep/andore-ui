import React from 'react';
import {SwitchThumb as RadixSwitchThumb} from '@radix-ui/react-switch';
import {twMerge} from 'tailwind-merge';
import {SwitchThumbProps} from './SwitchThumb.types';
import {
    SwitchThumbBaseClassName,
    SwitchThumbContentBaseClassName,
    SwitchThumbIconCheckedBaseClassName, SwitchThumbIconUncheckedBaseClassName
} from './SwitchThumb.classes';

const SwitchThumb = React.forwardRef<HTMLDivElement, SwitchThumbProps>((props, forwardedRef) => {
    const {
        children,
        className,
        checkedIcon,
        ...rest
    } = props;
    const classes = twMerge(SwitchThumbBaseClassName, className);
    const classesContent = twMerge(SwitchThumbContentBaseClassName);

    const classesCheckedIcon = SwitchThumbIconCheckedBaseClassName;
    const classesUncheckedIcon = SwitchThumbIconUncheckedBaseClassName;

    return (
        <RadixSwitchThumb {...rest} ref={forwardedRef} className={classes}>
            <span className={classesContent}>
                {checkedIcon && (
                    <span className={classesCheckedIcon}>
                    {checkedIcon}
                </span>
                )}
                {children && (
                    <span className={classesUncheckedIcon}>
                        {children}
                    </span>
                )}
            </span>
        </RadixSwitchThumb>
    );
});

export default SwitchThumb;
