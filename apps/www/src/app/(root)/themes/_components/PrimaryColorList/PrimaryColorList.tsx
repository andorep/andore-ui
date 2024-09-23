import React from "react";
import { List } from "@material-tailwind-ui/list";
import { ThemeType } from "@material-tailwind-ui/theme-plugin";
import ColorItem from "@/app/(root)/themes/_components/ColorItem/ColorItem";
import { Typography } from "@material-tailwind-ui/typography";
import { PrimaryColor } from "@material-tailwind-ui/theme-plugin/src";

interface PrimaryColorListProps {
  colors: ThemeType["colors"];
  onClick?: (
    event: React.MouseEvent<HTMLElement>,
    name: string,
    color: string,
  ) => void;
}

const primaryColors = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

const PrimaryColorList = (props: PrimaryColorListProps) => {
  const { colors, onClick } = props;
  const handleClick =(name:string) => (event: React.MouseEvent<HTMLElement>, color: string) => {
    if (onClick) {
      onClick(event, name, color);
    }
  }
  return primaryColors.map((color, index) => {
    const colorValue = colors[color] as PrimaryColor;
    return (
      <div className={'w-fit h-fit flex-col'} key={color}>
        <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Typography>
        <List className={"mb-4 flex-row"}>
          <ColorItem
            color={colorValue.DEFAULT}
            name={"default"}
            onClick={handleClick(`${color}.DEFAULT`)}
          />
          <ColorItem
            color={colorValue.text}
            name={"text"}
            onClick={handleClick(`${color}.text`)}
          />
          <ColorItem
            color={colorValue.container}
            name={"container"}
            onClick={handleClick(`${color}.container`)}
          />
          <ColorItem
            color={colorValue["container-text"]}
            name={"container text"}
            onClick={handleClick(`${color}.container-text`)}
          />
        </List>
      </div>
    );
  });
};

export default PrimaryColorList;
