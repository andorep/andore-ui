import React from 'react';
import {Dialog as RadixDialog} from "@radix-ui/react-dialog";
import {DialogProps} from './Dialog.types';

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props) => {
    return (
        <RadixDialog
            {...props}
        />
    );
});

export default Dialog;
