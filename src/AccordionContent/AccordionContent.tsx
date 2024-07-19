import React from "react";
import { AccordionContent as RadixAccordionContent } from "@radix-ui/react-accordion";
import { AccordionContentProps } from "./AccordionContent.types";
import {
  AccordionContentBaseClassName,
} from "./AccordionContent.classes";
import { twMerge } from "tailwind-merge";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = twMerge(
    AccordionContentBaseClassName,
    className,
  );
  return (
    <RadixAccordionContent className={classes} {...rest} ref={ref}>
      {children}
    </RadixAccordionContent>
  );
});

export default AccordionContent;
