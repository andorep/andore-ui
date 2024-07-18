import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AlertDialogTrigger as RadixAlertDialogTrigger} from "@radix-ui/react-alert-dialog";
import { AlertDialogTriggerProps } from './AlertDialogTrigger.types';
import { AlertDialogTriggerBaseClassName } from './AlertDialogTrigger.classes';

const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, AlertDialogTriggerProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AlertDialogTriggerBaseClassName, className);
    return (
    <RadixAlertDialogTrigger
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AlertDialogTrigger;
