import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  useHover,
  useFloating,
  useInteractions,
  offset as offsetMiddleware,
  autoPlacement,
  FloatingPortal,
} from "@floating-ui/react";
import { TooltipProps } from "./Tooltip.types";
import { TooltipBaseClassName } from "./Tooltip.classes";

const Tooltip = (props: TooltipProps) => {
  const {
    children,
    className,
    title,
    placement,
    offset = 10,
    delay = 100,
    delayOpen,
    delayClose,
    onOpenChange,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const middleware = [offsetMiddleware(offset)];

  if (placement == null) {
    middleware.push(autoPlacement());
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  const { refs, floatingStyles, context } = useFloating({
    placement: placement,
    open: isOpen,
    onOpenChange: handleOpenChange,
    middleware: middleware,
  });

  const hover = useHover(context, {
    delay: {
      open: delayOpen ?? delay,
      close: delayClose ?? delay,
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  const classes = twMerge(TooltipBaseClassName, className);
  return (
    <span
      {...rest}
      ref={refs.setReference}
      {...getReferenceProps()}
      aria-description={title}
    >
      {children}
      {isOpen && (
        <FloatingPortal>
          <div
            className={classes}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {title}
          </div>
        </FloatingPortal>
      )}
    </span>
  );
};

export default Tooltip;
