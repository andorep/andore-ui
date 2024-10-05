"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { PagesData } from "@/app/docs/_data/pages.data";
import { Typography } from "@andore-ui/typography";

interface NavigationListProps {
  pages: PagesData[];
}

const NavigationList = (props: NavigationListProps) => {
  const { pages } = props;
  const pathname = usePathname();
  return pages.map((page) => (
    <div className={"flex flex-col gap-4"} key={page.title}>
      <Typography variant={"body"} size={"md"} className={"font-semibold"}>
        {page.title}
      </Typography>
      <ol className={"flex flex-col gap-3"}>
        {page.pages.map((url) => {
          const nameList = url.split("-");
          const name = nameList
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          const urlValue = url == "introduction" ? "/docs" : `/docs/${url}`;
          return (
            <li key={urlValue}>
              <Link
                href={urlValue}
                className={"group"}
                data-active={pathname === urlValue}
              >
                <Typography
                  variant={"body"}
                  size={"md"}
                  className={
                    "text-secondary hover:underline group-data-[active=true]:font-semibold group-data-[active=true]:text-primary dark:group-data-[active=true]:text-primary-dark-DEFAULT"
                  }
                >
                  {name}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  ));
};

export default NavigationList;
