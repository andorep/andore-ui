import React from "react";
import { ListItem, ListItemText } from "@material-tailwind-ui/list";
import { PrimaryColor } from "@material-tailwind-ui/theme-plugin/src";
import { Card } from "@material-tailwind-ui/card";

interface ColorItemProps {
  color: string;
  name: string;
}

const ColorItem = (props: ColorItemProps) => {
  const { color, name } = props;
  return (
    <ListItem>
      <Card className="w-10 h-10">
        <span
          className="w-full h-full block rounded-[inherit]"
          // @ts-ignore
          style={{ background: color }}
        />
      </Card>
      {/*@ts-ignore*/}
      <ListItemText supportingText={color}>
        <span className={"font-medium"}>{name}</span>
      </ListItemText>
    </ListItem>
  );
};

export default ColorItem;
