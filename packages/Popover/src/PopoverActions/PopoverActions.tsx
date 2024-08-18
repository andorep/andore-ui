import React from 'react';
import { twMerge } from 'tailwind-merge';
import { PopoverActionsProps } from './PopoverActions.types';
import { PopoverActionsBaseClassName } from './PopoverActions.classes';

const PopoverActions = React.forwardRef<HTMLDivElement, PopoverActionsProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(PopoverActionsBaseClassName, className);
    return (
      <div {...rest} ref={forwardedRef} className={classes} >
          {children}
      </div>
    );
});

export default PopoverActions;
