import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/react-logo.svg";
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
          <span>{"Hi, "}</span>
        </div>

        <Heading as="h2" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            I'm Keith<b>.</b>
          </span>
        </Heading>

        <div className="hero__subtitle mb-3">{siteConfig.tagline}</div>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg px-4 mb-3 mt-3"
            to="/introx"
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
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();
  const { description } = customFields as { description: string };
  return (
    <Layout title={`Keith's Galactic Gazette`} description={description}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
