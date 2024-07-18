import React from 'react';
import { twMerge } from 'tailwind-merge';
import { AlertDialogActionContentProps } from './AlertDialogActionContent.types';
import { AlertDialogActionContentBaseClassName } from './AlertDialogActionContent.classes';

const AlertDialogActionContent = React.forwardRef<HTMLDivElement, AlertDialogActionContentProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(AlertDialogActionContentBaseClassName, className);
    return (
      <div {...rest} ref={forwardedRef} className={classes} >
          {children}
      </div>
    );
});

export default AlertDialogActionContent;