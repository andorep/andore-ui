import React from 'react';
import {Switch as RadixSwitch} from '@radix-ui/react-switch';
import {twMerge} from 'tailwind-merge';
import {SwitchProps} from './Switch.types';
import {SwitchBaseDisabledClassName, SwitchRootClassName} from './Switch.classes';

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, forwardedRef) => {
    const {children, className, disabled, ...rest} = props;
    const classesBase = disabled ? SwitchBaseDisabledClassName : SwitchRootClassName;
    const classes = twMerge(classesBase, className);
    return (
        <RadixSwitch {...rest} disabled={disabled} ref={forwardedRef} className={classes}>
            {children}
        </RadixSwitch>
    );
});

export default Switch;
