import React from "react";
import { SnackbarManagerProps } from "./SnackbarManager.types";
import Snackbar from "../Snackbar";
import SnackbarTitle from "../SnackbarTitle";
import SnackbarDescription from "../SnackbarDescription";
import { SnackbarContext, SnackbarState } from "./useSnackbar";

const SnackbarManager = (props: SnackbarManagerProps) => {
  const { children, onlyOne = true, ...rest } = props;
  const [snackbars, setSnackbars] = React.useState<SnackbarState[]>([]);

  const showSnackbar = (snackbar: SnackbarState) => {
    if (onlyOne) {
      setSnackbars([snackbar]);
    } else {
      setSnackbars([...snackbars, snackbar]);
    }
  };

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setSnackbars(snackbars.slice(1));
    }
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbars.map((snackbar, index) => (
        <Snackbar key={index} open={true} onOpenChange={onOpenChange} {...rest} color={snackbar.color}>
          {snackbar.title && <SnackbarTitle>{snackbar.title}</SnackbarTitle>}
          {snackbar.description && (
            <SnackbarDescription>{snackbar.description}</SnackbarDescription>
          )}
        </Snackbar>
      ))}
    </SnackbarContext.Provider>
  );
};
export default SnackbarManager;
