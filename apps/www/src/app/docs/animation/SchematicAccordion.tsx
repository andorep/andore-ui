"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "@andore-ui/accordion";

const SchematicButton = () => {

  return (
    <div className={"w-[300px] h-fit p-4 bg-surface-container-lowest dark:bg-surface-dark-DEFAULT"}>
        <Accordion type={"single"} collapsible defaultValue={'1'}>
            <AccordionItem value={"1"}>
                <AccordionHeader>Header 1</AccordionHeader>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value={"2"}>
                <AccordionHeader>Header 2</AccordionHeader>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. 2
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value={"3"}>
                <AccordionHeader>Header 3</AccordionHeader>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. 3
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  );
};

export default SchematicButton;
