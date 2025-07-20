import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BannerLogo from '@site/static/img/logo/react-fb.svg';
import React, { JSX } from 'react';
import styles from './index.module.css';
import FeatureBrands from '../components/FeatureBrands';

function HomepageHeader(): JSX.Element {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const {
    hero_header,
    hero_tagline,
  } = customFields as {
    hero_header: string;
    hero_tagline: string;
  };

  return (
    <div
      className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <BannerLogo
          className={styles.heroLogo}
          title=""
          width={170} // 160
          height={150} // 180
        />
        <div className={styles.heroSubtitle}>
          <span className={styles.heroSubTitleText}>
            {"Explore"}
          </span>
        </div>
        <Heading as="h1">
          <div className={styles.heroBannerTitle}>
            <span className={styles.heroBannerTitleText}>
              {hero_header}
            </span>
            <br></br>
          </div>
          <div className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleText}>
              {hero_tagline}
            </span>
          </div>
        </Heading>
        <div className={clsx(styles.indexCtas, 'margin-vert--md')}>
          <Link
            className={clsx("button button--lg")}
            to="/docs">
            {'Get Started'}
          </Link>
          <Link
            className={clsx("button button--lg")}
            to="/help">
            {"Support"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const { custom_description } = customFields as { custom_description: string };

  return (
    <Layout>
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <div className={styles.section}>
        </div>
        {/* <FeatureBrands /> */}
      </main>
    </Layout>
  );
}
