import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { Avatar, AvatarImage } from "@andore-ui/avatar";
import { Typography } from "@andore-ui/typography";
import { IconButton } from "@andore-ui/icon-button";
import RepeatIcon from "@/app/_components/icons/RepeatIcon";
import FavoriteFilledIcon from "@/app/_components/icons/FavoriteFilledIcon";
import path from "node:path";
import fs from "node:fs";


const readCopyFile = async () => {
  const filePath = path.join(process.cwd(), 'src/app/themes/_components/_blocks/TweetCard', "copy.txt");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const TweetCard = async () => {
  const copyText = await readCopyFile();
  return (
    <Block copyText={copyText}>
      <div className="flex items-center gap-4">
        <Avatar className={"w-12 h-12"}>
          <AvatarImage
            src="./3d_avatar_13.png"
            alt="profile"
          />
        </Avatar>
        <div>
          <Typography variant={"body"} size={"md"} className="font-bold">
            John Doe
          </Typography>
          <Typography variant={"body"} size={"sm"} className="text-secondary dark:text-secondary-dark-DEFAULT">
            @johndoe
          </Typography>
        </div>
      </div>
      <Typography variant={"body"} size={"md"} className="mt-4">
        Since I use andore/ui, I have been able to build beautiful applications
        that are accessible to everyone. I am so happy to have found this
        library.
      </Typography>
      <div className="flex flex-row items-center gap-4 mt-4">
        <div className="flex items-center">
          <IconButton variant={'standard'} aria-label={'like'}>
            <FavoriteFilledIcon className={' w-6 h-6'}/>
          </IconButton>
          <Typography variant={"body"} size={"sm"} className="text-secondary dark:text-secondary-dark-DEFAULT">
            10
          </Typography>
        </div>
        <div className="flex items-center">
          <IconButton variant={'standard'} aria-label={'retweet'}>
            <RepeatIcon className={'fill-secondary w-6 h-6'} />
          </IconButton>
          <Typography variant={"body"} size={"sm"} className="text-secondary dark:text-secondary-dark-DEFAULT">
            20
          </Typography>
        </div>
      </div>
    </Block>
  );
};

export default TweetCard;
