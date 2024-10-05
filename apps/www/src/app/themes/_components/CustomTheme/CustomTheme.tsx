"use client";

import React from "react";
import { ThemeType } from "@andore-ui/theme";
import MobileCustomTheme from "@/app/themes/_components/MobileCustomTheme/MobileCustomTheme";
import useWindowSize from "@/app/_hooks/useWindowSize";
import DesktopCustomTheme from "@/app/themes/_components/DesktopCustomTheme/DesktopCustomTheme";

interface CustomThemeProps {
  defaultTheme?: ThemeType;
  blocksRef?: React.RefObject<HTMLDivElement>;
}

const CustomTheme = (props: CustomThemeProps) => {
  const { defaultTheme } = props;
  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width < 1200;
  return (
    <>
      {!isSmallScreen && (
        <DesktopCustomTheme
          defaultTheme={defaultTheme}
          blocksRef={props.blocksRef}
        />
        )}
      {isSmallScreen && (
        <MobileCustomTheme
          defaultTheme={defaultTheme}
          blocksRef={props.blocksRef}
        />
      )}
    </>
  );
};

export default CustomTheme;
