import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from "@theme/Heading";
import clsx from 'clsx';
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


function Foobar() : JSX.Element {
  const {
    siteConfig: { tagline, customFields },
  } = useDocusaurusContext();
  const {
    hero_header,
    custom_footer,
    custom_tagline,
    custom_description,
    custom_header,
    custom_title,
    description,
  } = customFields as {
    hero_header: string;
    custom_footer: string;
    custom_tagline: string;
    custom_description: string;
    custom_header: string;
    description: string;
    custom_title: string;
  };
  return (
    <Layout title="Foobar">
      <div className={clsx(styles.fooHead,'hero hero--dark')}>
        <div className="container">
            <Heading as="h1" className={clsx(styles.fooTitle)}>
                {"The SpaceHub Project"}
            </Heading>
            <span className={clsx("hero__subtitle margin-left--xs")}>
           {" "}{"| "}
           <Link to="https://github.com/mkeithX" className="text--no-decoration">
           <b>{custom_title}</b>
           </Link>
          </span>
        </div>
      </div>
      <div className={'container margin-vert--lg'}>
        <h2>{custom_description}</h2>

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
      
      <div className={'container margin-vert--xl'}>
        <h2>{description}</h2>
        <p>
          {"Lorem Ipsum is simply dummy text of the printing and typesetting"}
          <ul>
            <li>
              <a href="#">{'Link 1'}</a>{' '}
              <i>(Link 1)</i>
            </li>
            <li>
              <a href="#">{'Link 2'}</a>{' '}
              <i>(Link 2)</i>
            </li>
            <li>
              <a href="#">{'Link 3'}</a>{' '}
              <i>(Link 3)</i>
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

export default Foobar;