import React from "react";
import { Chip } from "@andore-ui/chip";
import NpmIcon from "@/app/_components/icons/NpmIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";

interface ChipLinkProps extends React.PropsWithChildren {
  href: string;
  icon: "npm" | "github";
}

const ChipLink = (props: ChipLinkProps) => {
  const { href, children, icon } = props;

  const iconRender = icon === "npm" ? <NpmIcon /> : <GithubIcon />;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Chip
        startIcon={<span className={'!w-5 !h-5'}>{iconRender}</span>}
        variant={"outlined"}
        selected
        selectedIconDisabled
      >
        {children}
      </Chip>
    </a>
  );
};

export default ChipLink;
