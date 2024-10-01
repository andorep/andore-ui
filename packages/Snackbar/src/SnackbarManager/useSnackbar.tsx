import React, { useContext } from "react";

export interface SnackbarState {
  title?: string;
  description?: string;
  color?: "success" | "error" | "warning" | "info";
}

export interface SnackbarProviderProps {
  showSnackbar: (snackbar: SnackbarState) => void;
}

export const SnackbarContext = React.createContext<SnackbarProviderProps>({
  showSnackbar: () => {},
});

const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export default useSnackbar;
