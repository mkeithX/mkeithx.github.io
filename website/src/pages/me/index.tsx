import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";



function About(): JSX.Element{
  const { siteConfig } = useDocusaurusContext();
  const profilePicUrl = "https://github.com/mkeithx.png";
  const resumeUrl = useBaseUrl("files/resume.pdf");

  return (
    <Layout title="Me" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className={clsx(styles.underlineColorSuccess)}>
          {"Hi there!"}
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
                  {" "} an independent web developer and IT analyst, passionate about crafting innovative solutions for businesses and contributing to the open-source community. Beyond coding, I take pride in being a loving husband, a devoted dad, and yet, a stubburn brother.
                </p>
                <p>
                  My coding journey is intertwined with my love for pizza and my fascination to the cosmos. Despite never dreaming of becoming a software developer initially, I've embraced this path wholeheartedly.
                </p>
                <p>
                  I graduated with a degree in Information Technology, which has provided me with a solid foundation for my career in the tech industry. Along the way, I've had the opportunity to work closely with range of professionals, including civil engineers, business specialists, and lawyers, broadening my perspective and skill set.
                </p>
                <p>
                  Feel free to <Link to={'/projects'}>explore my projects</Link> or check out {" "} <a target="_blank" rel="noreferrer" href={resumeUrl}>my resume</a>.
                </p>
                <p>
                  Thank you!
                </p>

                    <p className="align-center">
                    <Link to={"https://github.com/mkeithx"} className={clsx("mx-3")}>
                  <FontAwesomeIcon icon={faGithub} size="2x">
            
                    </FontAwesomeIcon>
          
                    </Link>
                    <Link to={"https://twitter.com/mkeithtan"} className={clsx("mx-3")}>
                  <FontAwesomeIcon icon={faXTwitter} size="2x">
            
                    </FontAwesomeIcon>
          
                    </Link>
                    <Link to={"https://www.linkedin.com/in/mkeithtan"} className={clsx("mx-3")}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x">
            
                    </FontAwesomeIcon>
          
                    </Link>
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
