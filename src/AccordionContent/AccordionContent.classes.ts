// [data-state='open'] defines if the AccordionContent is open or closed
// Only apply padding top if the AccordionContent is open
import {twMerge} from "tailwind-merge";

export const AccordionContentAnimationClassName = "data-[state=open]:animate-accordion-open data-[state=closed]:animate-accordion-closed overflow-hidden";

export const AccordionContentBaseClassName = twMerge(
    AccordionContentAnimationClassName,
    "accordion-content-root text-base data-[state=open]:pb-3 surface-text dark:text-surface-dark-text"
)


