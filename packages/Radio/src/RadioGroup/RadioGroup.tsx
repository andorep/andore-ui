import React from 'react';
import {RadioGroup as RadixRadioGroup } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { RadioGroupProps } from './RadioGroup.types';
import { RadioGroupBaseClassName } from './RadioGroup.classes';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(RadioGroupBaseClassName, className);
    return (
      <RadixRadioGroup {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixRadioGroup>
    );
});

export default RadioGroup;
