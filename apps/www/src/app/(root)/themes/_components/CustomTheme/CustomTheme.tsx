"use client";

import React from "react";
import { ThemeType } from "@material-tailwind-ui/theme-plugin";
import PrimaryColorList from "@/app/(root)/themes/_components/PrimaryColorList/PrimaryColorList";
import SurfaceColorList from "@/app/(root)/themes/_components/SurfaceColorList/SurfaceColorList";
import OutlinedColorList from "@/app/(root)/themes/_components/OutlinedColorList/OutlinedColorList";
import { Typography } from "@material-tailwind-ui/typography";
import PopoverChangeColor from "@/app/(root)/themes/_components/PopoverChangeColor/PopoverChangeColor";

interface CustomThemeProps {
  defaultTheme?: ThemeType;
}

const CustomTheme = (props: CustomThemeProps) => {
  const { defaultTheme } = props;
  const [theme, setTheme] = React.useState<ThemeType | undefined>(defaultTheme);
  const [colorSelected, setColorSelected] = React.useState<
    { color: string; name: string } | undefined
  >();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>();

  const colors = theme?.colors || ({} as ThemeType["colors"]);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    name: string,
    color: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setColorSelected({ color, name });
    console.log(name, color);
  };

  const handleClose = (color: string) => {
    const path = colorSelected?.name.split(".");
    const newTheme = { ...theme } as ThemeType;
    let currentTheme = newTheme.colors;
    if (currentTheme == null) {
      return;
    }
    for (let i = 0; i < path!.length - 1; i++) {
      if (currentTheme == null) {
        return;
      }
      currentTheme = currentTheme[path![i]] as ThemeType["colors"];
    }
    currentTheme[path![path!.length - 1]] = color;
    console.log(newTheme);
    setTheme(newTheme);
    setAnchorEl(undefined);
  };

  return (
    <div className="flex flex-col max-h-full overflow-auto p-4 rounded-[inherit] rounded-r-none bg-surface-container-highest dark:bg-surface-dark-container-highest border-outline-variant border-solid border border-r-0">
      <Typography variant={"title"} size={"sm"} className={"mb-4"}>
        Theme
      </Typography>
      <PrimaryColorList colors={colors} onClick={handleClick} />
      <SurfaceColorList colors={colors} />
      <OutlinedColorList colors={colors} />
      <PopoverChangeColor
        key={colorSelected?.name}
        anchorEl={anchorEl}
        onClose={handleClose}
        defaultColor={colorSelected?.color}
      />
    </div>
  );
};

export default CustomTheme;
