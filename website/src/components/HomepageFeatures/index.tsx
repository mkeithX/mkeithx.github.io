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
    Svg: require("@site/static/img/logo/Microsoft_365.svg").default,
    description: (
      <>
        Build applications and solutions that integrate with Microsoft 365 services.
      </>
    ),
  },


  {
    scale: 0.8,
    title: "Cloudflare",
    Svg: require("@site/static/img/logo/Cloudflare_Logo.svg").default,
    description: (
      <>
        Provides a suite of services to improve website performance and security.
      </>
    ),
  },
  {
    scale: 0.8,
    title: "Algolia",
    Svg: require("@site/static/img/logo/Algolia_logo.svg").default,
    description: (
      <>
        Build fast and relevant search experiences for their applications and websites.
      </>
    ),
  },
  
  {
    scale: 0.6,
    title: "Code Made Easy",
    Svg: require("@site/static/img/logo/vscode.svg").default,
    description: (
      <>
        Designed with developers in mind for a seamless experience.
      </>
    ),
  },

  {
    scale: 0.8,
    title: "Built with React",
    Svg: require("@site/static/img/logo/react-logo.svg").default,
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
      <div className="text--center padding-horiz--md">
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
