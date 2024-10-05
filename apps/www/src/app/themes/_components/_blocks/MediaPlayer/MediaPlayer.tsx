import React from "react";
import { CardContent, CardMedia } from "@andore-ui/card";
import { Typography } from "@andore-ui/typography";
import { LinearProgress } from "@andore-ui/linear-progress";
import { IconButton } from "@andore-ui/icon-button";
import SkipPreviousIcon from "@/app/_components/icons/SkipPreviousIcon";
import PlayIcon from "@/app/_components/icons/PlayIcon";
import SkipNextIcon from "@/app/_components/icons/SkipNextIcon";
import path from "node:path";
import fs from "node:fs";
import CopyClipboardButton from "@/app/_components/CopyClipboardButton/CopyClipboardButton";
import CardMediaPlayer from "@/app/themes/_components/_blocks/MediaPlayer/CardMediaPlayer";

const readCopyFile = async () => {
  const filePath = path.join(
    process.cwd(),
    "src/app/themes/_components/_blocks/MediaPlayer",
    "copy.txt",
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const MediaPlayer = async () => {
  const copyText = await readCopyFile();
  return (
    <CardMediaPlayer>
      <span className={"absolute right-1 top-1"}>
        {copyText && <CopyClipboardButton text={copyText} />}
      </span>
      <CardContent
        className={
          "flex flex-row py-2 gap-6 items-center justify-center h-full"
        }
      >
        <div className={"flex-col items-center hidden sm:flex"}>
          <CardMedia
            className="!rounded-full w-60 h-60 p-0 "
            alt="Healthy food"
            src="https://images.unsplash.com/photo-1563204424-2b6268a06a6c?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className={"flex flex-col justify-center flex-1 sm:flex-auto"}>
          <CardContent
            className={"flex flex-col  justify-center gap-1 my-2"}
            disabledGutters
          >
            <Typography variant={"body"} size={"md"} className={"font-bold"}>
              The awesome song
            </Typography>
            <Typography variant={"body"} size={"md"}>
              The Album
            </Typography>
          </CardContent>
          <CardContent
            className={"flex flex-col  justify-center gap-3 my-5"}
            disabledGutters
          >
            <LinearProgress size={"sm"} value={30}  aria-label={"Music progress"} />
            <div className={"flex flex-row justify-between"}>
              <Typography variant={"body"} size={"sm"}>
                1:30
              </Typography>
              <Typography variant={"body"} size={"sm"}>
                3:00
              </Typography>
            </div>
          </CardContent>
          <CardContent
            className={"flex flex-row items-center justify-center gap-3 mb-5"}
            disabledGutters
          >
            <IconButton color={"primary"} variant={"filled"} aria-label={"Previous"}>
              <SkipPreviousIcon className={"w-10 h-10"} />
            </IconButton>
            <IconButton color={"primary"} variant={"filled"} aria-label={"Play"}>
              <PlayIcon className={"w-16 h-16"} />
            </IconButton>
            <IconButton color={"primary"} variant={"filled"} aria-label={"Next"}>
              <SkipNextIcon className={"w-10 h-10"} />
            </IconButton>
          </CardContent>
        </div>
      </CardContent>
    </CardMediaPlayer>
  );
};

export default MediaPlayer;
