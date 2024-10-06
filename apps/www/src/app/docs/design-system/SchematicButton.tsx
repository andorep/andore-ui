"use client";

import { Button } from "@andore-ui/button";
import React, { useRef } from "react";
import { arrow, offset, useFloating } from "@floating-ui/react";
import ColorItem from "@/app/_components/ColorItem/ColorItem";
import FloatingPointer from "@/app/_components/FloatingPointer/FloatingPointer";

const SchematicButton = () => {
  const arrowBackgroundRef = useRef(null);
  const arrowTextRef = useRef(null);

  const {
    refs: refsBackground,
    floatingStyles: floatingStylesBackground,
    middlewareData: middlewareDataBackground,
  } = useFloating({
    placement: "left",
    middleware: [
      offset(10),
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

  return (
    <div className={"w-fit h-fit"}>
      <Button startIcon={"👀"} ref={refsBackground.setReference}>
        <span ref={refsText.setReference}>Just a normal button</span>
      </Button>
      <FloatingPointer
        placement={"left"}
        ref={refsBackground.setFloating}
        arrowRef={arrowBackgroundRef}
        middlewareData={middlewareDataBackground}
        style={floatingStylesBackground}
      >
        <ColorItem
          color={"rgb(var(--aui-primary))"}
          name={"bg-primary/[0.07]"}
        />
      </FloatingPointer>
      <FloatingPointer
        placement={"right"}
        ref={refsText.setFloating}
        arrowRef={arrowTextRef}
        middlewareData={middlewareDataText}
        style={floatingStylesText}
      >
        <ColorItem
          color={"rgb(var(--aui-primary))"}
          name={"text-primary"}
        />
      </FloatingPointer>
    </div>
  );
};

export default SchematicButton;
