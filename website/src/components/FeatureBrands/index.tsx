import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {

  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const FeatureList: FeatureItem[] = [

  {
    
    Svg: require("@site/static/img/logo/kitimi-svg-banner.svg").default,

  },
  
   {
    
    Svg: require("@site/static/img/logo/Microsoft_365.svg").default,

  },
  {
    
    Svg: require("@site/static/img/logo/MSAzure.svg").default,

  },
  // {
    
  //   Svg: require("@site/static/img/logo/meta_opensource.svg").default,

  // },
  {
    
    Svg: require("@site/static/img/logo/Cloudflare.svg").default,

  },

  {
    
    Svg: require("@site/static/img/logo/GitHub-Word.svg").default,

  },
  {
    
    Svg: require("@site/static/img/logo/Algolia_logo.svg").default,

  },

  {
    
    Svg: require("@site/static/img/logo/NASA_Worm_logo.svg").default,

  },
  // {
    
  //   Svg: require("@site/static/img/space/NASA_logo.svg").default,

  // },
  
  {
    
    Svg: require("@site/static/img/logo/kitiplex-svg-banner.svg").default,

  },

];

function Feature({Svg, }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center")}>
        <Svg className={styles.featureSvg} role="img" />
      </div>

    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx(styles.features)}>
      <div className={clsx("container text--center")}>
      <div className={clsx("row", styles.featuresRowCenter)}>
        {/* <div className={`row ${styles.featuresRowCenter}`}> */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
