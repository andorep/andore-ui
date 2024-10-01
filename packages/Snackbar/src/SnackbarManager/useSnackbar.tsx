import React, { useContext } from "react";

export interface SnackbarState {
  title: string;
  description: string;
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
