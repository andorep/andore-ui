"use client";

import React from "react";
import { ListItem, ListItemText } from "@andore-ui/list";
import { Card } from "@andore-ui/card";
import { Surface } from "@andore-ui/surface";

interface ColorItemProps {
  color: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement>, color: string) => void;
  className?: string;
}

const ColorItem = (props: ColorItemProps) => {
  const { color, name, onClick, className = "" } = props;

  const handleClick = onClick
    ? (event: React.MouseEvent<HTMLElement>) => {
        if (onClick) {
          onClick(event, color);
        }
      }
    : undefined;
  return (
    <ListItem
      className={`w-max rounded-full h-fit ${className}`}
      onClick={handleClick}
    >
      <div className="w-5 h-5 rounded-full">
        <span
          className="w-full h-full block rounded-[inherit]"
          style={{ background: color }}
        />
      </div>
      <ListItemText>
        <span className={"font-medium"}>{name}</span>
      </ListItemText>
    </ListItem>
  );
};

export default ColorItem;
