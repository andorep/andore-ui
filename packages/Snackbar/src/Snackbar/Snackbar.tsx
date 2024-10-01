import React from "react";
import {
  Toast as RadixSnackbar,
  Provider,
  Viewport,
} from "@radix-ui/react-toast";
import { twMerge } from "tailwind-merge";
import { SnackbarProps } from "./Snackbar.types";
import {
  SnackbarActionsContainerBaseClassName,
  SnackbarBaseClassName,
  SnackbarTextContainerBaseClassName,
  SnackbarViewPortClassName,
} from "./Snackbar.classes";
import SnackbarAction from "../SnackbarAction";
import SnackbarCloseIcon from "../SnackbarCloseIcon";

const Snackbar = React.forwardRef<HTMLLIElement, SnackbarProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      duration,
      label,
      swipeDirection = "right",
      swipeThreshold,
      actionText,
      onAction,
      onClose,
      ...rest
    } = props;

    const classes = twMerge(SnackbarBaseClassName, className);

    const viewportClasses = twMerge(SnackbarViewPortClassName);

    const textContainerClasses = twMerge(SnackbarTextContainerBaseClassName);

    const actionsContainerClasses = twMerge(
      SnackbarActionsContainerBaseClassName,
    );

    const isActionsContainerVisible = actionText || onClose;

    return (
      <Provider
        duration={duration}
        label={label}
        swipeDirection={swipeDirection}
        swipeThreshold={swipeThreshold}
      >
        <RadixSnackbar {...rest} ref={forwardedRef} className={classes}>
          <div className={textContainerClasses}>{children}</div>
          {isActionsContainerVisible && (
            <span className={actionsContainerClasses}>
              {actionText && (
                <SnackbarAction onClick={onAction}>{actionText}</SnackbarAction>
              )}
              {onClose && <SnackbarCloseIcon onClick={onClose} />}
            </span>
          )}
        </RadixSnackbar>
        <Viewport className={viewportClasses} />
      </Provider>
    );
  },
);

export default Snackbar;
