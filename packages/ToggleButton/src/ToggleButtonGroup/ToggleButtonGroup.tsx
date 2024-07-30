import React from 'react';
import {twMerge} from 'tailwind-merge';
import {ToggleButtonGroupProps} from './ToggleButtonGroup.types';
import {ToggleButtonGroupBaseClassName, ToggleButtonGroupDensityMapClassName} from './ToggleButtonGroup.classes';

const ToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, forwardedRef) => {
    const {children, className, density = 0, ...rest} = props;
    const densityClassName = ToggleButtonGroupDensityMapClassName[density];
    const classes = twMerge(ToggleButtonGroupBaseClassName, densityClassName, className);
    return (
        <div {...rest} ref={forwardedRef} className={classes}>
            {children}
        </div>
    );
});

export default ToggleButtonGroup;
