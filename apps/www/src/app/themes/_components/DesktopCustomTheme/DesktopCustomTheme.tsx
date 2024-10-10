"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ThemeType, transformColorsToCssVariables } from "@andore-ui/theme";
import { Typography } from "@andore-ui/typography";
import PopoverChangeColor from "@/app/themes/_components/PopoverChangeColor/PopoverChangeColor";
import { IconButton } from "@andore-ui/icon-button";
import ResetWhiteBalanceIcon from "@/app/_components/icons/ResetWhiteBalanceIcon";
import { clone } from "@/app/_utils/object.util";
import DownloadTheme from "@/app/themes/_components/DownloadTheme/DownloadTheme";
import { Tooltip } from "@andore-ui/tooltip";
import { generateColorScheme } from "@/app/_utils/material.util";
import ColorItem from "@/app/_components/ColorItem/ColorItem";
import { Divider } from "@andore-ui/divider";
import PersonRaisedHandIcon from "@/app/_components/icons/PersonRaisedHandIcon";

interface DesktopCustomThemeProps {
  defaultTheme?: ThemeType;
  blocksRef?: React.RefObject<HTMLDivElement>;
}

const themeCSS = `
.custom-theme {
    --aui-gray-50: 249 250 251;
    --aui-gray-100: 243 244 246;
    --aui-gray-200: 229 231 235;
    --aui-gray-300: 209 213 219;
    --aui-gray-400: 156 163 175;
    --aui-gray-500: 107 114 128;
    --aui-gray-600: 75 85 99;
    --aui-gray-700: 55 65 81;
    --aui-gray-800: 31 41 55;
    --aui-gray-900: 17 24 39;
    --aui-gray-950: 3 7 18;
    --aui-white: 255 255 255;
    --aui-black: 0 0 0;
    --aui-outline: 122 117 127;
    --aui-outline-variant: 203 196 207;
    --aui-outline-dark: 148 143 153;
    --aui-outline-dark-variant: 73 69 78;
    --aui-surface: 254 247 255;
    --aui-surface-text: 29 27 32;
    --aui-surface-variant: 231 224 235;
    --aui-surface-text-variant: 73 69 78;
    --aui-surface-dim: 222 216 224;
    --aui-surface-bright: 254 247 255;
    --aui-surface-container-lowest: 255 255 255;
    --aui-surface-container-low: 248 241 250;
    --aui-surface-container: 242 236 244;
    --aui-surface-container-high: 237 230 238;
    --aui-surface-container-highest: 231 224 232;
    --aui-surface-scrim: 0 0 0;
    --aui-surface-inverse: 50 47 53;
    --aui-surface-inverse-text: 245 239 247;
    --aui-surface-inverse-primary: 211 188 253;
    --aui-surface-dark-DEFAULT: 21 18 24;
    --aui-surface-dark-text: 231 224 232;
    --aui-surface-dark-variant: 73 69 78;
    --aui-surface-dark-text-variant: 203 196 207;
    --aui-surface-dark-dim: 21 18 24;
    --aui-surface-dark-bright: 59 56 62;
    --aui-surface-dark-container-lowest: 15 13 19;
    --aui-surface-dark-container-low: 29 27 32;
    --aui-surface-dark-container: 33 31 36;
    --aui-surface-dark-container-high: 44 41 47;
    --aui-surface-dark-container-highest: 54 52 58;
    --aui-surface-dark-scrim: 0 0 0;
    --aui-surface-dark-inverse: 231 224 232;
    --aui-surface-dark-inverse-text: 50 47 53;
    --aui-surface-dark-inverse-primary: 104 84 142;
    --aui-primary: 101 85 143;
    --aui-primary-text: 255 255 255;
    --aui-primary-container: 234 221 255;
    --aui-primary-container-text: 33 0 93;
    --aui-primary-dark-DEFAULT: 208 188 254;
    --aui-primary-dark-text: 56 30 114;
    --aui-primary-dark-container: 79 55 139;
    --aui-primary-dark-container-text: 234 221 255;
    --aui-secondary: 99 91 112;
    --aui-secondary-text: 255 255 255;
    --aui-secondary-container: 233 222 248;
    --aui-secondary-container-text: 31 24 43;
    --aui-secondary-dark-DEFAULT: 205 194 219;
    --aui-secondary-dark-text: 52 45 64;
    --aui-secondary-dark-container: 75 67 88;
    --aui-secondary-dark-container-text: 233 222 248;
    --aui-info: 76 92 146;
    --aui-info-text: 255 255 255;
    --aui-info-container: 220 225 255;
    --aui-info-container-text: 2 23 75;
    --aui-info-dark-DEFAULT: 181 196 255;
    --aui-info-dark-text: 28 45 97;
    --aui-info-dark-container: 52 68 121;
    --aui-info-dark-container-text: 220 225 255;
    --aui-success: 0 105 107;
    --aui-success-text: 255 255 255;
    --aui-success-container: 156 241 242;
    --aui-success-container-text: 0 32 32;
    --aui-success-dark-DEFAULT: 128 212 213;
    --aui-success-dark-text: 0 55 55;
    --aui-success-dark-container: 0 79 80;
    --aui-success-dark-container-text: 156 241 242;
    --aui-warning: 124 88 13;
    --aui-warning-text: 255 255 255;
    --aui-warning-container: 255 222 171;
    --aui-warning-container-text: 39 25 0;
    --aui-warning-dark-DEFAULT: 239 191 109;
    --aui-warning-dark-text: 66 44 0;
    --aui-warning-dark-container: 95 65 0;
    --aui-warning-dark-container-text: 255 222 171;
    --aui-error: 186 26 26;
    --aui-error-text: 255 255 255;
    --aui-error-container: 255 218 214;
    --aui-error-container-text: 65 0 2;
    --aui-error-dark-DEFAULT: 255 180 171;
    --aui-error-dark-text: 105 0 5;
    --aui-error-dark-container: 147 0 10;
    --aui-error-dark-container-text: 255 218 214;
}
`;

