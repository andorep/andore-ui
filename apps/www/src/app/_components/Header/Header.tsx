"use client";
import React from "react";
import Link from "next/link";
import AppIcon from "@/app/AppIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import { TextField } from "@material-tailwind-ui/text-field";
import { IconButton } from "@material-tailwind-ui/icon-button";
import LightModeIcon from "@/app/_components/icons/LightModeIcon";
import useTheme from "@/app/_hooks/useTheme";
import DarkModeIcon from "@/app/_components/icons/DarkModeIcon";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex items-center justify-between p-4 mx-auto container">
      <div className="left-side flex items-center space-x-4 gap-3">
        <span className={"flex flex-row items-center gap-2"}>
          <AppIcon className="w-8 h-8" />
          <span
            className={
              "font-semibold text-surface-text dark:text-surface-dark-text"
            }
          >
            andore/ui
          </span>
        </span>
        <nav>
          <ul className="flex space-x-4 gap-3">
            <li>
              <Link
                href="/docs"
                className={"text-surface-text dark:text-surface-dark-text"}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/components"
                className={"text-surface-text dark:text-surface-dark-text"}
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="/apps"
                className={"text-surface-text dark:text-surface-dark-text"}
              >
                Apps
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-side flex flex-row items-center gap-3">
        <TextField placeholder={"Search documentation..."} />
        <IconButton>
          <a
            href="https://github.com/andreperegrina/material-tailwind-ui"
            target="_blank"
            className={"text-surface-text dark:text-surface-dark-text"}
          >
            <GithubIcon className={"w-6 h-6"} />
          </a>
        </IconButton>
        <IconButton onClick={toggleTheme}>
          {theme === "light" && <LightModeIcon className={"w-6 h-6"} />}
          {theme === "dark" && <DarkModeIcon className={"w-6 h-6"} />}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
