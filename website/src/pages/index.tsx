import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BannerLogo from '@site/static/img/logo/react-fb.svg';
import React, {JSX} from 'react';
import styles from './styles.module.css';
import FeatureBrands from '../components/FeatureBrands';
import TopBanner from '../components/TopBanner';

function HomepageHeader(): JSX.Element {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const {hero_header, hero_tagline} = customFields as {
    hero_header: string;
    hero_tagline: string;
  };

  return (
    <div className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <BannerLogo
          className={styles.heroLogo}
          title=""
          width={170} // 160
          height={150} // 180
        />
        <div className={styles.heroSubtitle}>
          <span className={styles.heroSubTitleText}>{'OpenSource'}</span>
        </div>
        <Heading as="h1">
          <div className={styles.heroBannerTitle}>
            <span className={styles.heroBannerTitleText}>
              {'Guides and Code Samples'}
            </span>
            <br></br>
          </div>
          <div className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleText}>
              {'Built for IT Admins & Developers'}
            </span>
          </div>
        </Heading>
        <div className={clsx(styles.indexCtas, 'margin-vert--md')}>
          <Link className={clsx('button button--lg')} to="/docs">
            {'Explore'}
          </Link>
          <Link
            className={clsx('button button--lg')}
            to="/blog/2025/artemis-2">
            {'Latest'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const {custom_description} = customFields as {custom_description: string};

  return (
    <Layout>
      <main>
        {/* <TopBanner /> */}
        <HomepageHeader />
        <HomepageFeatures />
        <div className={styles.section}></div>
        {/* <FeatureBrands /> */}
      </main>
    </Layout>
  );
}
