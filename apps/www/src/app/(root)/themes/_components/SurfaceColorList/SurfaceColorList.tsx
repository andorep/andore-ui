import React from "react";
import { List } from "@material-tailwind-ui/list";
import { ThemeType } from "@material-tailwind-ui/theme-plugin";
import ColorItem from "@/app/(root)/themes/_components/ColorItem/ColorItem";
import { Typography } from "@material-tailwind-ui/typography";

interface SurfaceColorListProps {
  colors: ThemeType["colors"];
}

const surfaceColors = [
  "dim",
  "DEFAULT",
  "bright",
  "container-lowest",
  "container-low",
  "container",
  "container-high",
  "container-highest",
  "text",
  "text-variant",
  "inverse",
  "inverse-text",
  "inverse-primary",
];

const SurfaceColorList = (props: SurfaceColorListProps) => {
  const { colors } = props;
  const surface = colors.surface;
  return (
    <div className={"w-fit h-fit flex-col"}>
      <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
        Surface
      </Typography>
      <List className={"mb-4 flex-row"} >
        {surfaceColors.map((color, index) => {
          const colorNames = color.split("-");
          const colorName = colorNames
            .map((name) => {
              return name.charAt(0).toUpperCase() + name.slice(1);
            })
            .join(" ");
          const surfaceColor = surface[color as keyof typeof surface] ?? "";
          return (
            <ColorItem key={index} color={surfaceColor} name={colorName} />
          );
        })}
      </List>
    </div>
  );
};

export default SurfaceColorList;
