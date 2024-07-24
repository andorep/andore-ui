import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AlertDialogAction as RadixAlertDialogAction} from "@radix-ui/react-alert-dialog";
import { AlertDialogActionProps } from './AlertDialogAction.types';
import { AlertDialogActionBaseClassName } from './AlertDialogAction.classes';

const AlertDialogAction = React.forwardRef<HTMLButtonElement, AlertDialogActionProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AlertDialogActionBaseClassName, className);
    return (
    <RadixAlertDialogAction
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AlertDialogAction;
