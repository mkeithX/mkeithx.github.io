import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { Case } from "./_components/ShowcaseCard";

export const cases: Case[] = [
    {
        title: "Native Website",
        website: "https://mkeithx.github.io",
        preview: require("@site/src/data/showcase/sc-mkeithx-2.png").default,
        description: (
            <>
            This repo contains the configuration and documentation powering this website.
            </>
        ),
        source: "",
        tags: ["TypeScript", "React", "Python"]
    },
    {
        title: "Kitiplex Native",
        website: "https://kitiplex.github.io",
        preview: require("@site/src/data/showcase/ms-banner-kitiplex.png").default,
        description: (
            <>
            This repo contains the configuration and documentation powering this website.
            </>
        ),
        source: "https://github.com/kitiplex/kitiplex.github.io/tree/archive",
        tags: ["React", "JavaScript"]
    },
    {
        title: "Kitimi Platforms",
        website: "https://kitiplex.github.io",
        preview: require("@site/static/img/ms-banner.png").default,
        description: (
            <>
            This repo contains the configuration and documentation powering this website.
            </>
        ),
        source: "",
        tags: ["Test", "React"]
    },
    {
        title: "IUIU",
        website: "https://kitiplex.github.io/iuiu",
        preview: require("@site/src/data/showcase/sc-iuiu.png").default,
        description: (
            <>
            This repo contains the configuration and documentation powering this website.
            </>
        ),
        source: "https://github.com/kitiplex/iuiu",
        tags: ["docs","kb","blog"]
    }
]