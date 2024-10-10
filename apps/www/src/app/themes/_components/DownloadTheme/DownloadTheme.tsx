import React from "react";
import { ThemeType } from "@andore-ui/theme";
import { copyToClipboard } from "@/app/_utils/html.uitil";
import { Button } from "@andore-ui/button";

interface DownloadThemeProps {
  theme?: ThemeType;
}

const DownloadTheme = (props: DownloadThemeProps) => {
  const { theme } = props;
  const [buttonText, setButtonText] = React.useState("Copy theme");

  const handleDownload = async () => {
    if (!theme) {
      return;
    }
    await copyToClipboard(JSON.stringify(theme.colors, null, 2));
    setButtonText("Copied!");
    setTimeout(() => {
      setButtonText("Copy theme");
    }, 2000);
  };


  return (
    <Button
        className={"!text-sm"}
      variant={"text"}
      onClick={handleDownload}
      aria-label={"Copy JSON file"}
    >
      {buttonText}
    </Button>
  );
};

export default DownloadTheme;
