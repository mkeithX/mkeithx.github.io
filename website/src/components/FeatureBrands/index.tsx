import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { JSX } from "react";
import Link from "@docusaurus/Link";

type FeatureBrandItems = {
  title: string;
  scale: number;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureBrandItems[] = [
  
   {
    scale: 0.8,
    title: "",    
    Svg: require("@site/static/img/logo/Microsoft_365.svg").default,
    description: (
      <>
      {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
      </>
    )
  },
  {
    scale: 0.8,
    title: "",
    Svg: require("@site/static/img/logo/MSAzure.svg").default,
    description: (
      <>
            {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
      </>
    )
  },
  {
    scale: 0.4,
    Svg: require("@site/static/img/logo/vscode.svg").default,
    title: "",
    description: (
      <>
            {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
      </>
    )
  },
  {
    scale: 0.6,
    title: "",
    
    Svg: require("@site/static/img/logo/Cloudflare_Logo.svg").default,
    description: (
      <>
            {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
      </>
    )
  },
  {
    scale: 0.6,
    title: "",
    
    Svg: require("@site/static/img/logo/Algolia_logo.svg").default,
    description: (
      <>
            {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
      </>
    )
  },

];

function Feature({ scale, title, description, Svg }: FeatureBrandItems) {
  return (
    <div className={clsx("row col--2")}>
      <div className={clsx("text--center")}>
      <Svg
          transform={"scale(" + scale + ")"}
          className={styles.featureBrandSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--sm">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FeatureBrands(): JSX.Element {
  return (
    <section className={clsx(styles.featureBrand)}>
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
