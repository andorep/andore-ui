"use client";

import React from "react";
import { ThemeType } from "@andore-ui/theme-plugin";
import MobileCustomTheme from "@/app/(root)/themes/_components/MobileCustomTheme/MobileCustomTheme";

interface CustomThemeProps {
  defaultTheme?: ThemeType;
  blocksRef?: React.RefObject<HTMLDivElement>;
}

const CustomTheme = (props: CustomThemeProps) => {
  const { defaultTheme } = props;
  return (
    <>
       <MobileCustomTheme defaultTheme={defaultTheme}  blocksRef={props.blocksRef} />
    </>
  );
};

export default CustomTheme;
