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
                Author's Note
              </Heading>
              <div className="avatar__subtitle">
                <span className={clsx(styles.thisSubtitle)}>{"| Kitimi Universe"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.thisBody, "hero hero--dark")}>
        <div className="container">
          <div className="avatar__intro">
            <div>
              <h2 className="text text--bold">Genesis</h2>
              <p>
                Kitimi Universe started in 2019 while I was working at Google. Our small team of three found new ideas during uncertain times. As the world prepared for a pandemic, we focused on learning and building. Most of our projects were made in Python using Django, and several were successfully deployed. I had the chance to name many of them—often using fun acronyms and strange, creative titles. I can’t share those names here, but they’re still a fun part of our story. Eventually, we each moved on from Google, and the team came to an end.
              </p>

              <h2 className="text text--bold">The Space Era</h2>
              <p>
                In 2022, I became a Help Desk Analyst and got hands-on experience with Microsoft Azure. By mid-2023, I joined the Microsoft 365 Developer Program—this is when Kitimi Platforms began. Along with our new team, Kitiplex, we started turning our ideas into real projects. Some of our first work included <Link to="https://ginabot.vercel.app/">ChatAi</Link> and its <Link to="https://kitiplex.github.io/blog/welcome">first docs website</Link>, built with Docusaurus.
              </p>

              <h2 className="text text--bold">Looking Ahead</h2>
              <p>
                As a web developer, software engineer, and systems admin, I made this platform to share my work, give updates, and connect with others who enjoy building and learning with tech. The site is simple on purpose—just like our goal at Kitiplex: keep it clear, useful, and easy to use.
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
                Software Engineer · Systems Admin · Tech Builder
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
