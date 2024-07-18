import React from 'react';
import {AlertDialog as RadixAlertDialog} from "@radix-ui/react-alert-dialog";
import { AlertDialogProps } from './AlertDialog.types';

const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>((props) => {
    return (
    <RadixAlertDialog
        {...props}
    />
    );
});

export default AlertDialog;
