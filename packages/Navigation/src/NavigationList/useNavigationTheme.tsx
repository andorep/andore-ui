import React from "react";
import {NavigationContextValue} from "./NavigationList.types";


// create context for theming
export const NavigationThemeContext = React.createContext<NavigationContextValue>(
    {
        variant: "standard",
        condensed: false,
        iconOnly: false,
    },
);

const useNavigationTheme = () => React.useContext(NavigationThemeContext);

// eslint-disable-next-line react-refresh/only-export-components
export default useNavigationTheme;
