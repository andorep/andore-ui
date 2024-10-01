import React from 'react';
import {ToastDescription as RadixSnackbarDescription } from '@radix-ui/react-toast';
import { twMerge } from 'tailwind-merge';
import { SnackbarDescriptionProps } from './SnackbarDescription.types';
import { SnackbarDescriptionBaseClassName } from './SnackbarDescription.classes';

const SnackbarDescription = React.forwardRef<HTMLDivElement, SnackbarDescriptionProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(SnackbarDescriptionBaseClassName, className);
    return (
      <RadixSnackbarDescription {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixSnackbarDescription>
    );
});

export default SnackbarDescription;
