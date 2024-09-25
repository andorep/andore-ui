"use client";

import React from "react";
import { ThemeType } from "@andore-ui/theme-plugin";
import PrimaryColorList from "@/app/(root)/themes/_components/PrimaryColorList/PrimaryColorList";
import SurfaceColorList from "@/app/(root)/themes/_components/SurfaceColorList/SurfaceColorList";
import OutlinedColorList from "@/app/(root)/themes/_components/OutlinedColorList/OutlinedColorList";
import { Typography } from "@andore-ui/typography";
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
    <section className="flex flex-col w-full h-fit p-4 rounded bg-surface-container-lowest dark:bg-surface-dark-container-lowest border-outline-variant border-solid border">
      <Typography variant={"title"} size={"sm"} className={"mb-4"}>
        Theme
      </Typography>
      <div className={'flex flex-row  overflow-auto gap-4'}>
        <PrimaryColorList colors={colors} onClick={handleClick} />
        <SurfaceColorList colors={colors} onClick={handleClick} />
        <OutlinedColorList colors={colors} onClick={handleClick} />
      </div>
      <PopoverChangeColor
          key={colorSelected?.name}
          anchorEl={anchorEl}
          onClose={handleClose}
          defaultColor={colorSelected?.color}
      />
    </section>
  );
};

export default CustomTheme;
