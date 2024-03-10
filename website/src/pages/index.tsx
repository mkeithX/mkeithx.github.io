import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import BannerLogo from "@site/static/img/react-logo.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <BannerLogo
          className={clsx(styles.heroBannerLogo)}
          title="BannerLogo"
          width={250}
          height={250}
        />

        <div className={clsx("hero__subtitle")}>
          <span>{"Hello, I'm"}</span>
        </div>

        <Heading as="h2" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            Keith<b>.</b>
          </span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg px-4"
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
