import clsx from "clsx";
import Heading from "@theme/Heading";
import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  imageUrl: string;
  scale: number; // New property for image scale
};

const FeatureList: FeatureItem[] = [
  {
    imageUrl: require("@site/static/img/logo/mkx-x-raw.png").default,
    scale: .90, // Adjust scale as needed
  },
  {
    imageUrl: require("@site/static/img/react-logo.png").default,
    scale: .60, // Adjust scale as needed
  },
  {
    imageUrl: require("@site/static/img/logo/logo-xpr.png").default,
    scale: .54, // Adjust scale as needed
  },
];

function Feature({ imageUrl, scale }: FeatureItem) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4")}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureSvg}
            src={imgUrl}
            alt=""
            height={100 * scale} // Scale the height
            width={100 * scale}  // Scale the width
          />
        </div>
      )}

      <div className="text--center padding-horiz--md">
        {/* Removed Heading component */}
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
