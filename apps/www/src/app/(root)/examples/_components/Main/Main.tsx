import React from "react";
import { Typography } from "@material-tailwind-ui/typography";
import AppContainer from "@/app/(root)/examples/_components/AppContainer/AppContainer";
import PhotosAppCode from "@/app/(apps)/photos/code.md";
import ChatAppCode from "@/app/(apps)/chat/code.md";
import MailAppCode from "@/app/(apps)/mail/code.md";

const Main = () => {
  return (
      <section className="flex flex-col justify-between mx-auto container">
          <section className="title flex flex-col justify-between mb-9">
        <span className={"flex items-center gap-1 mb-3"}>
          <Typography
              variant={"headline"}
              className={"text-slate-950 text-3xl sm:text-5xl"}
              size={"md"}
          >
              Built in with andore/ui
          </Typography>
        </span>
              <Typography
                  variant={"title"}
                  className={"text-slate-950 font-normal -mt-3 text-lg sm:text-2xl"}
                  size={"md"}
              >
                  The perfect starting point for your next project
              </Typography>
          </section>
          <section className="flex flex-col  justify-between mb-4 gap-12">
              <AppContainer name={"photos"} code={<PhotosAppCode  />}/>
              <AppContainer name={"chat"} code={<ChatAppCode  />}/>
              <AppContainer name={"mail"} code={<MailAppCode  />}/>
          </section>
      </section>
  );
};

export default Main;
