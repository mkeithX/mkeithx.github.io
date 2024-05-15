import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/banner/test-orbit.svg";
import React from "react";

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
            Space<b>Hub</b> <br></br>
          </span>
        </div>

        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className="hero__title mb-3">
              Building the <b>Web</b>.<br></br>
              {/* Physics<b>.</b> <br></br> */}
              Exploring the <b>Cosmos</b>.{/* {siteConfig.title} */}
              {/* <b>.</b> */}
            </div>
          </span>
        </Heading>

        <div className="hero__subtitle mb-3">
          {" "}
          {/* <span className={styles.heroSubTitleTextHtml}>
            <b>Hub</b> for IT Developers and Physics enthusiast.
          </span> */}
        </div>

        <br></br>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg px-4"
            to="docs"
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { title, customFields, tagline, },
  } = useDocusaurusContext();
  const { customTagline } = customFields as { customTagline: string };
  return (
    <Layout
      title={customTagline}
      description={title}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
