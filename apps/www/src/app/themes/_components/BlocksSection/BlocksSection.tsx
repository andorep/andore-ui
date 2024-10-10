"use client";

import React from "react";
import { theme } from "@andore-ui/theme";
import { SnackbarManager } from "@andore-ui/snackbar";
import DesktopCustomTheme from "@/app/themes/_components/DesktopCustomTheme/DesktopCustomTheme";
import MobileCustomTheme from "@/app/themes/_components/MobileCustomTheme/MobileCustomTheme";

const BlocksSection = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children } = props;
  const ref = React.useRef(null);
  return (
    <SnackbarManager>
      <MobileCustomTheme defaultTheme={theme} blocksRef={ref} />
      <div className={"flex flex-row gap-2"}>
        <DesktopCustomTheme defaultTheme={theme} blocksRef={ref} />
        <section
          ref={ref}
          id={"Blocks"}
          className="grid xl:max-2xl:grid-cols-3 2xl:grid-rows-4 2xl:grid-flow-col gap-4 custom-theme"
        >
          {children}
        </section>
      </div>
    </SnackbarManager>
  );
};

export default BlocksSection;
