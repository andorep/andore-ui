"use client";

import React, { useRef } from "react";
import {arrow, offset, useFloating} from "@floating-ui/react";
import FloatingPointer from "@/app/_components/FloatingPointer/FloatingPointer";
import { List, ListItem, ListItemText } from "@andore-ui/list";

const SchematicButton = () => {
  const arrowBackgroundRef = useRef(null);

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

  return (
    <div
      className={
        "w-[300px] h-fit bg-surface-container-lowest dark:bg-surface-dark-container-lowest"
      }
    >
      <List  ref={refsBackground.setReference}>
        <ListItem onClick={() => {}}>
          <ListItemText supportingText={"Supporting text"}>
            Headline
          </ListItemText>
          D
        </ListItem>
        <ListItem onClick={() => {}} >
          <ListItemText supportingText={"Supporting text"}>
            Headline
          </ListItemText>
          D
        </ListItem>
        <ListItem onClick={() => {}}>
          <ListItemText supportingText={"Supporting text"}>
            Headline
          </ListItemText>
          D
        </ListItem>
      </List>
      <FloatingPointer
        className={"theme-default"}
        placement={"left"}
        ref={refsBackground.setFloating}
        arrowRef={arrowBackgroundRef}
        middlewareData={middlewareDataBackground}
        style={floatingStylesBackground}
      >
        <ListItem className={`w-max rounded-full h-fit`}>
          <ListItemText>
            <span className={"font-medium"}>px-4</span>
          </ListItemText>
        </ListItem>
      </FloatingPointer>
    </div>
  );
};

export default SchematicButton;
