import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <span class="text-3xl text-bold">Hi I'm</span>
        <Heading as="h3" className="hero__title">
          {"Keith"}
        </Heading>
        <p className="hero__subtitle">{"a passionate Software Engineer who loves pizza 🍕."}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/comming-soon">
            Learn more <span className="pl-1 animate-pulse">▎</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
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
