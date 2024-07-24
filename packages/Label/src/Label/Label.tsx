import React from 'react';
import { twMerge } from 'tailwind-merge';
import { LabelProps } from './Label.types';
import { LabelBaseClassName } from './Label.classes';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(LabelBaseClassName, className);
    return (
      <label {...rest} ref={forwardedRef} className={classes} >
          {children}
      </label>
    );
});

export default Label;
