import React from "react";
import UploadFileIcon from "@/app/_components/icons/UploadFileIcon";
import { IconButton } from "@andore-ui/icon-button";
import {
  generateThemeFromMaterialThemeBuilder,
  ThemeType,
  isValidMaterialDesignThemeBuilderJSON,
} from "@andore-ui/theme";
import { Tooltip } from "@andore-ui/tooltip";
import { useSnackbar } from "@andore-ui/snackbar";

interface UploadThemeJsonProps {
  onLoaded: (theme: ThemeType) => void;
}

const UploadThemeJson = (props: UploadThemeJsonProps) => {
  const { onLoaded } = props;
  const { showSnackbar } = useSnackbar();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          if (event.target?.result) {
            const content = JSON.parse(event.target.result as string);
            if (!isValidMaterialDesignThemeBuilderJSON(content)) {
              return;
            }
            const theme = generateThemeFromMaterialThemeBuilder(content);
            onLoaded({
              colors: theme,
            });
            showSnackbar({
              description: "Theme loaded successfully",
            });
          }
        } catch (error) {
          showSnackbar({
            description: "Error loading theme",
            color: "error",
          });
        }
      };
      reader.readAsText(file);
    } else {
      showSnackbar({
        description: "Invalid file type",
        color: "error",
      });
    }
  };

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        accept=".json"
        onChange={handleFileChange}
        className={"hidden"}
      />
      <Tooltip
        title="Upload custom theme"
        placement={"top"}
        offset={15}
        delay={200}
        delayClose={0}
      >
        <IconButton
          onClick={handleOpenFile}
          className={"-ml-2 -mt-4"}
          aria-label={"Upload JSON file"}
        >
          <UploadFileIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default UploadThemeJson;
