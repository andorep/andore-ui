import React from "react";
import { ThemeType } from "@andore-ui/theme-plugin";
import { IconButton } from "@andore-ui/icon-button";
import DownloadIcon from "@/app/_components/icons/DownloadIcon";
import { copyToClipboard } from "@/app/_utils/html.uitil";
import { Tooltip } from "@andore-ui/tooltip";

interface DownloadThemeProps {
  theme?: ThemeType;
}

const DownloadTheme = (props: DownloadThemeProps) => {
  const { theme } = props;
  const [temporaryTooltipText, setTemporaryTooltipText] = React.useState<string | undefined>(undefined);

  const handleDownload = async () => {
    if (!theme) {
      return;
    }
    await copyToClipboard(JSON.stringify(theme.colors, null, 2));
    setTemporaryTooltipText("Copied into clipboard 😉");
  };

  const handleTooltipClose = () => {
    setTemporaryTooltipText(undefined);
  };

  return (
    <Tooltip
      title={temporaryTooltipText || "Copy theme"}
      placement={"top"}
      offset={15}
      delay={200}
      delayClose={0}
      onOpenChange={handleTooltipClose}
    >
      <IconButton
        onClick={handleDownload}
        className={"-ml-4 -mt-4"}
        aria-label={"Upload JSON file"}
      >
        <DownloadIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DownloadTheme;
