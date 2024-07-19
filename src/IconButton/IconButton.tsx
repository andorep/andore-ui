import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconButtonProps } from './IconButton.types';
import { IconButtonBaseClassName } from './IconButton.classes';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(IconButtonBaseClassName, className);
    return (
      <button {...rest} ref={forwardedRef} className={classes} >
          {children}
      </button>
    );
});

export default IconButton;
