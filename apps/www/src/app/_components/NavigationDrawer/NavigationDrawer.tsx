import React from "react";
import { Drawer } from "@andore-ui/drawer";
import { PagesData } from "@/app/_data/pages.data";
import Link from "next/link";
import { Typography } from "@andore-ui/typography";
import { usePathname } from "next/navigation";
import AppIcon from "@/app/_components/AppIcon/AppIcon";

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  docsPages: PagesData[];
}

const NavigationDrawer = (props: NavigationDrawerProps) => {
  const { open, onClose, docsPages } = props;
  const pathname = usePathname();
  return (
    <Drawer
      title="Menu"
      description="Navigation menu"
      open={open}
      onClose={onClose}
    >
      <nav className={"flex flex-col gap-6 py-6"}>
        <span className={"flex flex-row items-center gap-2"}>
          <AppIcon className="w-5 h-5 fill-primary dark:fill-primary-dark-DEFAULT" />
          <Link
            href="/"
            className={`font-semibold text-surface-text dark:text-surface-dark-text`}
            onClick={onClose}
          >
            andore/ui
          </Link>
        </span>
        <ol className={"flex flex-col gap-3"}>
          <li>
            <Link
              href={"/docs"}
              className={"group"}
              onClick={onClose}
            >
              <Typography
                variant={"body"}
                size={"md"}
                className={
                  "text-secondary hover:underline group-data-[active=true]:font-semibold group-data-[active=true]:text-primary dark:group-data-[active=true]:text-primary-dark-DEFAULT"
                }
              >
                Docs
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              href={"/examples"}
              className={"group"}
              data-active={pathname === "/examples"}
              onClick={onClose}
            >
              <Typography
                variant={"body"}
                size={"md"}
                className={
                  "text-secondary hover:underline group-data-[active=true]:font-semibold group-data-[active=true]:text-primary dark:group-data-[active=true]:text-primary-dark-DEFAULT"
                }
              >
                Examples
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              href={"/themes"}
              className={"group"}
              data-active={pathname === "/themes"}
              onClick={onClose}
            >
              <Typography
                variant={"body"}
                size={"md"}
                className={
                  "text-secondary hover:underline group-data-[active=true]:font-semibold group-data-[active=true]:text-primary dark:group-data-[active=true]:text-primary-dark-DEFAULT"
                }
              >
                Themes
              </Typography>
            </Link>
          </li>
        </ol>
        {docsPages.map((page) => (
          <div className={"flex flex-col gap-4"} key={page.title}>
            <Typography
              variant={"body"}
              size={"md"}
              className={"font-semibold"}
            >
              {page.title}
            </Typography>
            <ol className={"flex flex-col gap-3"}>
              {page.pages.map((url) => {
                const nameList = url.split("-");
                const name = nameList
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                const relativePath = page.path != null ? page.path : "";
                const urlValue = url == "introduction" ? "/docs" : `/docs${relativePath}/${url}`;
                return (
                  <li key={urlValue}>
                    <Link
                      href={urlValue}
                      className={"group"}
                      data-active={pathname === urlValue}
                      onClick={onClose}
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
        ))}
      </nav>
    </Drawer>
  );
};

export default NavigationDrawer;
