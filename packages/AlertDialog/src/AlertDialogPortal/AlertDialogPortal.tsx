import React from 'react';
import {AlertDialogPortal as RadixAlertDialogPortal} from "@radix-ui/react-alert-dialog";
import { AlertDialogPortalProps } from './AlertDialogPortal.types';

const AlertDialogPortal = React.forwardRef<HTMLDivElement, AlertDialogPortalProps>((props) => {
    return (
    <RadixAlertDialogPortal
        {...props}
    />
    );
});

export default AlertDialogPortal;
