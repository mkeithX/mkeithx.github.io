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
  {
    
    Svg: require("@site/static/img/logo/meta_opensource.svg").default,

  },

  {
    
    Svg: require("@site/static/img/logo/GitHub-Word.svg").default,

  },

  {
    
    Svg: require("@site/static/img/logo/kali-logo-blue.svg").default,

  },
  // {
    
  //   Svg: require("@site/static/img/space/NASA_logo.svg").default,

  // },
  // {
    
  //   Svg: require("@site/static/img/space/spacex.svg").default,

  // },
  {
    
    Svg: require("@site/static/img/logo/Algolia_logo.svg").default,

  },
  {
    
    Svg: require("@site/static/img/logo/Cloudflare.svg").default,

  },


  // {
    
  //   Svg: require("@site/static/img/logo/docusaurus-logo.svg").default,

  // },


  {
    
    Svg: require("@site/static/img/logo/NASA_Worm_logo.svg").default,

  },

];

function Feature({Svg, }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx(styles.features)}>
      <div className="container text--center">
        <h2 className={clsx(styles.heroTitleTextHtml)}>
          {/* <b>{"Acknowledgement"}</b> */}
        </h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
