"use client";

import React, { useMemo } from "react";
import { ThemeType } from "@material-tailwind-ui/theme-plugin";
import PrimaryColorList from "@/app/(root)/themes/_components/PrimaryColorList/PrimaryColorList";
import SurfaceColorList from "@/app/(root)/themes/_components/SurfaceColorList/SurfaceColorList";
import OutlinedColorList from "@/app/(root)/themes/_components/OutlinedColorList/OutlinedColorList";
import { Typography } from "@material-tailwind-ui/typography";

interface CustomThemeProps {
  defaultTheme?: ThemeType;
}

const CustomTheme = (props: CustomThemeProps) => {
  const { defaultTheme } = props;
  const [theme, setTheme] = React.useState<ThemeType | undefined>(defaultTheme);
  const colors = theme?.colors || ({} as ThemeType["colors"]);

  return (
    <div className="flex flex-col max-h-full overflow-auto p-4 rounded-[inherit] rounded-r-none bg-surface-container-highest dark:bg-surface-dark-container-highest border-outline-variant border-solid border border-r-0">
      <Typography variant={"title"} size={"sm"} className={"mb-4"}>
        Theme
      </Typography>
      <PrimaryColorList colors={colors} />
      <SurfaceColorList colors={colors} />
      <OutlinedColorList colors={colors} />
    </div>
  );
};

export default CustomTheme;
