'use client';

import React, {useState} from 'react';
import {Popover, PopoverContent, PopoverHeader} from "@material-tailwind-ui/popover";
import { HexColorPicker } from "react-colorful";
import { Typography } from "@material-tailwind-ui/typography";
import { TextField } from "@material-tailwind-ui/text-field";

interface PopoverChangeColorProps {
    anchorEl: HTMLElement | undefined;
    onClose: (color: string) => void;
    defaultColor?: string;
}

const PopoverChangeColor = (props: PopoverChangeColorProps) => {
    const {anchorEl, onClose} = props;
    const [color, setColor] = useState(props.defaultColor || "#000000");

    const handleClose = () => {
        onClose(color);
    }

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }

    return (
        <Popover
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
        >
            <PopoverHeader className={'mb-4'}>
                Customized color
                <Typography variant={"body"} size={"sm"} className={'font-normal'}>
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
                <HexColorPicker color={color} onChange={setColor} />
            </PopoverContent>
        </Popover>
    );
};

export default PopoverChangeColor;
