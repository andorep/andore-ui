import React from "react";
import type {
    AccordionHeaderProps as RadixAccordionHeaderProps,
    AccordionTriggerProps as RadixAccordionTriggerProps,
} from '@radix-ui/react-accordion';


// create a new type that extends the RadixAccordionHeaderProps and RadixAccordionTriggerProps

export interface AccordionHeaderProps extends RadixAccordionHeaderProps, Pick<RadixAccordionTriggerProps, 'asChild'> {
    expandIcon?: React.ReactNode;
}
