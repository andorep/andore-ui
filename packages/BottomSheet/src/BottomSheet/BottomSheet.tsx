import {twMerge} from "tailwind-merge";
import {Drawer} from "vaul";
import {BottomSheetProps} from "./BottomSheet.types";
import {
    BottomSheetBaseClassName,
    BottomSheetContentClassName, BottomSheetDragHandleClassName,
    BottomSheetOverlayClassName
} from "./BottomSheet.classes";
import React from "react";

const BottomSheet = React.forwardRef<HTMLDivElement, BottomSheetProps>((props) => {
    const {children, className, ...rest} = props;
    const classes = twMerge(BottomSheetBaseClassName, className);

    const classesContent = BottomSheetContentClassName;

    const classesDragHandle = BottomSheetDragHandleClassName;

    const classesOverlay = BottomSheetOverlayClassName;

    return (
        <Drawer.Root  {...rest}>
            <Drawer.Portal>
                <Drawer.Overlay className={classesOverlay}/>
                <Drawer.Content className={classes}>
                    <div className={classesContent}>
                        <span className={classesDragHandle}/>
                        {children}
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
});

export default BottomSheet;
