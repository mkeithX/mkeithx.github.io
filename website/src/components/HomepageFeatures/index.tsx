import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { JSX } from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  scale: number;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    scale: 0.6,
    title: "Easy Navigation",
    Svg: require("@site/static/img/terminal_icon.svg").default,
    description: (
      <>
        Easy, beginner-friendly guides to <Link to="/docs"> learn the basics</Link> of coding and essential tools.
      </>
    ),
  },
  {
    scale: 0.7,
    title: "Sandbox",
    Svg: require("@site/static/img/container_solid.svg").default,
    description: (
      <>
        With built-in <Link to="/docs/learn/react-live-demo">Live Code-Editor </Link> to write and test your React code instantly.
      </>
    ),
  },
  {
    scale: 0.7,
    title: "SysOps",
    Svg: require("@site/static/img/api_icon.svg").default,
    description: (
      <>
        Practical guides and best practices for system operations and administration.
      </>
    ),
  },
  {
    scale: 0.7,
    title: "Code Made Easy",
    Svg: require("@site/static/img/rocket.svg").default,
    description: (
      <>
        Explore the properties and behaviors of celestial bodies within the <Link to="/cosmos">cosmos</Link>.
      </>
    ),
  },
  {
    scale: 0.7,
    title: "Built with React",
    Svg: require("@site/static/img/logo/kitimi-icon-new.svg").default,
    description: (
      <>
        Create a Markdown document using plain <code>.md</code> files or a page using <Link to="/docs/guides/docs/create-doc">React</Link>  components.
      </>
    ),
  },
];

function Feature({ scale, title, Svg, description }: FeatureItem) {
  return (
    <>
      <div className={clsx("col col--4")}>
        <div className={"text--center"}>
          <Svg
            transform={"scale(" + scale + ")"}
            className={styles.featureSvg}
            role="img"
          />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <span className={clsx(styles.featureDescription)}>{description}</span>
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
