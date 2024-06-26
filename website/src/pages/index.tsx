import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/banner/atom-z.svg";
import React from "react";
import TopBanner from "@site/src/components/TopBanner";
import IntroCards from "../components/IntroCards";

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
            {hero_header} {"|"}
          </span>
        </div>

        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className="hero__title mb-3">
            {/* <b>{"Build"}</b><br></br> */}
              {/* {"Innovate"}<br></br> */}
              {/* <b>{"Inspire"}</b><br></br> */}

            {/* <b>{"Guides"}</b>{" and "}{"References "}<br></br> */}
            {/* {"For Basic"}<b>{" Web"}</b>{" Dev"}{" and "}{"Efficient "}<b>{"IT Ops"}</b> */}

            {/* {"DevOps Handbook: "}<br></br> */}
            {/* {"Concise References Covering Development and Operations Essentials"} */}
            {/* {"Guides for Seamless Software Delivery"} */}
            {/* <b>{tagline}</b> */}
               {/* {"Best practices and reference for"}<b>{" Web Dev"}</b> {"and"} */}
               {/* <b>{" IT"}</b>{" Ops"} */}
          
               {custom_title}
            </div>
          </span>
        </Heading>

        <div className="hero__subtitle mb-3">
          <span className={styles.heroCustomSubTitleHtml}>
            {/* {hero_footer} */}
            <b>{custom_footer}</b>
          </span>
        </div>

        <br></br>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs"
          >
            {"Explore"}
          </Link>
          {/* <Link
            className="button button--outline button--info button--lg"
            to="/cosmos"
          >
            {"Try Demo"}
          </Link> */}
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
  const { custom_footer } = customFields as { custom_footer: string};
  return (
    <Layout title={custom_tagline} description={tagline}>
      {/* <TopBanner /> */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <IntroCards />
      </main>
    </Layout>
  );
}
