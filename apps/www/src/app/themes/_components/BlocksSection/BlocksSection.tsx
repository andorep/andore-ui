'use client';

import React from "react";
import { theme } from "@andore-ui/theme";
import CustomTheme from "@/app/themes/_components/CustomTheme/CustomTheme";
import {SnackbarManager} from "@andore-ui/snackbar";


const BlocksSection = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children } = props;
  const ref = React.useRef(null);
  return (
    <SnackbarManager>
      <CustomTheme defaultTheme={theme} blocksRef={ref} />
      <section
        ref={ref}
        id={"Blocks"}
        className="grid xl:max-2xl:grid-cols-3 2xl:grid-rows-4 2xl:grid-flow-col gap-4 mt-4 custom-theme"
      >
        {children}
      </section>
    </SnackbarManager>
  );
};

export default BlocksSection;
