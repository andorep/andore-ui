import React from 'react';
import {
    AccordionHeader as RadixAccordionHeader,
    AccordionTrigger as RadixAccordionTrigger,
} from '@radix-ui/react-accordion';
import {AccordionHeaderProps} from './AccordionHeader.types';
import OpenIcon from "./OpenIcon.tsx";
import {
    AccordionHeaderBaseClassName,
    AccordionHeaderTriggerClassName,
    AccordionItemOpenIconClassName,
} from "./AccordionHeader.classes";
import {twMerge} from "tailwind-merge";

const iconProps = {
    className: AccordionItemOpenIconClassName,
};

const AccordionHeader = React.forwardRef<HTMLDivElement, AccordionHeaderProps>((props, ref) => {
    const {children, className, expandIcon,...rest} = props;
    const classes = twMerge(AccordionHeaderBaseClassName, className);
    let ExpandIcon = null;
    // Check if expandIcon is a valid React element
    if (React.isValidElement(expandIcon)) {
        // Clone the expandIcon element and inject the className
        ExpandIcon = React.cloneElement(expandIcon, iconProps);
    }
    return (
        <RadixAccordionHeader {...rest} className={classes} ref={ref}>
            <RadixAccordionTrigger className={AccordionHeaderTriggerClassName}>
                {children}
                {!expandIcon && <OpenIcon className={iconProps.className} />}
                {expandIcon && ExpandIcon}
            </RadixAccordionTrigger>
        </RadixAccordionHeader>
    );
});

export default AccordionHeader;
