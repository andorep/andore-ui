import React from "react";
import { twMerge } from "tailwind-merge";
import { CheckboxIndicator as RadixCheckboxIndicator } from "@radix-ui/react-checkbox";
import { CheckboxIndicatorProps } from "./CheckboxIndicator.types";
import { CheckboxIndicatorBaseClassName } from "./CheckboxIndicator.classes";

const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement,
  CheckboxIndicatorProps
>((props, forwardedRef) => {
  const { className, children, ...rest } = props;
  const classes = twMerge(CheckboxIndicatorBaseClassName, className);
  return (
    <RadixCheckboxIndicator {...rest} ref={forwardedRef} className={classes}>
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
      )}
    </RadixCheckboxIndicator>
  );
});

export default CheckboxIndicator;
