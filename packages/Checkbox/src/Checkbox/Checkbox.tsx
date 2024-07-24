import React from "react";
import { twMerge } from "tailwind-merge";
import { Checkbox as RadixCheckbox } from "@radix-ui/react-checkbox";
import { CheckboxProps } from "./Checkbox.types";
import {
  CheckboxColorMapClassName,
  CheckboxContainerColorMapClassName,
} from "./Checkbox.classes";

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, forwardedRef) => {
    const { className, color = "primary", ...rest } = props;
    const classes = twMerge(CheckboxColorMapClassName[color], className);
    const containerClasses = CheckboxContainerColorMapClassName[color];
    return (
      <div className={containerClasses}>
        <RadixCheckbox {...rest} ref={forwardedRef} className={classes} />
      </div>
    );
  },
);

export default Checkbox;
