"use client";
import React from "react";
import Link from "next/link";
import AppIcon from "@/app/AppIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import { Search } from "@material-tailwind-ui/search";
import { IconButton } from "@material-tailwind-ui/icon-button";
import LightModeIcon from "@/app/_components/icons/LightModeIcon";
import useTheme from "@/app/_hooks/useTheme";
import DarkModeIcon from "@/app/_components/icons/DarkModeIcon";
import {usePathname} from "next/navigation";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname()
  return (
    <header className="flex items-center justify-between p-4 mx-auto container">
      <div className="left-side flex items-center pr-4 sm:pr-0 gap-3">
        <span className={"flex flex-row items-center gap-2"}>
          <AppIcon className="w-5 h-5 fill-primary dark:fill-primary-dark-DEFAULT" />
          <Link
            href="/"
            className={
              `font-semibold text-surface-text dark:text-surface-dark-text hidden md:block`
            }
          >
            andore/ui
          </Link>
        </span>
        <nav className="hidden md:block">
          <ul className="flex gap-3">
            <li>
              <Link
                href="/docs"
                className={`text-surface-text dark:text-surface-dark-text ${pathname === "/docs" ? "font-semibold" : ""}`}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/examples"
                className={`text-surface-text dark:text-surface-dark-text ${pathname === "/examples" ? "font-semibold" : ""}`}
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                href="/themes"
                className={`text-surface-text dark:text-surface-dark-text ${pathname === "/themes" ? "font-semibold" : ""}`}
              >
                Themes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-side flex flex-row items-center gap-3">
        <Search placeholder={"Search documentation..."} size={"sm"} />
        <div className="right-side flex flex-row items-center">
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
      </div>
    </header>
  );
};

export default Header;
