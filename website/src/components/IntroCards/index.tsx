import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
// import Link from "@docusaurus/Link";

import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  imageUrl: JSX.Element;
  //   description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "The Cosmos",
    imageUrl: require("@site/static/img/logo/mkx-x-raw.png").default,
  },
  {
    title: "Recents",
    imageUrl: require("@site/static/img/react-logo.png").default,
  },
  {
    title: "Gists & Guides",
    imageUrl: require("@site/static/img/logo/logo-xpr.png").default,
  },
];

function Feature({ imageUrl, title }: FeatureItem) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4")}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureSvg}
            src={imgUrl}
            alt={title}
            height={100}
            width={100}
          />
        </div>
      )}

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{}</Heading>
        <p>{}</p>
      </div>
    </div>
  );
}

function IntroCards(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default IntroCards;
