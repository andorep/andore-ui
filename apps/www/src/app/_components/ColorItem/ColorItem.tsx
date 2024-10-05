"use client";

import React from "react";
import { ListItem, ListItemText } from "@andore-ui/list";
import { Card } from "@andore-ui/card";

interface ColorItemProps {
  color: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement>, color: string) => void;
  className?: string;
}

const ColorItem = (props: ColorItemProps) => {
  const { color, name, onClick, className = "" } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event, color);
    }
  };
  return (
    <ListItem
      className={`w-max rounded-full h-fit ${className}`}
      onClick={handleClick}
    >
      <Card className="w-5 h-5">
        <span
          className="w-full h-full block rounded-[inherit]"
          style={{ background: color }}
        />
      </Card>
      <ListItemText>
        <span className={"font-medium"}>{name}</span>
      </ListItemText>
    </ListItem>
  );
};

export default ColorItem;
