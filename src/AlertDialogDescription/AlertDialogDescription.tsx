import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AlertDialogDescription as RadixAlertDialogDescription} from "@radix-ui/react-alert-dialog";
import { AlertDialogDescriptionProps } from './AlertDialogDescription.types';
import { AlertDialogDescriptionBaseClassName } from './AlertDialogDescription.classes';

const AlertDialogDescription = React.forwardRef<HTMLDivElement, AlertDialogDescriptionProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AlertDialogDescriptionBaseClassName, className);
    return (
    <RadixAlertDialogDescription
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AlertDialogDescription;
