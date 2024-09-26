import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  useHover,
  useFloating,
  useInteractions,
  offset,
} from "@floating-ui/react";
import { TooltipProps } from "./Tooltip.types";
import { TooltipBaseClassName } from "./Tooltip.classes";

const Tooltip = (props: TooltipProps) => {
  const { children, className, title, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4)],
  });

  const hover = useHover(context);

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
        <div
          className={classes}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {title}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
