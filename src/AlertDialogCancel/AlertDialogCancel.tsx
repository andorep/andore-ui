import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AlertDialogCancel as RadixAlertDialogCancel} from "@radix-ui/react-alert-dialog";
import { AlertDialogCancelProps } from './AlertDialogCancel.types';
import { AlertDialogCancelBaseClassName } from './AlertDialogCancel.classes';

const AlertDialogCancel = React.forwardRef<HTMLButtonElement, AlertDialogCancelProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AlertDialogCancelBaseClassName, className);
    return (
    <RadixAlertDialogCancel
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AlertDialogCancel;
