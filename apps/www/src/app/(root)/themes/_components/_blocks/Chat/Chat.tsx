import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { Search } from "@andore-ui/search";
import { IconButton } from "@andore-ui/icon-button";
import SendIcon from "@/app/_components/icons/SendIcon";
import { Avatar, AvatarImage } from "@andore-ui/avatar";
import { Surface } from "@andore-ui/surface";
import { Typography } from "@andore-ui/typography";
import path from "node:path";
import fs from "node:fs";


const readCopyFile = async () => {
  const filePath = path.join(process.cwd(), 'src/app/(root)/themes/_components/_blocks/Chat', "copy.txt");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const Chat =  async () => {
  const copyText = await readCopyFile();
  return (
    <Block title="John Doe" className={'pr-1'} copyText={copyText}>
      <div className={"Chat flex flex-col justify-between flex-1 gap-8"}>
        <div className={"Messages flex-1 flex flex-col gap-4 pr-2"}>
          <div className={"Message flex flex-row"}>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src="./3d_avatar_13.png" alt="profile" />
            </Avatar>
            <div className={"flex flex-col ml-2 gap-2"}>
              <Surface variant={"filled"} className={"*:p-2 w-fit"}>
                <Typography variant={'body'} size={'sm'}>Hey, how are you?</Typography>
              </Surface>
              <Surface variant={"filled"} className={"*:p-2 w-fit"}>
                <Typography variant={'body'} size={'sm'}>Did you get the files?</Typography>
              </Surface>
            </div>
          </div>
          <div className={"Message flex flex-row justify-end"}>
            <div className={"flex flex-col gap-2 items-end"}>
              <Surface variant={"filled"} className={"*:p-2 w-fit"}>
                <Typography variant={'body'} size={'sm'}>Hey, I&apos;m good. How about you?</Typography>
              </Surface>
              <Surface variant={"filled"} className={"*:p-2 w-fit"}>
                <Typography variant={'body'} size={'sm'}>Yes, I did. Thank you!</Typography>
                </Surface>
            </div>
            <Avatar className={"w-6 h-6 ml-2"}>
              <AvatarImage src="./3d_avatar_14.png" alt="profile" />
            </Avatar>
          </div>
          <div className={"Message flex flex-row"}>
            <Avatar className={"w-6 h-6"}>
              <AvatarImage src="./3d_avatar_13.png" alt="profile" />
            </Avatar>
            <div className={"flex flex-col ml-2 gap-2"}>
              <Surface variant={"filled"} className={"*:p-2 w-fit"}>
                <Typography variant={'body'} size={'sm'}>Great! Let me know if you need anything else.</Typography>
              </Surface>
              <Surface variant={"filled"} className={"*:p-2 w-fit"}>
                <Typography variant={'body'} size={'sm'}>🚀</Typography>
              </Surface>
            </div>
          </div>
        </div>
        <div className={"Input flex flex-row"}>
          <Search placeholder="Type a message" size={"sm"} />
          <IconButton aria-label="send">
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </Block>
  );
};

export default Chat;
