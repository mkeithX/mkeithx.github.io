import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/banner/spacecraft-rocket.svg";
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
            {/* <b>{"MKX"}</b>{"SpaceHub"} {"|"} */}
            {hero_header} <b>{"|"}</b>
          </span>
        </div>

        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className={styles.heroBannerTitle}>
              {tagline}
              {/* <b>{custom_title}</b> */}
            </div>
          </span>
        </Heading>

        <div className={styles.heroSubtitle}>
          {/* <span className={styles.heroCustomSubTitleHtml}>
            <b>{hero_footer}</b>
          </span> */}

          <span className={styles.heroCustomTagline}>{hero_footer}</span>
        </div>

        <br></br>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs"
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
        <FeatureBrands/>
      </main>
    </Layout>
  );
}
