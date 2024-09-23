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
    hero_header,
    custom_footer,
    custom_tagline,
    custom_description,
    custom_title,
    custom_header,
  } = customFields as {
    hero_header: string;
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
            {"The SpaceHub Project"}
          </Heading>

          <span className={clsx("hero__subtitle margin-left--xs")}>
            {" | "}
            <Link to="https://github.com/mkeithX" className="text--no-decoration">
              <b>{custom_title}</b>
            </Link>
          </span>
        </div>
      </div>
      <div className={'container margin-vert--lg'}>
        <h2>{"About"}</h2>
        <p>{custom_description}</p>
        <ul>
          <li>
            📣 <strong>{"Lorem Ipsum "}</strong> {"stay tuned!"}{' '}
            <a href="#">{"Here"}</a> {"stay tuned!"}
            {"stay tuned!"}<Link to="/blog">{"stay tuned!"}</Link>
          </li>
          <li>
            🙋 <strong>{"Lorem Ipsum "}</strong> by joining the{' '}
            <a href="#">{"stay tuned!"}</a>, or
            {"stay tuned!"}{' '}
            <a href="#">
            {"stay tuned!"}
            </a>
            .
          </li>
          <li>
            🌏 <strong>{"Lorem Ipsum "}</strong> on{' '}
            <a href="#">{"stay tuned!"}</a>.
          </li>
          <li>
            🔒 <strong>{"Lorem Ipsum "}</strong> {"stay tuned!"}{' '}
            <a href="#">{"stay tuned!"}</a>
            .
          </li>
        </ul>
        <p>
          ❓ {"stay tuned!"}{' '}
          <a href="#">{"stay tuned!"}</a>.
        </p>
      </div>
    </Layout>
  );
}

export default Foobar;
