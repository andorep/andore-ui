import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { Surface } from "@andore-ui/surface";
import { Typography } from "@andore-ui/typography";
import { Avatar, AvatarImage } from "@andore-ui/avatar";
import path from "node:path";
import fs from "node:fs";

const readCopyFile = async () => {
  const filePath = path.join(process.cwd(), 'src/app/themes/_components/_blocks/CalendarView', "copy.txt");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const CalendarView = async () => {
  const copyText = await readCopyFile();
  return (
    <Block title={"Today"} copyText={copyText}>
      <div className={"flex flex-col gap-2"}>
        <Surface
          variant={"filled"}
          className={"border-l-primary border-l-4 rounded-sm *:rounded-l-none"}
        >
          <Typography variant={"body"} size={"md"} className={"font-medium"}>
            What is Material Design 3?
          </Typography>
          <Typography variant={"body"} size={"sm"}>
            10:00 AM - 11:00 AM
          </Typography>
          <div className={"flex flex-row gap-1 mt-1"}>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src={"./3d_avatar_14.png"} alt="Image of Colm Tuite" />
            </Avatar>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src={"./3d_avatar_30.png"} alt="Image of Colm Tuite" />
            </Avatar>
          </div>
        </Surface>
        <Surface
          variant={"filled"}
          className={"border-l-primary border-l-4 rounded-sm *:rounded-l-none"}
        >
          <Typography variant={"body"} size={"md"} className={"font-medium"}>
            Why use Tailwind CSS?
          </Typography>
          <Typography variant={"body"} size={"sm"}>
            11:00 AM - 12:00 PM
          </Typography>
        </Surface>
        <Surface
          variant={"filled"}
          className={"border-l-primary border-l-4 rounded-sm *:rounded-l-none"}
        >
          <Typography variant={"body"} size={"md"} className={"font-medium"}>
            How do we start with andore/ui?
          </Typography>
          <Typography variant={"body"} size={"sm"}>
            12:00 PM - 1:00 PM
          </Typography>
          <div className={"flex flex-row gap-1 mt-1"}>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src={"./3d_avatar_6.png"} alt="Image of Colm Tuite" />
            </Avatar>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src={"./3d_avatar_8.png"} alt="Image of Colm Tuite" />
            </Avatar>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src={"./3d_avatar_10.png"} alt="Image of Colm Tuite" />
            </Avatar>
          </div>
        </Surface>
      </div>
    </Block>
  );
};

export default CalendarView;
