import React from 'react';
import {DialogPortal as RadixDialogPortal} from "@radix-ui/react-dialog";
import {DialogPortalProps} from './DialogPortal.types';

const DialogPortal = React.forwardRef<HTMLDivElement, DialogPortalProps>((props) => {
    return (
        <RadixDialogPortal
            {...props}
        />
    );
});

export default DialogPortal;
