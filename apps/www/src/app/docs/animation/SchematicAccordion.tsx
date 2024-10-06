"use client";

import React, {useRef} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "@andore-ui/accordion";
import FloatingPointer from "@/app/_components/FloatingPointer/FloatingPointer";
import {ListItem, ListItemText} from "@andore-ui/list";
import {arrow, offset, useFloating, useMergeRefs} from "@floating-ui/react";

const SchematicButton = () => {
    const arrowBackgroundRef = useRef(null);
    const arrowTextRef = useRef(null);
    const arrowExtraRef = useRef(null);

    const {
        refs: refsExtra,
        floatingStyles: floatingStylesExtra,
        middlewareData: middlewareDataExtra,
    } = useFloating({
        placement: "left",
        middleware: [
            offset(20),
            arrow({
                element: arrowExtraRef,
            }),
        ],
    });

    const {
        refs: refsBackground,
        floatingStyles: floatingStylesBackground,
        middlewareData: middlewareDataBackground,
    } = useFloating({
        placement: "left",
        middleware: [
            offset(20),
            arrow({
                element: arrowBackgroundRef,
            }),
        ],
    });

    const {
        refs: refsText,
        floatingStyles: floatingStylesText,
        middlewareData: middlewareDataText,
    } = useFloating({
        placement: "right",
        middleware: [
            offset(15),
            arrow({
                element: arrowTextRef,
            }),
        ],
    });


    const ref = useMergeRefs([
        refsBackground.setReference,
        refsText.setReference,
    ]);

  return (
    <div className={"w-[300px] h-fit p-4 bg-surface-container-lowest dark:bg-surface-dark-DEFAULT"}>
        <Accordion type={"single"} collapsible defaultValue={'1'} ref={ref}>
            <AccordionItem value={"1"}>
                <AccordionHeader ref={refsExtra.setReference}>Header 1</AccordionHeader>
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
        <FloatingPointer
            placement={"left"}
            ref={refsBackground.setFloating}
            arrowRef={arrowBackgroundRef}
            middlewareData={middlewareDataBackground}
            style={floatingStylesBackground}
        >
            <ListItem className={`w-max rounded-full h-fit`}>
                <ListItemText>
                    <span className={"font-medium"}>accordion-open</span>
                </ListItemText>
            </ListItem>
        </FloatingPointer>
        <FloatingPointer
            placement={"right"}
            ref={refsText.setFloating}
            arrowRef={arrowTextRef}
            middlewareData={middlewareDataText}
            style={floatingStylesText}
        >
            <ListItem className={`w-max rounded-full h-fit`}>
                <ListItemText>
                    <span className={"font-medium"}>duration-medium2</span>
                </ListItemText>
            </ListItem>
        </FloatingPointer>
        <FloatingPointer
            placement={"left"}
            ref={refsExtra.setFloating}
            arrowRef={arrowExtraRef}
            middlewareData={middlewareDataExtra}
            style={floatingStylesExtra}
        >
            <ListItem className={`w-max rounded-full h-fit`}>
                <ListItemText>
                    <span className={"font-medium"}>ease-emphasizedAccelerate</span>
                </ListItemText>
            </ListItem>
        </FloatingPointer>
    </div>
  );
};

export default SchematicButton;
