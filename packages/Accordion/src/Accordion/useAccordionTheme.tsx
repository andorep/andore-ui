import React from "react";
import {AccordionContextValue} from "./Accordion.types";


// create context for theming
export const AccordionThemeContext = React.createContext<AccordionContextValue>(
    {
        variant: "standard",
        condensed: false,
    },
);

const useAccordionTheme = () => React.useContext(AccordionThemeContext);

export default useAccordionTheme;
