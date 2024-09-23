import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Foobar(): JSX.Element {
  const {
    siteConfig: { tagline, customFields },
  } = useDocusaurusContext();

  const {
    custom_footer,
    custom_tagline,
    custom_description,
    custom_title,
    custom_header,
  } = customFields as {
    custom_footer: string;
    custom_tagline: string;
    custom_description: string;
    custom_header: string;
    custom_title: string;
  };

  return (
    <Layout title="Foobar">
      <div className={clsx(styles.fooHead, "hero hero--dark")}>
        <div className="container">
          <Heading as="h1" className={clsx(styles.fooTitle)}>
            The SpaceHub Project
          </Heading>
          <span className={clsx("hero__subtitle margin-left--xs")}>
            {" | "}
            <Link to="https://github.com/mkeithX" className="text--no-decoration">
              <b>{custom_title}</b>
            </Link>
          </span>
        </div>
      </div>
      <div className={clsx(styles.fooBody, 'container margin-vert--lg')}>
        <h2>About</h2>
        <span className="text--break text--left">
          A documentation website offering <span className="text--primary">Streamlined Resources for Software Development at Kitiplex</span>, tailored specifically for <span className="text--primary">systems administrators and software development, especially for the web</span>. With a focus on simplifying both foundational and advanced concepts, the platform provides tutorials, code snippets, and sharable gists.<br></br><br></br>

          The goal is to equip users with practical, organized resources to efficiently manage projects, solve problems, and enhance their technical expertise in web development and systems administration.
        </span>
        {/* 
        Uncomment the following section if needed
        <ul>
          <li>
            📣 <strong>Lorem Ipsum</strong> stay tuned! <Link to="/blog">here</Link>.
          </li>
          <li>
            🙋 <strong>Lorem Ipsum</strong> by joining the <Link to="#">stay tuned!</Link>.
          </li>
          <li>
            🌏 <strong>Lorem Ipsum</strong> on <Link to="#">stay tuned!</Link>.
          </li>
          <li>
            🔒 <strong>Lorem Ipsum</strong> stay tuned! <Link to="#">stay tuned!</Link>.
          </li>
        </ul>
        <p>
          ❓ stay tuned! <Link to="#">stay tuned!</Link>.
        </p> 
        */}
      </div>
    </Layout>
  );
}

export default Foobar;
