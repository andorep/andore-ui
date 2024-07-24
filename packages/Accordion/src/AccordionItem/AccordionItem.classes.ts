// following material design 3.0 guidelines card guidelines
import { AccordionVariant } from "../Accordion";

export const AccordionItemBaseClassName = "py-3";

export const AccordionItemCondensedClassName = "py-2";

export const AccordionItemStandardClassName = "accordion-item-root";


// only add border to the top of the accordion item if it is not the first item
export const AccordionItemDividedClassName = " first:border-t-0 border-t border-outline dark:border-outline-dark-outline";

export const VariantClassNameMap: Record<AccordionVariant, string> = {
  standard: AccordionItemStandardClassName,
  divided: AccordionItemDividedClassName,
};
