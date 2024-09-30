import React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputProps } from './Input.types';
import { InputBaseClassName } from './Input.classes';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
    const { className, ...rest } = props;
    const classes = twMerge(InputBaseClassName, className);
    return (
      <input {...rest} ref={forwardedRef} className={classes} />
    );
});

export default Input;
