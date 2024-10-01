import React from "react";
import { twMerge } from "tailwind-merge";
import { SnackbarCloseIconProps } from "./SnackbarCloseIcon.types";
import { SnackbarCloseIconBaseClassName } from "./SnackbarCloseIcon.classes";

const SnackbarCloseIcon = React.forwardRef<
  HTMLButtonElement,
  SnackbarCloseIconProps
>((props, forwardedRef) => {
  const { className, ...rest } = props;
  const classes = twMerge(SnackbarCloseIconBaseClassName, className);
  return (
    <button {...rest} ref={forwardedRef} className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  );
});

export default SnackbarCloseIcon;
