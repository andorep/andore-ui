import {AlertDialog as RadixAlertDialog} from "@radix-ui/react-alert-dialog";
import { AlertDialogProps } from './AlertDialog.types';

const AlertDialog =(props: AlertDialogProps) => {
    return (
    <RadixAlertDialog
        {...props}
    />
    );
};

export default AlertDialog;
