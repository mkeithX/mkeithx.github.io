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
    custom_footer,
    custom_tagline,
    description,
    custom_header,
  } = customFields as {
    hero_header: string;
    custom_footer: string;
    custom_tagline: string;
    custom_header: string;
    custom_heroBanner: string;
    description: string;
  };

  return (
    <header
    
      className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
      <BannerLogo
          className={clsx(styles.heroLogo)}
          title=""
          width={180}
          height={150}
        />
        <div className={clsx("hero__subtitle")}>
          <span className={clsx(styles.heroSubTitleTextHtml)}>{"OpenSource"}</span>
          {/* <p className="text--info">{' Bar'}</p> */}
        </div>
        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className={styles.heroBannerTitle}>
            <b>{"Guides and Code Samples"}</b>
             {/* <br></br>{tagline} */}
            </div>
          </span>
        </Heading>

        <div className={clsx(styles.heroSubtitle)}>
          <span className={styles.heroCustomSubTitleHtml}>
            {/* <b>{custom_tagline}</b> */}
            {"4 Software Documentation & Beyond..."}
            {/* <Link to={"https://github.com/kitiplex"}>{"@Kitiplex"}</Link> */}
          </span>
        </div>
        <div className={clsx(styles.indexCtas,'margin-vert--md')}>
          <Link
            className={clsx("button button--primary button--lg")}
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
    </header>
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
        <div className={clsx(styles.section)}>
          <HomepageFeatures />

        </div>
        <FeatureBrands />
      </main>
    </Layout>
  );
}
