import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/banner/atom-z.svg";
// import BannerLogo from "@site/static/img/logo/react-logo.svg";
import React from "react";
import TopBanner from "@site/src/components/TopBanner";
import FeatureBrands from "../components/FeatureBrands";

function HomepageHeader(): JSX.Element {
  const {
    siteConfig: { title, customFields, tagline },
  } = useDocusaurusContext();
  const { custom_tagline } = customFields as { custom_tagline: string };
  const { description } = customFields as { description: string };
  const { hero_header } = customFields as { hero_header: string };
  const { hero_footer } = customFields as { hero_footer: string };
  const { custom_footer } = customFields as { custom_footer: string };
  const { custom_title } = customFields as { custom_title: string };
  const { custom_description } = customFields as { custom_description: string };
  const { custom_header } = customFields as { custom_header: string };
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <BannerLogo
          className={clsx(styles.heroBannerLogo)}
          title="BannerLogo"
          width={380}
          // height={250}
        />

        <div className={clsx("hero__subtitle")}>
          <span className={styles.heroSubTitleTextHtml}>
            {hero_header} <b>{"|"}</b>
          </span>
        </div>

        <Heading as="h1" className={"hero__title"}>
          <span className={styles.heroTitleTextHtml}>
            <div className={clsx(styles.heroBannerTitle)}>
              {/* {tagline} */}
              {/* {"Building"}
              <b>{" Innovative"}</b>
              {" Solutions"} */}
              {/* {custom_description}{" "} */}
              {/* {hero_footer} */}
              {custom_header}{" mkeith"}<b>{"X"}</b>
              {/* <b>{custom_description}</b> */}
            </div>
          </span>
        </Heading>

        <div className={styles.heroSubtitle}>
          <span className={clsx(styles.heroCustomSubTitleHtml)}>
            <b> {"Build Optimal Websites"}</b>
   
          </span>

          {/* <span className={(styles.heroCustomTagline)}>
            {"Build Optimal Websites"}{" "}
          
          </span> */}

        </div>

        {/* <br></br> */}

        <div className={clsx(styles.buttons)}>
          <Link
            className={clsx("button button--outline button--info button--lg")}
            to="/docs"
          >
            {"Explore"}
          </Link>
          <Link
            className={clsx("button button--outline button--info button--lg ")}
            to="/cosmos"
          >
            {"Space"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { title, customFields, tagline },
  } = useDocusaurusContext();
  const { custom_tagline } = customFields as { custom_tagline: string };
  const { description } = customFields as { description: string };
  const { hero_footer } = customFields as { hero_footer: string };
  return (
    <Layout title={tagline} description={hero_footer}>
      {/* <TopBanner /> */}
      <main>
        <HomepageHeader />
        <div className={styles.section}>
          <HomepageFeatures />
        </div>
        <FeatureBrands />
      </main>
    </Layout>
  );
}
