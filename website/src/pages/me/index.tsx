import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function About(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const profilePicUrl = "https://github.com/mkeithx.png";
  const resumeUrl = useBaseUrl("./files/resume.pdf");

  return (
    <Layout title="Me" description={siteConfig?.tagline}>
      <div className={clsx(styles.aboutHeader, "hero hero--dark")}>
        <div className="container">
          <div className="hero__subtitle">
            <span className={clsx(styles.aboutSectionHeader)}>{"About"}</span>
          </div>
          <Heading as="h1" className={clsx(styles.aboutTitle)}>
            {"Me"}
          </Heading>
        </div>
      </div>
      <main id="main">
        <div className={clsx("hero hero--dark", styles.aboutBody)}>
          <div className="container">
            <div className="row bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={profilePicUrl} alt="mkxProfile" />
              </div>
              <div className={clsx("col col--9")}>
                <h2>Hi, I'm Keith.</h2>
                <p>
                  I'm a independent software developer with a soft spot for the Django web framework. Right now, I'm focusing on improving my frontend skills to make better user experiences. I also work as a systems administrator at a private company, where I help manage IT infrastructure.
                  In simple terms, I build websites and fix computers too.
                  Outside of work, I take pride in being a loving husband and devoted dad, yet admittedly, a stubborn brother.
                  <br />
                </p>
                <p>
                  My coding journey is intertwined with my love for pizza and fascination with the cosmos. Despite never dreaming of being part of the IT industry, I've embraced this path wholeheartedly.
                </p>
                <p>
                  I graduated with a degree in Information Technology, which has provided me with a solid foundation for my career in the tech industry. Along the way, I've had the opportunity to work closely with a range of professionals, including civil engineers, business specialists, and lawyers, expanding my perspective and enhancing my skill set.
                </p>
                <p>
                  Feel free to explore <Link className="text--no-decoration" to="/foobar">this website</Link> or check out <a target="_blank" rel="noreferrer" className="text--no-decoration" href={resumeUrl}>my resume</a>.
                </p>
                <p>Thank you!</p>
                <p className="text--justify">
                  <Link to={"https://github.com/mkeithx"} className={clsx("mx-3")}>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </Link>
                  <Link to={"https://twitter.com/mkeithtan"} className={clsx("mx-3", "text--no-decoration")}>
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                  </Link>
                  <Link to={"https://www.linkedin.com/in/mkeithtan"} className={clsx("mx-3")}>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
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
