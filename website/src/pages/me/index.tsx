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
    <Layout title="Me" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className={clsx(styles.underlineColorSuccess)}>
          Hi there! 
          </h2>

        <div>
          <span>{"Thank you for stopping by"}</span>
        </div>
      </header>
      <main id="main">
        <div className={clsx(styles.aboutBody)}>
          <div className="container">
            <div className="row padding-bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={"https://github.com/mkeithx.png"} />
              </div>
              <div className={clsx("col col--9")}>
                <h2>I'm Keith</h2>

                <p>
                I'm an independent web developer and IT analyst. Additionally, I take pride in being an awesome husband, a devoted father, and a steadfast brother.  
                </p>

                <p>

                My coding journey is intertwined with my love for pizza and my fascination with understanding the complexities of the Universe. {" "}
                </p>

                <p>
                To provide context, firstly, I never dreamed of becoming a software developer. Yet, here I am. Secondly, I nearly became a pilot {"(fortunately, I never did)"}, my initial job was in the logistics industry, and at some point in my career, I've primarily worked with civil engineers.{" "}
                </p>
                
                <p>
                Ultimately, my passion extends not only to crafting innovative solutions for businesses but also to contributing to the open-source community. {" "}
                </p>

                <p>
                Feel free to download  {" "}
                    <a target="_blank" rel="noreferrer" href={useBaseUrl("files/resume.pdf")}>my resume</a> 
                    {" "} or explore my projects through <Link to={'/showcase'}>this link.</Link>  {" "}
                </p>

                <p>
                  Thank you!

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
