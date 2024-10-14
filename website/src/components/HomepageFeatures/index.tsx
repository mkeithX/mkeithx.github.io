import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy Navigation",
    Svg: require("@site/static/img/undraw_experience_design.svg").default,
    description: (
      <>
        Find resources easily with  a robust search functionality.
      </>
    ),
  },

  {
    title: "Built with React",
    Svg: require("@site/static/img/undraw_react.svg").default,
    description: (
      <>
        Experience a fast, dynamic interface powered by React for optimal performance.
      </>
    ),
  },

  {
    title: "Project Docs",
    Svg: require("@site/static/img/undraw_website.svg").default,
    description: (
      <>
        Clear docs to showcase and manage various projects effectively.
      </>
    ),
  },
  {
    title: "Code Snippets",
    Svg: require("@site/static/img/undraw_hello.svg").default,
    description: (
      <>
        Quick solutions with practical code snippets, shared gists and more.
      </>
    ),
  },
  {
    title: "Developers",
    Svg: require("@site/static/img/undraw_code_review.svg").default,
    description: (
      <>
        Designed with developers in mind for a seamless experience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={"text--center"}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
        <div className={clsx("row", styles.featuresRowCenter)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
