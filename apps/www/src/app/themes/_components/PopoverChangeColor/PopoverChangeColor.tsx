"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverActions,
  PopoverContent,
  PopoverHeader,
} from "@andore-ui/popover";
import { HexColorPicker } from "react-colorful";
import { Typography } from "@andore-ui/typography";
import { TextField } from "@andore-ui/text-field";
import { Button } from "@andore-ui/button";

interface PopoverChangeColorProps {
  anchorEl: HTMLElement | undefined;
  onApply: (color: string) => void;
  onClose: () => void;
  defaultColor?: string;
}

const PopoverChangeColor = (props: PopoverChangeColorProps) => {
  const { anchorEl, onClose, onApply } = props;
  const [color, setColor] = useState(props.defaultColor || "#000000");

  const handleApply = () => {
    onApply(color);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorEl={anchorEl}
      className={"z-50"}
    >
      <PopoverHeader className={"mb-4"}>
        Customized color
        <Typography variant={"body"} size={"sm"} className={"font-normal"}>
          Pick a color and add your style
        </Typography>
      </PopoverHeader>
      <PopoverContent>
        <TextField
          label={"Color"}
          value={color}
          onChange={handleColorChange}
          className={"mb-4"}
        />
        <HexColorPicker color={color} onChange={setColor} className={'!w-auto'} />
      </PopoverContent>
      <PopoverActions className={"flex justify-end"}>
        <Button variant={"text"} onClick={onClose}>
          Cancel
        </Button>
        <Button variant={"text"} onClick={handleApply}>
          Apply
        </Button>
      </PopoverActions>
    </Popover>
  );
};

export default PopoverChangeColor;
