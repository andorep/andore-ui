import React from "react";
import { Typography } from "@material-tailwind-ui/typography";
import AppContainer from "@/app/(root)/examples/_components/AppContainer/AppContainer";
import ChatAppCode from "@/app/(apps)/chat/code.md";

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
            Examples built with andore/ui
          </Typography>
        </span>
              <Typography
                  variant={"title"}
                  className={"text-slate-950 font-normal -mt-3 text-lg sm:text-2xl"}
                  size={"md"}
              >
                  The perfect examples to get you hooked
              </Typography>
          </section>
          <section className="flex flex-col  justify-between mb-4">
              <AppContainer name={"chat"} code={<ChatAppCode  />}/>
          </section>
      </section>
  );
};

export default Main;
