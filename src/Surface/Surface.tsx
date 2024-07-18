import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SurfaceProps } from './Surface.types.ts';
import { SurfaceBaseClassName } from './Surface.classes.ts';

const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(SurfaceBaseClassName, className);
    return (
      <div {...rest} ref={forwardedRef} className={classes} >
          {children}
      </div>
    );
});

export default Surface;
