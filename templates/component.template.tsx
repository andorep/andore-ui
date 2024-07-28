import React from 'react';
import { twMerge } from 'tailwind-merge';
import { $COMPONENTNAMEProps } from './$COMPONENTNAME.types';
import { $COMPONENTNAMEBaseClassName } from './$COMPONENTNAME.classes';

const $COMPONENTNAME = React.forwardRef<HTMLDivElement, $COMPONENTNAMEProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge($COMPONENTNAMEBaseClassName, className);
    return (
      <div {...rest} ref={forwardedRef} className={classes} >
          {children}
      </div>
    );
});

export default $COMPONENTNAME;
