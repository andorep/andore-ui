import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DropdownMenuItemLeadingProps } from './DropdownMenuItemLeading.types';
import { DropdownMenuItemLeadingBaseClassName } from './DropdownMenuItemLeading.classes';

const DropdownMenuItemLeading = React.forwardRef<HTMLDivElement, DropdownMenuItemLeadingProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(DropdownMenuItemLeadingBaseClassName, className);
    return (
      <div {...rest} ref={forwardedRef} className={classes} >
          {children}
      </div>
    );
});

export default DropdownMenuItemLeading;