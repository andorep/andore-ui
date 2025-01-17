import React from "react";
import { List } from "@andore-ui/list";
import { ThemeType } from "@andore-ui/theme";
import ColorItem from "@/app/_components/ColorItem/ColorItem";
import { Typography } from "@andore-ui/typography";

interface OutlinedColorListProps {
  colors: ThemeType["colors"];
  onClick?: (
    event: React.MouseEvent<HTMLElement>,
    name: string,
    color: string,
  ) => void;
}

const OutlinedColorList = (props: OutlinedColorListProps) => {
  const { colors, onClick } = props;
  const outlineColors = colors.outline;
  const handleClick =
    (name: string) => (event: React.MouseEvent<HTMLElement>, color: string) => {
      if (onClick) {
        onClick(event, name, color);
      }
    };
  return (
    <div className={"w-fit h-fit flex flex-col gap-2"}>
      <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
        Outline
      </Typography>
      <List className={"flex-row"}>
        <ColorItem
          color={outlineColors?.DEFAULT ?? ""}
          name={"default"}
          onClick={handleClick(`outline.DEFAULT`)}
        />
        <ColorItem
          color={outlineColors?.variant ?? ""}
          name={"variant"}
          onClick={handleClick(`outline.variant`)}
        />
      </List>
    </div>
  );
};

export default OutlinedColorList;
