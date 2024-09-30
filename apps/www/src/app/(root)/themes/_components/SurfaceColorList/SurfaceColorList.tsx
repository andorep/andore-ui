import React from "react";
import { List } from "@andore-ui/list";
import { ThemeType } from "@andore-ui/theme";
import ColorItem from "@/app/(root)/themes/_components/ColorItem/ColorItem";
import { Typography } from "@andore-ui/typography";

interface SurfaceColorListProps {
  colors: ThemeType["colors"];
  onClick?: (
      event: React.MouseEvent<HTMLElement>,
      name: string,
      color: string,
  ) => void;
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
  const { colors, onClick } = props;
  const surface = colors.surface ?? {};
  const handleClick =(name:string) => (event: React.MouseEvent<HTMLElement>, color: string) => {
    if (onClick) {
      onClick(event, name, color);
    }
  }
  return (
    <div className={"w-fit h-fit flex flex-col gap-2"}>
      <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
        Surface
      </Typography>
      <List className={"flex-row"} >
        {surfaceColors.map((color, index) => {
          const colorNames = color.split("-");
          const colorName = colorNames
            .map((name) => {
              return name.charAt(0).toUpperCase() + name.slice(1);
            })
            .join(" ");
          const surfaceColor = surface[color as keyof typeof surface] ?? "";
          return (
            <ColorItem key={index} color={surfaceColor} name={colorName} onClick={handleClick(`surface.${color}`)} />
          );
        })}
      </List>
    </div>
  );
};

export default SurfaceColorList;
