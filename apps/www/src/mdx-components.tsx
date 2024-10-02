import { Divider } from "@andore-ui/divider";
import { Typography } from "@andore-ui/typography";
import type { MDXComponents } from "mdx/types";
import React from "react";
import { twMerge } from "tailwind-merge";

const LIClassName = twMerge(
  "group/li flex flex-col gap-2.5",
  "text-surface-text dark:text-surface-dark-text text-sm leading-[18px] tracking-[0.4px] group/li flex flex-col gap-2.5",
  "group-[]/ul:text-lg group-[]/ul:leading-[24px] group-[]/ul:tracking-[0.5px] group-[]/ul:list-item",
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Typography
        id={children?.toString().toLowerCase().replace(/\s/g, "-")}
        component={"h1"}
        variant={"headline"}
        className={"text-3xl sm:text-5xl mb-2"}
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        id={children?.toString().toLowerCase().replace(/\s/g, "-")}
        component={"h2"}
        variant={"headline"}
        className={"text-lg sm:text-2xl mb-2 font-bold"}
        size={"md"}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        id={children?.toString().toLowerCase().replace(/\s/g, "-")}
        component={"h3"}
        variant={"headline"}
        className={"text-lg sm:text-xl mb-2 font-bold"}
        size={"sm"}
      >
        {children}
      </Typography>
    ),
    ul: ({ children }) => (
      <ul
        className={
          "group/ul group-[]/li:pl-2 flex flex-col gap-2.5 marker:text-primary dark:marker:text-primary-dark-DEFAULT list-disc pl-5"
        }
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className={"group/ol group-[]/li:pl-2 flex flex-col gap-2.5"}>
        {children}
      </ol>
    ),
    li: ({ children }) => <li className={LIClassName}>{children}</li>,
    p: ({ children }) => (
      <Typography variant={"body"} size={"lg"} className={"leading-7"}>
        {children}
      </Typography>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-secondary dark:text-secondary-dark-DEFAULT"
      >
        {children}
      </a>
    ),
    hr: () => <Divider className={"!my-12"} />,
    ...components,
  };
}
