import React from "react";
import { Typography } from "@material-tailwind-ui/typography";
import CustomTheme from "@/app/(root)/themes/_components/CustomTheme/CustomTheme";
import {theme} from "@material-tailwind-ui/theme-plugin";
import Chat from "@/app/@chat/page";


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
              Shape Your Experience
          </Typography>
        </span>
              <Typography
                  variant={"title"}
                  className={"text-slate-950 font-normal -mt-3 text-lg sm:text-2xl"}
                  size={"md"}
              >
                  Add your own personal touch to your application
              </Typography>
          </section>
          <section className="flex flex-row max-h-[500px] justify-between mb-4 rounded">
              <CustomTheme defaultTheme={theme}/>
              <section className="flex-1 rounded-[inherit] rounded-l-none bg-surface-container-highest dark:bg-surface-dark-container-highest">
                  <Chat/>
              </section>
          </section>
      </section>
  );
};

export default Main;
