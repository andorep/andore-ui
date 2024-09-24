import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { Avatar, AvatarImage } from "@material-tailwind-ui/avatar";
import { Typography } from "@material-tailwind-ui/typography";
import { IconButton } from "@material-tailwind-ui/icon-button";
import FavoriteIcon from "@/app/_components/icons/FavoriteIcon";
import RepeatIcon from "@/app/_components/icons/RepeatIcon";
import FavoriteFilledIcon from "@/app/_components/icons/FavoriteFilledIcon";

const TweetCard = () => {
  return (
    <Block>
      <div className="flex items-center gap-4">
        <Avatar className={"w-12 h-12"}>
          <AvatarImage
            src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_400x400.jpg"
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
          <IconButton variant={'standard'} >
            <FavoriteFilledIcon/>
          </IconButton>
          <Typography variant={"body"} size={"sm"} className="text-secondary dark:text-secondary-dark-DEFAULT">
            10
          </Typography>
        </div>
        <div className="flex items-center">
          <IconButton variant={'standard'}>
            <RepeatIcon className={'fill-secondary'} />
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
