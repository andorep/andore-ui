import React from 'react';
import {twMerge} from 'tailwind-merge';
import {DialogContent as RadixDialogContent} from "@radix-ui/react-dialog";
import {DialogContentProps} from './DialogContent.types';
import {
    DialogContentMapClassName,
    DialogContentSurfaceClassName,
    DialogContentTintClassName
} from './DialogContent.classes';

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, forwardedRef) => {
    const {className, children, size = 'md', ...rest} = props;
    const sizeClassName = DialogContentMapClassName[size];
    const classes = twMerge(sizeClassName, className);
    return (

        <RadixDialogContent {...rest} ref={forwardedRef} className={classes}>
            <div className={DialogContentSurfaceClassName}>
                <div className={DialogContentTintClassName}>
                    {children}
                </div>
            </div>
        </RadixDialogContent>
    );
});

export default DialogContent;
