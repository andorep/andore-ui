import { twMerge } from "tailwind-merge";
import { Drawer as VaulDrawer } from "vaul";
import { DrawerProps } from "./Drawer.types";
import {
  DrawerBaseClassName,
  DrawerContentClassName,
  DrawerOverlayClassName,
  DrawerTitleDescriptionClassName,
} from "./Drawer.classes";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const Drawer = (props: DrawerProps) => {
  const {
    children,
    className,
    title,
    description,
    direction = "left",
    ...rest
  } = props;
  const classes = twMerge(DrawerBaseClassName, className);

  return (
    <VaulDrawer.Root direction={direction} {...rest}>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className={DrawerOverlayClassName} />
        <VaulDrawer.Content className={classes} aria-description={description}>
          <div className={DrawerTitleDescriptionClassName}>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>
          <div className={DrawerContentClassName}>{children}</div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};

export default Drawer;
