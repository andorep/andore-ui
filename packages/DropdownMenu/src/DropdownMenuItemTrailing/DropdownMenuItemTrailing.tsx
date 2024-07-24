import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DropdownMenuItemTrailingProps } from './DropdownMenuItemTrailing.types';
import { DropdownMenuItemTrailingBaseClassName } from './DropdownMenuItemTrailing.classes';

const DropdownMenuItemTrailing = React.forwardRef<HTMLSpanElement, DropdownMenuItemTrailingProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(DropdownMenuItemTrailingBaseClassName, className);
    return (
      <span {...rest} ref={forwardedRef} className={classes} >
          {children}
      </span>
    );
});

export default DropdownMenuItemTrailing;
