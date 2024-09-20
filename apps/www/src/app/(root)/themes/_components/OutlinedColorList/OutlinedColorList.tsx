import React from "react";
import { List } from "@material-tailwind-ui/list";
import { ThemeType } from "@material-tailwind-ui/theme-plugin";
import ColorItem from "@/app/(root)/themes/_components/ColorItem/ColorItem";
import { Typography } from "@material-tailwind-ui/typography";

interface OutlinedColorListProps {
    colors: ThemeType["colors"];
}

const OutlinedColorList = (props: OutlinedColorListProps) => {
    const { colors } = props;
    const outlineColors = colors.outline;
    return (
        <>
            <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
                Outline
            </Typography>
            <List className={"mb-4"}>
                <List className={"mb-4"}>
                    <ColorItem
                        color={outlineColors.DEFAULT}
                        name={"default"}
                    />
                    <ColorItem
                        color={outlineColors.variant}
                        name={"variant"}
                    />
                </List>
            </List>
        </>
    );
};

export default OutlinedColorList;
