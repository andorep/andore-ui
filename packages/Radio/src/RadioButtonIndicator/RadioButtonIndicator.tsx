import React from 'react';
import {RadioGroupIndicator as RadixRadioButtonIndicator } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { RadioButtonIndicatorProps } from './RadioButtonIndicator.types';
import { RadioButtonIndicatorBaseClassName } from './RadioButtonIndicator.classes';

const RadioButtonIndicator = React.forwardRef<HTMLDivElement, RadioButtonIndicatorProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(RadioButtonIndicatorBaseClassName, className);
    return (
      <RadixRadioButtonIndicator {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixRadioButtonIndicator>
    );
});

export default RadioButtonIndicator;
