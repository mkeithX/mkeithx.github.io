import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

function About() {
  const { siteConfig } = useDocusaurusContext();
  const profilePicUrl = "https://github.com/mkeithx.png";
  const resumeUrl = useBaseUrl("files/resume.pdf");

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
                <img src={profilePicUrl} alt="Profile" />
              </div>
              <div className={clsx("col col--9")}>
                <h2>I'm Keith</h2>
                <p>
                 I am an independent web developer and IT analyst, passionate about crafting innovative solutions for businesses and contributing to the open-source community. Beyond coding, I take pride in being a loving husband, a devoted dad, and yet, a stubborn brother.
                </p>
                <p>
                  My coding journey is intertwined with my love for pizza and my fascination to the cosmos. Despite never dreaming of becoming a software developer initially, I've embraced this path wholeheartedly.
                </p>
                <p>
                  I graduated with a degree in Information Technology, which has provided me with a solid foundation for my career in the tech industry. Along the way, I've had the opportunity to work closely with range of professionals, including civil engineers, business specialists, and lawyers, expanding my perspective and enhancing my skill set.
                </p>
                <p>
                  Feel free to <Link to={'/showcase'}>explore my projects</Link> or check out {" "} <a target="_blank" rel="noreferrer" href={resumeUrl}>my resume</a>.
                </p>
                <p>
                  Thank you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
