import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { Typography } from "@material-tailwind-ui/typography";
import { Button } from "@material-tailwind-ui/button";
import { Divider } from "@material-tailwind-ui/divider";
import { TextField } from "@material-tailwind-ui/text-field";
import GoogleIcon from "@/app/_components/icons/GoogleIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";

const SignIn = () => {
  return (
    <Block>
      <div className="flex flex-col mb-4">
        <Typography variant={"title"} size={"md"}>
          Sign In
        </Typography>
        <Typography variant={"body"} size={"md"}>
          Sign in to your account
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Button variant={"outlined"} startIcon={<GoogleIcon />}>
          Google
        </Button>
        <Button variant={"outlined"} startIcon={<GithubIcon />}>
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
            placeholder={"Email"}
            type={"email"}
            required
          />
          <TextField
            variant={"outlined"}
            label={"Password"}
            placeholder={"Password"}
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
