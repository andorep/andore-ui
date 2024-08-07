import React from 'react';
import {$RADIXCOMPONENTNAME as Radix$COMPONENTNAME } from '@radix-ui/react-$SNAKE-RADIX-COMPONENT';
import { twMerge } from 'tailwind-merge';
import { $COMPONENTNAMEProps } from './$COMPONENTNAME.types';
import { $COMPONENTNAMEBaseClassName } from './$COMPONENTNAME.classes';

const $COMPONENTNAME = React.forwardRef<HTMLDivElement, $COMPONENTNAMEProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge($COMPONENTNAMEBaseClassName, className);
    return (
      <Radix$COMPONENTNAME {...rest} ref={forwardedRef} className={classes} >
          {children}
      </Radix$COMPONENTNAME>
    );
});

export default $COMPONENTNAME;
