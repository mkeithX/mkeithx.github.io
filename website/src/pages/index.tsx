import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BannerLogo from '@site/static/img/astro.svg';
import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import FeatureBrands from '@site/src/components/FeatureBrands';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader(): JSX.Element {
  const {
    siteConfig: { tagline, customFields },
  } = useDocusaurusContext();
  const {
    hero_header,
    hero_tagline,
    custom_footer,
    custom_tagline,
    description,
    custom_header,
  } = customFields as {
    hero_header: string;
    hero_tagline: string;
    custom_footer: string;
    custom_tagline: string;
    custom_header: string;
    custom_heroBanner: string;
    description: string;
  };

  return (
    <div
      className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
      <BannerLogo
          className={styles.heroLogo}
          title=""
          width={160}
          height={180}
        />
        <div className={styles.heroSubtitle}>
          <span className={styles.heroSubTitleText}>
            {"OpenSource"}
            </span>
        </div>
        <Heading as="h1">
          <div className={styles.heroBannerTitle}>
            <span className={styles.heroBannerTitleText}>
              {hero_header}
            {/* {"Guides"}<br></br>{"and Code Samples"} */}
            </span>
            <br></br>
            {/* <b>{"from Kitimi"}</b> */}
          </div>
          <div className={styles.heroSubtitle}>
          <span className={styles.heroSubtitleText}>
          {hero_tagline}
          </span>
        </div>
        </Heading>
        <div className={clsx(styles.indexCtas,'margin-vert--md')}>
          <Link
            className={clsx("button button--outline button--primary button--lg")}
            to={useBaseUrl('/docs')}>
            {'Explore'}
          </Link>
          <Link
            className={clsx("button button--secondary button--lg")}
            to="https://eyes.nasa.gov/apps/solar-system/#/home">
            {'Space'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { title, tagline, customFields },
  } = useDocusaurusContext();
  const { custom_description } = customFields as { custom_description: string };

  return (
    <Layout>
      <main>
        {/* <TopBanner /> */}
        <HomepageHeader />
        <div className={styles.section}>
        <HomepageFeatures />
        </div>
        {/* <FeatureBrands /> */}
      </main>
    </Layout>
  );
}
