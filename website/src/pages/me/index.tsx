import React, { JSX } from 'react';
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function AboutPage(): JSX.Element {
  const {
    siteConfig: { organizationName, customFields },
  } = useDocusaurusContext();

  const {
    description,
  } = customFields as {
    description: string;
    custom_keyword: string;
  };

  const profilePicUrl = "https://github.com/mkeithX.png";

  return (
    <Layout title="About" description={description}>
      <div className={clsx(styles.thisHead, "hero hero--dark")}>
        <div className="container">
          <div className={clsx(styles.thisAvatar, "avatar")}>
            <img
              className="avatar__photo avatar__photo--xl"
              src={profilePicUrl}
              alt="Keith WT GitHub Profile Picture"
            />
            <div className="avatar__intro">
              <Heading as="h1" className={clsx(styles.thisTitle)}>
                Kitimi Universe
              </Heading>
              <div className="avatar__subtitle">
                <span className={clsx(styles.thisSubtitle)}>{"| Author's note"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.thisBody, "hero hero--dark")}>
        <div className="container">
          <div className="avatar__intro">
            <div>
              <h2 className="text text--bold">The Journey of Kitimi Universe</h2>
              <p>
                The story of Kitimi Universe began in 2019, during my time at Google. Back then, our small team of three found opportunity in uncertainty. While the world was bracing for a pandemic, we immersed ourselves in internal programming courses. Most of our projects were built in Python, particularly using Django, and several made it to deployment. I had the privilege of naming many of them—often with recursive acronyms and intentionally “out-of-context” titles. Though I can’t share those names here, they remain a fun part of our legacy. Eventually, as we each moved on from Google, the original group retired.
              </p>

              <h2 className="text text--bold">The Space Era</h2>
              <p>
                In 2022, I transitioned into a Help Desk Analyst role, where I became deeply familiar with the Azure ecosystem. By mid-2023, I joined the Microsoft 365 Developer Program—and that’s when Kitimi Platforms was born. Our core development team, Kitiplex, began shaping ideas into reality. Among our early projects were <Link to="https://ginabot.vercel.app/">ChatAi</Link> and its first <Link to="https://kitiplex.github.io/blog/welcome">docs site</Link> built with Docusaurus.
              </p>

              <h2 className="text text--bold">Looking Ahead</h2>
              <p>
                As a web developer, software engineer, and system administrator, I created this platform to share my work, post updates, and connect with others who are passionate about technology and innovation. The site is intentionally simple and easy to navigate—a reflection of our philosophy at Kitiplex.
              </p>

              <p>
                Thank you and hope you find something useful or interesting during your visit.
              </p>

              <p>
                <Link
                  className="text--no-decoration"
                  to="https://github.com/mkeithX"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <b>Keith WT · {organizationName}</b>
                </Link>
                <br />
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
