import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import BannerLogo from '@site/static/img/react-logo.svg';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <BannerLogo className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
        title="BannerLogo"
        width={300}
        />

        <div className={clsx("hero__subtitle")}>
          <span>
            {"Hello, I'm "}
          </span>
        </div>

        <Heading as="h4" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            {/* Ke<b>i</b>th */}
            {"Keith"}
          </span>
        </Heading>
        <Heading as="p" className="hero__subtitle">
          <span>
            {"and I'm a software developer building mostly web applications."}
          </span>
        </Heading>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg px-4"
            to="/docs">
            {"Explore"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={``}
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
