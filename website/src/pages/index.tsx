import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/banner/test-orbit.svg";
import React from "react";
import TopBanner from '@site/src/components/TopBanner';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <BannerLogo
          className={clsx(styles.heroBannerLogo, "margin-vert--sm")}
          title="BannerLogo"
          width={300}
        />

        <div className={clsx("hero__subtitle")}>
          <span className={styles.heroSubTitleTextHtml}>
            {/* {"🚀 "} */}
            {/* C-<b>137</b> <br></br> */}
            Handbook <b>|</b>
          </span>
        </div>

        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className="hero__title mb-3">
              Tech <b>Support</b> & <b>Dev</b>elopers.
              {/* Physics<b>.</b> <br></br> */}
              
              
              {/* <b>.</b> */}
            </div>
          </span>
        </Heading>

        <div className="hero__subtitle mb-3">
        {/* {siteConfig.tagline} */}
          <span className={styles.heroSubTitleTextHtml}>
            Built for <b>Humans</b>.
          </span>
        </div>

        <br></br>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg px-4"
            to="docs"
          >
            {"Explore"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { title, customFields, tagline},
  } = useDocusaurusContext();
  const { custom_tagline } = customFields as { custom_tagline: string };
  const {description} = customFields as {description: string};
  return (
    <Layout
      title={custom_tagline}
      description={title}
    >

      <HomepageHeader />

      <main>
        <HomepageFeatures />
        {/* <TopBanner /> */}
      </main>
    </Layout>
  );
}