const rootClasses = twMerge(
  "sticky top-20 z-50",
  "hidden lg:flex flex-col ",
  "p-4 rounded-md",
  "w-fit h-fit",
  "bg-surface-container-lowest dark:bg-surface-dark-container-lowest border-outline-variant",
  "border-solid border dark:border-outline-dark-variant custom-theme",
);

const DesktopCustomTheme = (props: DesktopCustomThemeProps) => {
  const { defaultTheme } = props;
  const [theme, setTheme] = React.useState<ThemeType | undefined>(() => {
    return clone(defaultTheme) as ThemeType;
  });
  const [hasThemeChanged, setHasThemeChanged] = React.useState(false);
  const styleSheetRef = React.useRef<HTMLStyleElement | null>(null);
  const [colorSeed, setColorSeed] = React.useState<string>(
    theme?.colors?.primary?.DEFAULT ?? "#FFFFFF",
  );
  const [anchorElUpload, setAnchorElUpload] = React.useState<
    HTMLElement | undefined
  >();

  const [tooltipHelpMessage, setTooltipHelpMessage] = React.useState<string>(
    "Change source color to generate a new theme",
  );

  useEffect(() => {
    styleSheetRef.current = document.createElement("style");
    styleSheetRef.current.type = "text/css";
    styleSheetRef.current.appendChild(document.createTextNode(themeCSS));
    document.head.appendChild(styleSheetRef.current);
    return () => {
      if (styleSheetRef.current) {
        document.head.removeChild(styleSheetRef.current);
      }
    };
  }, []);

  const handleResetTheme = () => {
    setTheme(clone(defaultTheme) as ThemeType);
    setHasThemeChanged(false);
    setColorSeed(defaultTheme?.colors?.primary?.DEFAULT ?? "#FFFFFF");
    styleSheetRef.current!.innerHTML = themeCSS;
  };

  const handleThemeLoaded = (color: string) => {
    const themeFromSeed = generateColorScheme(color);
    const themeColors = {
      colors: themeFromSeed,
    };
    const cssVariablesJSON = transformColorsToCssVariables(themeColors.colors);

    // convert JSON to CSS text
    let cssVariables = ".custom-theme {\n";
    for (const [key, value] of Object.entries(cssVariablesJSON)) {
      cssVariables += `  ${key}: ${value};\n`;
    }
    cssVariables += "}\n";

    styleSheetRef.current!.innerHTML = cssVariables;

    setTheme({
      ...theme,
      colors: {
        ...theme?.colors,
        ...themeColors.colors,
      },
    });
    setAnchorElUpload(undefined);
    setColorSeed(color);
    setHasThemeChanged(true);
  };

  const handleClosePopover = () => {
    setAnchorElUpload(undefined);
  };

  const handleClickSeed = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUpload(event.currentTarget);
  };

  const handleClickHelp = () => {
    setTooltipHelpMessage("Go away! This doesn't do anything!");
    window.setTimeout(() => {
      setTooltipHelpMessage("Change seed color to generate a new theme");
    }, 3000);
  };

  return (
    <section className={rootClasses}>
      <div className={"flex flex-row gap-1 justify-between"}>
        <Typography variant={"title"} size={"sm"} className={"mb-4"}>
          Theme
        </Typography>
        {hasThemeChanged && (
          <Tooltip
            title="Reset theme"
            placement={"top"}
            offset={15}
            delay={200}
            delayClose={0}
          >
            <IconButton
              onClick={handleResetTheme}
              className={"-mt-2 -mr-2"}
              color={"secondary"}
            >
              <ResetWhiteBalanceIcon />
            </IconButton>
          </Tooltip>
        )}
        {!hasThemeChanged && (
          <Tooltip
            title={tooltipHelpMessage}
            placement={"top"}
            offset={15}
            delay={200}
            delayClose={0}
            className={'z-[1000]'}
          >
            <IconButton
              className={"-mt-2 -mr-2"}
              color={"secondary"}
              onClick={handleClickHelp}
            >
              <PersonRaisedHandIcon className={"w-5 h-5"} />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <ColorItem
        className={"w-full p-1"}
        color={colorSeed}
        name={"Source"}
        onClick={handleClickSeed}
      />
      <Divider />
      <div className={"flex flex-col gap-2 mb-2"}>
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.primary?.DEFAULT ?? "#FFFFFF"}
          name={"Primary"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.secondary?.DEFAULT ?? "#FFFFFF"}
          name={"Secondary"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.error?.DEFAULT ?? "#FFFFFF"}
          name={"Error"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.surface?.DEFAULT ?? "#FFFFFF"}
          name={"Surface"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.outline?.DEFAULT ?? "#FFFFFF"}
          name={"Outline"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.info?.DEFAULT ?? "#FFFFFF"}
          name={"Info"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.warning?.DEFAULT ?? "#FFFFFF"}
          name={"Warning"}
        />
        <ColorItem
          className={"w-full p-1"}
          color={theme?.colors?.success?.DEFAULT ?? "#FFFFFF"}
          name={"Success"}
        />
      </div>
      <DownloadTheme theme={theme} />
      <PopoverChangeColor
        key={colorSeed}
        anchorEl={anchorElUpload}
        onClose={handleClosePopover}
        onApply={handleThemeLoaded}
        defaultColor={colorSeed}
      />
    </section>
  );
};

export default DesktopCustomTheme;
