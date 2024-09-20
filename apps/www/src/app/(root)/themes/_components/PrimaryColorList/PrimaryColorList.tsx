import React from "react";
import { List } from "@material-tailwind-ui/list";
import { ThemeType } from "@material-tailwind-ui/theme-plugin";
import ColorItem from "@/app/(root)/themes/_components/ColorItem/ColorItem";
import { Typography } from "@material-tailwind-ui/typography";
import { PrimaryColor } from "@material-tailwind-ui/theme-plugin/src";

interface PrimaryColorListProps {
  colors: ThemeType["colors"];
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
  const { colors } = props;
  return primaryColors.map((color, index) => {
    const colorValue = colors[color] as PrimaryColor;
    return (
      <>
        <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Typography>
        <List className={"mb-4"}>
          <ColorItem
            key={index}
            color={colorValue.DEFAULT}
            name={"default"}
          />
          <ColorItem
            key={index}
            color={colorValue.text}
            name={"text"}
          />
          <ColorItem
            key={index}
            color={colorValue.container}
            name={"container"}
          />
          <ColorItem
            key={index}
            color={colorValue["container-text"]}
            name={"container text"}
          />
        </List>
      </>
    );
  });
};

export default PrimaryColorList;
