import React from "react";
import { ListItem, ListItemText } from "@material-tailwind-ui/list";
import { Card } from "@material-tailwind-ui/card";

interface ColorItemProps {
  color: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement>, color: string) => void;
}

const ColorItem = (props: ColorItemProps) => {
  const { color, name, onClick } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event, color);
    }
  }
  return (
    <ListItem>
      <Card className="w-10 h-10" onClick={handleClick}>
        <span
          className="w-full h-full block rounded-[inherit]"
          style={{ background: color }}
        />
      </Card>
      <ListItemText supportingText={color}>
        <span className={"font-medium"}>{name}</span>
      </ListItemText>
    </ListItem>
  );
};

export default ColorItem;
