import React from "react";
import {DropdownMenuContextValue} from "./DropdownMenu.types";


// create context for theming
export const DropdownMenuThemeContext = React.createContext<DropdownMenuContextValue>(
    {
        condensed: false,
    },
);

const useDropdownMenuTheme = () => React.useContext(DropdownMenuThemeContext);

export default useDropdownMenuTheme;