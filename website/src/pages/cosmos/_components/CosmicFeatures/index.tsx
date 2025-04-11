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
    scale: 1.3,
    title: " ",
    Svg: require("@site/static/img/space/NASA_logo.svg").default,
    description: (
      <>
        
      </>
    ),
  },

  {
    scale: 1.0,
    title: " ",
    Svg: require("@site/static/img/nav-logo.svg").default,
    description: (
      <>
       
      </>
    ),
  },
  {
    scale: 1.3,
    title: " ",
    Svg: require("@site/static/img/space/spacex.svg").default,
    description: (
      <>
        
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
            className={styles.cosmicSvg}
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

export default function CosmicFeatures(): JSX.Element {
  return (
    <section className={styles.cosmicFeatures}>
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
