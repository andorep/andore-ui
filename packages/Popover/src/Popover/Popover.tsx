import React from 'react';
import {twMerge} from 'tailwind-merge';
import {
    useFloating,
    useInteractions,
    offset,
    useClick,
    useDismiss,
    useRole,
    FloatingFocusManager,
    flip,
    shift,
} from '@floating-ui/react';
import {PopoverProps} from './Popover.types';
import {PopoverBaseClassName, PopoverBaseGuttersClassName, PopoverDefaultWidth} from './Popover.classes';

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props,) => {
    const {
        children,
        className,
        anchorEl,
        open,
        onClose,
        disableGutters,
        fluid,
        placement,
        ...rest
    } = props;

    const guttersClasses = disableGutters ? "" : PopoverBaseGuttersClassName;
    const sizeClasses = fluid ? "" : PopoverDefaultWidth;
    const classes = twMerge(PopoverBaseClassName, guttersClasses, sizeClasses, className);

    const {refs, floatingStyles, context} = useFloating({
        open: open,
        onOpenChange: onClose,
        placement: placement,
        elements: {
            reference: anchorEl,
        },
        middleware: [
            offset(10),
            flip({fallbackAxisSideDirection: "end"}),
            shift()
        ],
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const {getFloatingProps} = useInteractions([
        click,
        dismiss,
        role
    ]);

    return (
        <>
            {open && (
                <FloatingFocusManager context={context} modal={false}>
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                        {...rest}
                        className={classes}
                    >
                        {children}
                    </div>
                </FloatingFocusManager>
            )}
        </>
    );
});

export default Popover;
