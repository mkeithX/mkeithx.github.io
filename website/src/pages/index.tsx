import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BannerLogo from '@site/static/img/astronaut.svg';
import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import FeatureBrands from '@site/src/components/FeatureBrands';
import styles from './index.module.css';

function HomepageHeader(): JSX.Element {
  const {
    siteConfig: {tagline, customFields},
  } = useDocusaurusContext();
  const {
    hero_header,
    custom_footer,
    custom_tagline,
    custom_description,
    custom_header,
  } = customFields as {
    hero_header: string;
    custom_footer: string;
    custom_tagline: string;
    custom_description: string;
    custom_header: string;
    custom_heroBanner: string;
  };

  return (
    <header
      className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <BannerLogo
          className={clsx(styles.heroLogo)}
          title="Banner Logo"
          width={160}
          height={140}
        />
        <div className="hero__subtitle">
          <span className={clsx(styles.heroSubTitleTextHtml)}>{'OpenSource'}</span>
          <span className="text--primary">{' |'}</span>
        </div>
        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className={styles.heroBannerTitle}>
              {custom_header}
              {/* <b>{'X'}</b> */}
            </div>
          </span>
        </Heading>
        <div className={styles.heroSubtitle}>
          <span className={styles.heroCustomSubTitleHtml}>
            <b>{custom_tagline}</b>
            {/* <b>{"Built with"}</b> ❤️ <b>{"by Keith"}</b>  */}
            {/* {custom_description} */}
          </span>
        </div>
        <div className={clsx(styles.buttons)}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs">
            {'Explore'}
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/cosmos">
            {'Space'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: {tagline, customFields},
  } = useDocusaurusContext();
  const {custom_description} = customFields as {custom_description: string};

  return (
    <Layout title={tagline} description={custom_description}>
      <main>
        {/* <TopBanner /> */}
        <HomepageHeader />
        <div className={clsx(styles.section)}>
          <HomepageFeatures />
        </div>
        <FeatureBrands />
      </main>
    </Layout>
  );
}
