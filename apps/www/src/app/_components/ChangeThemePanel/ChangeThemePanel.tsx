"use client";

import { ToggleButton, ToggleButtonGroup } from "@andore-ui/toggle-button";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const themes = {
  animation: ["Default", "Slow", "Fast"],
  "border-radius": ["Default", "Sharp", "Smooth"],
  "box-shadow": ["Default", "Echo", "Glow"],
  colors: ["Default", "Miku", "Zenitsu"],
  "dark-mode": ["Default", "Forest"],
  spacing: ["Default", "Compact", "Spacious"],
};

const changeThemePanelClasses = twMerge(
  "change-theme-panel ",
  "p-4",
  " rounded ",
  "bg-surface dark:bg-surface-dark-DEFAULT",
  "border border-solid border-outline-variant dark:border-outline-dark-variant",
  "flex flex-col",
);

interface ChangeThemePanelProps extends PropsWithChildren {
  disabledFloating?: boolean;
  className?: string;
  theme:
    | "animation"
    | "border-radius"
    | "box-shadow"
    | "colors"
    | "dark-mode"
    | "spacing";
}

const ChangeThemePanel = (props: ChangeThemePanelProps) => {
  const { theme, children, disabledFloating, className } = props;
  const themeValues = themes[theme];
  const [currentTheme, setCurrentTheme] = React.useState(themeValues[0]);

  const handleThemeClick = (selectedTheme: string) => {
    setCurrentTheme(selectedTheme);
  };

  const themeClass = `theme-${currentTheme.split(" ").join("-").toLowerCase()}`;

  const rootClasses = twMerge(changeThemePanelClasses, className);

  return (
    <section className={rootClasses}>
      <label className="text-surface-text dark:text-surface-dark-text text-base mb-1 block">
        Select a theme:
      </label>
      <ToggleButtonGroup density={-3}>
        {themeValues.map((value) => (
          <ToggleButton
            key={value}
            value={value}
            selected={currentTheme === value}
            onClick={() => handleThemeClick(value)}
          >
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <section className={`theme-preview ${themeClass}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-fit w-fit relative">
            <div className="invisible w-fit h-fit my-7">{children}</div>
            <div
              className={`absolute top-7 w-fit h-fit ${disabledFloating ? "" : "animate-floatingElement"}`}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChangeThemePanel;
