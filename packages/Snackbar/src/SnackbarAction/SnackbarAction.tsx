import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SnackbarActionProps } from './SnackbarAction.types';
import { SnackbarActionBaseClassName } from './SnackbarAction.classes';

const SnackbarAction = React.forwardRef<HTMLButtonElement, SnackbarActionProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(SnackbarActionBaseClassName, className);
    return (
      <button {...rest} ref={forwardedRef} className={classes} >
          {children}
      </button>
    );
});

export default SnackbarAction;
