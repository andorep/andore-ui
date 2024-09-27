"use client";
import React from "react";
import Link from "next/link";
import AppIcon from "@/app/(root)/_components/AppIcon/AppIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import { Search } from "@andore-ui/search";
import { IconButton } from "@andore-ui/icon-button";
import LightModeIcon from "@/app/_components/icons/LightModeIcon";
import useTheme from "@/app//_hooks/useTheme";
import DarkModeIcon from "@/app/_components/icons/DarkModeIcon";
import { usePathname } from "next/navigation";
import {twMerge} from "tailwind-merge";

const linkClassName = twMerge(
    "font-medium",
    "text-secondary dark:text-secondary-dark-DEFAULT",
    "data-[active='true']:font-bold",
    "data-[active='true']:text-primary dark:data-[active='true']:text-primary-dark-DEFAULT",
);

const headerContentClassName = twMerge(
    "flex items-center justify-between",
    "p-4 mx-auto container relative",
    "before:absolute before:bottom-0 before:h-[1px] before:w-full",
    "before:bg-[radial-gradient(62.87%_100%_at_50%_100%,rgb(var(--aui-outline-variant)/0.60)_0%,rgb(var(--aui-outline-variant)/0)_100%)]",
    "before:dark:bg-[radial-gradient(62.87%_100%_at_50%_100%,rgb(var(--aui-outline-dark-variant)/0.60)_0%,rgb(var(--aui-outline-dark-variant)/0)_100%)]",
);

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  return (
    <header className="min-w-full sticky top-0 z-50 backdrop-blur-sm bg-surface-container-lowest/70 dark:bg-surface-dark-container-lowest/70">
      <div
        className={headerContentClassName}
      >
        <div className="left-side flex items-center pr-4 sm:pr-0 gap-3">
          <span className={"flex flex-row items-center gap-2"}>
            <AppIcon className="w-5 h-5 fill-primary dark:fill-primary-dark-DEFAULT" />
            <Link
              href="/"
              className={`font-semibold text-surface-text dark:text-surface-dark-text hidden md:block`}
            >
              andore/ui
            </Link>
          </span>
          <nav className="hidden md:block">
            <ul className="flex gap-3">
              <li>
                <Link
                  data-active={pathname === "/docs"}
                  href="/docs"
                  className={linkClassName}
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  data-active={pathname === "/examples"}
                  href="/examples"
                  className={linkClassName}
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  data-active={pathname === "/themes"}
                  href="/themes"
                  className={linkClassName}
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
                href="https://github.com/andreperegrina/andore-ui"
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
      </div>
    </header>
  );
};

export default Header;
