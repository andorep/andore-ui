"use client";

import React from "react";
import { Button } from "@andore-ui/button";
import { BottomSheet } from "@andore-ui/bottom-sheet";
import { List, ListItem, ListItemText } from "@andore-ui/list";
import { Card } from "@andore-ui/card";
import { ThemeType } from "@andore-ui/theme";

interface MobileCustomThemeProps {
  defaultTheme?: ThemeType;
  blocksRef?: React.RefObject<HTMLDivElement>;
}

const themes = ["default", "deku", "miku", "rem", "zenitsu"];

const themeTitles = {
  default: "Default",
  deku: "Deku",
  miku: "Miku Nakano",
  rem: "Rem",
  zenitsu: "Zenitsu",
} as Record<string, string>;

const themeDescriptions = {
  default: "The default theme",
  deku: "A theme to save the day",
  miku: "A theme to learn about the Sengoku Period",
  rem: "A theme to slay magical beasts",
  zenitsu: "A theme to sleep while slaying demons",
} as Record<string, string>;

const themeClasses = {
  default: "theme-default",
  deku: "theme-deku",
  miku: "theme-miku",
  rem: "theme-rem",
  zenitsu: "theme-zenitsu",
} as Record<string, string>;

const MobileCustomTheme = (props: MobileCustomThemeProps) => {
  const { blocksRef } = props;
  const [theme, setTheme] = React.useState('default');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleThemeClick = (name: string) => () => {
    const themes = Object.values(themeClasses);
    setTheme(name);
    blocksRef?.current?.classList.remove(...themes);
    if (name === "default") {
      handleClose();
      return;
    }
    blocksRef?.current?.classList.add(themeClasses[name]);
    handleClose();
  };

  return (
    <section className={`flex flex-col w-full h-fit mb-3 ${themeClasses[theme]}`}>
      <span>
        <Button variant={"filled"} color={"primary"} onClick={handleOpen}>
          Customize
        </Button>
        <BottomSheet
          open={isOpen}
          onClose={handleClose}
          title={"Try a new theme!"}
          description={"Pick the theme that best suits your style"}
        >
          <List>
            {themes.map((theme) => (
              <ListItem key={theme} onClick={handleThemeClick(theme)}>
                <Card className="w-10 h-10 min-w-10 min-h-10">
                  <span
                    className={`w-full h-full block rounded-[inherit] bg-primary ${themeClasses[theme]}`}
                  />
                </Card>
                <ListItemText
                  supportingText={themeDescriptions[theme]}
                  className={
                    "flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap *:flex-grow *:overflow-hidden *:overflow-ellipsis *:whitespace-nowrap"
                  }
                >
                  {themeTitles[theme]}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </BottomSheet>
      </span>
    </section>
  );
};

export default MobileCustomTheme;
