import React from "react";
import { AccordionItem as RadixAccordionItem } from "@radix-ui/react-accordion";
import { AccordionItemProps } from "./AccordionItem.types";
import { twMerge } from "tailwind-merge";
import {
  AccordionItemBaseClassName,
  AccordionItemCondensedClassName,
  VariantClassNameMap,
} from "./AccordionItem.classes";
import { useAccordionTheme } from "../Accordion";

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    const theme = useAccordionTheme();
    const variantClassName = VariantClassNameMap[theme.variant];
    const condensedClassName = theme.condensed
      ? AccordionItemCondensedClassName
      : "";

    const classes = twMerge(
      AccordionItemBaseClassName,
      variantClassName,
      condensedClassName,
      className,
    );
    return (
      <RadixAccordionItem className={classes} {...rest} ref={ref}>
        {children}
      </RadixAccordionItem>
    );
  },
);

export default AccordionItem;
