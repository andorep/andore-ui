import React from 'react';
import {ToastTitle as RadixSnackbarTitle } from '@radix-ui/react-toast';
import { twMerge } from 'tailwind-merge';
import { SnackbarTitleProps } from './SnackbarTitle.types';
import { SnackbarTitleBaseClassName } from './SnackbarTitle.classes';

const SnackbarTitle = React.forwardRef<HTMLDivElement, SnackbarTitleProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(SnackbarTitleBaseClassName, className);
    return (
      <RadixSnackbarTitle {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixSnackbarTitle>
    );
});

export default SnackbarTitle;
