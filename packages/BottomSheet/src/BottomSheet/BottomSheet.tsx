import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { BottomSheetProps } from "./BottomSheet.types";
import {
  BottomSheetBaseClassName,
  BottomSheetContentClassName,
  BottomSheetDescriptionClassName,
  BottomSheetDragHandleClassName,
  BottomSheetHeaderClassName,
  BottomSheetHeaderHiddenClassName,
  BottomSheetOverlayClassName,
  BottomSheetTitleClassName,
  BottomSheetTitleHiddenClassName,
} from "./BottomSheet.classes";

const BottomSheet = (props: BottomSheetProps) => {
  const {
    children,
    className,
    title,
    hideTitle,
    description,
    hideDescription,
    ...rest
  } = props;
  const classes = twMerge(BottomSheetBaseClassName, className);

  const classesContent = BottomSheetContentClassName;

  const classesDragHandle = BottomSheetDragHandleClassName;

  const classesOverlay = BottomSheetOverlayClassName;

  const hideHeader = hideTitle && hideDescription;
  const headerHiddenClasses = hideHeader
    ? BottomSheetHeaderHiddenClassName
    : "";
  const classesHeader = twMerge(
    BottomSheetHeaderClassName,
    headerHiddenClasses,
  );

  const hiddenTitleClasses = hideTitle ? BottomSheetTitleHiddenClassName : "";
  const classesTitle = twMerge(BottomSheetTitleClassName, hiddenTitleClasses);

  const hiddenDescriptionClasses = hideDescription ? BottomSheetTitleHiddenClassName : "";
  const classesDescription = twMerge(
    BottomSheetDescriptionClassName,
      hiddenDescriptionClasses,
  );

  return (
    <Drawer.Root {...rest}>
      <Drawer.Portal>
        <Drawer.Overlay className={classesOverlay} />
        <Drawer.Content className={classes} aria-description={description}>
          <div className={classesContent}>
            <span className={classesDragHandle} />
            <div className={classesHeader}>
              <DialogTitle className={classesTitle}>{title}</DialogTitle>
              <DialogDescription className={classesDescription}>
                {description}
              </DialogDescription>
            </div>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BottomSheet;
