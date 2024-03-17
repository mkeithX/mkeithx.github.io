import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

function About() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess"> Hello, world!🌍 </h2>

        <div className="mb-3">
          <span>{""}</span>
        </div>
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={"https://github.com/mkeithx.png"} />
              </div>
              <div className="col col--9">
                <h2>I'm Keith</h2>

                <p>
                  I'm a freelance Software Developer and IT Analyst based in the
                  Philippines. I'm passionate about crafting innovative
                  solutions for businesses and individuals.{" "}
                </p>

                <p>
                  My coding journey intertwines with a love for pizza,
                  fascination with the Universe, and my role as a co-founder at{" "}
                  <a href="https://kitiplex.github.io/">Kitiplex</a>.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* <section className={styles.directoryBody}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div>
            </nav>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}

export default About;
