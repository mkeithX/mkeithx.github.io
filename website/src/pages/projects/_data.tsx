import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { Case } from "./_components/ProjectCards";

export const cases: Case[] = [
  {
    title: "Native Website",
    website: "https://mkeithx.github.io",
    preview: require("@site/src/data/projects/sc-mkeithx-2.png").default,
    description: (
      <>My official website powered by Docusaurus TypeScript variant.</>
    ),
    source: "",
    tags: ["TypeScript", "React", "Python"],
  },
  {
    title: "Kitiplex",
    website: "https://kitiplex.github.io",
    preview: require("@site/src/data/projects/ms-banner-kitiplex.png").default,
    description: <>Open source projects and samples from Kitimi.</>,
    source: "https://github.com/kitiplex/kitiplex.github.io/tree/archive",
    tags: ["React", "JavaScript"],
  },
  {
    title: "Kitimi Platforms",
    website: "https://kitiplex.github.io",
    preview: require("@site/static/img/ms-banner.png").default,
    description: (
      <>
        Hub for contributors, authors, and maintainers within the Kitimi
        ecosystem.
      </>
    ),
    source: "",
    tags: ["Test", "React"],
  },
  {
    title: "IUIU",
    website: "https://kitiplex.github.io/iuiu",
    preview: require("@site/src/data/projects/sc-iuiu.png").default,
    description: <>Knowledge Base for awesome people by awesome people.</>,
    source: "https://github.com/kitiplex/iuiu",
    tags: ["docs", "kb", "blog"],
  },
];
