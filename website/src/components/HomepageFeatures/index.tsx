import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  scale: number;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    scale: 0.8,
    title: "Developer",
    Svg: require("@site/static/img/terminal_icon.svg").default,
    description: (
      <>
Quick solutions with practical code snippets, shared gists and more.
      </>
    ),
  },


  {
    scale: 0.8,
    title: "Container",
    Svg: require("@site/static/img/container_solid.svg").default,
    description: (
      <>
        Provides a suite of services to improve website performance and security.
      </>
    ),
  },
  {
    scale: 0.8,
    title: "API",
    Svg: require("@site/static/img/api_icon.svg").default,
    description: (
      <>
        Build fast and relevant search experiences for their applications and websites.
      </>
    ),
  },
  
  {
    scale: 1.0,
    title: "Code Made Easy",
    Svg: require("@site/static/img/logo/terminal-no-slash.svg").default,
    description: (
      <>
        Designed with developers in mind for a seamless experience.
      </>
    ),
  },

  {
    scale: 1.0,
    title: "Built with React",
    Svg: require("@site/static/img/logo/terminal-demo.svg").default,
    description: (
      <>
        Experience a fast, dynamic interface powered by React for optimal performance.
      </>
    ),
  },
];

function Feature({ scale, title, Svg, description }: FeatureItem) {
  return (
    <>
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <div className={"text--center"}>
        <Svg
          transform={"scale(" + scale + ")"}
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--sm">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
    </>
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
