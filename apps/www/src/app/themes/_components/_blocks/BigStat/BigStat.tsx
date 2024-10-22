import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { Typography } from "@andore-ui/typography";
import CheckIcon from "@/app/_components/icons/CheckIcon";
import TrendingUpIcon from "@/app/_components/icons/TrendingUpIcon";
import fs from "node:fs";
import path from "node:path";

const readCopyFile = async () => {
  const filePath = path.join(process.cwd(), 'src/app/themes/_components/_blocks/BigStat', "copy.txt");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const BigStat = async () => {
  const copyText = await readCopyFile();
  return (
    <Block copyText={copyText}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-4 rounded-full bg-primary dark:bg-primary-dark-DEFAULT">
            <TrendingUpIcon className="h-8 w-8 text-primary-text dark:text-primary-dark-text" />
          </div>
          <div>
            <Typography variant={"title"} size={"sm"}>
              Total Revenue
            </Typography>
            <Typography
              variant={"body"}
              size={"md"}
              className="text-secondary dark:text-secondary-dark-DEFAULT"
            >
              Last 30 days
            </Typography>
          </div>
        </div>
        <div className="text-success dark:text-success-dark-DEFAULT flex items-center space-x-1">
          <CheckIcon className="h-5 w-5" />
          <Typography
            variant={"body"}
            size={"md"}
            className="text-success dark:text-success-dark-DEFAULT"
          >
            + 15%
          </Typography>
        </div>
      </div>

      <div className="mt-6">
        <Typography variant={"headline"} size={"sm"}>
          $42,560
        </Typography>
        <Typography
          variant={"body"}
          size={"md"}
          className="text-secondary dark:text-secondary-dark-DEFAULT"
        >
          usd
        </Typography>
      </div>
    </Block>
  );
};

export default BigStat;
