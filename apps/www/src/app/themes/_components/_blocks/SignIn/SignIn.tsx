import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { Typography } from "@andore-ui/typography";
import { Button } from "@andore-ui/button";
import { Divider } from "@andore-ui/divider";
import { TextField } from "@andore-ui/text-field";
import GoogleIcon from "@/app/_components/icons/GoogleIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import path from "node:path";
import fs from "node:fs";


const readCopyFile = async () => {
    const filePath = path.join(process.cwd(), 'src/app/themes/_components/_blocks/SignIn', "copy.txt");
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
};

const SignIn = async () => {
    const copyText = await readCopyFile();
  return (
    <Block copyText={copyText}>
      <div className="flex flex-col mb-4">
        <Typography variant={"title"} size={"md"}>
          Sign In
        </Typography>
        <Typography variant={"body"} size={"md"}>
          Sign in to your account
        </Typography>
      </div>
      <div className="flex flex-row gap-4">
        <Button variant={"outlined"} startIcon={<GoogleIcon />} className={'flex-1'}>
          Google
        </Button>
        <Button variant={"outlined"} startIcon={<GithubIcon />} className={'flex-1'}>
          Github
        </Button>
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <Typography variant={"body"} size={"md"}>
          Or sign in with your email
        </Typography>
        <div className="flex flex-col gap-4">
          <TextField
            variant={"outlined"}
            label={"Email"}
            placeholder={"Type your email"}
            type={"email"}
            required
          />
          <TextField
            variant={"outlined"}
            label={"Password"}
            placeholder={"Type your password"}
            type={"password"}
            required
          />
          <Button variant={"filled"}>Sign In</Button>
        </div>
      </div>
    </Block>
  );
};

export default SignIn;
