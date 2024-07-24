import React from "react";
import { Accordion as RadixAccordion } from "@radix-ui/react-accordion";
import { AccordionProps } from "./Accordion.types";
import { twMerge } from "tailwind-merge";
import { AccordionBaseClassName } from "./Accordion.classes";
import { AccordionThemeContext } from "./useAccordionTheme";

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant = "standard",
      condensed = false,
      ...rest
    } = props;
    const classes = twMerge(AccordionBaseClassName, className);
    return (
      <AccordionThemeContext.Provider
        value={{
          variant: variant,
          condensed,
        }}
      >
        <RadixAccordion className={classes} {...rest} ref={ref}>
          {children}
        </RadixAccordion>
      </AccordionThemeContext.Provider>
    );
  },
);

export default Accordion;
