import React from "react";
import ChipLink from "@/app/_components/ChipLink/ChipLink";

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_REPO;
const COMPONENTS_URI = process.env.NEXT_PUBLIC_GITHUB_COMPONETS_URI;
const NPM_URL = process.env.NEXT_PUBLIC_NPM_URL;

interface ComponentSourcesProps {
  component: string;
}

const ComponentSources = (props: ComponentSourcesProps) => {
  const { component } = props;

  const packageComponentName= component.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  const githubUrl = `${GITHUB_URL}/${COMPONENTS_URI}/${packageComponentName}`;

  const npmUrl = `${NPM_URL}/${component}`;

  return (
    <div className={"flex flex-row gap-4 mt-4 "}>
      <ChipLink href={npmUrl} icon={"npm"}>
        @andore-ui/{component}
      </ChipLink>
      <ChipLink href={githubUrl} icon={"github"}>
        Source
      </ChipLink>
    </div>
  );
};

export default ComponentSources;
