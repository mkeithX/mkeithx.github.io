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
    <Layout title="Foobar" description="The SpaceHub Project">
      <div className={clsx(styles.fooHead, "hero hero--dark")}>
        <div className="container">
          <Heading as="h1" className={clsx(styles.fooTitle)}>
            The SpaceHub Project
          </Heading>
          <span className={clsx("hero__subtitle margin-left--xs")}>
            {" | "}
            <span className="text--primary text--light text--small">
              {"Author's Perspective"}
            </span>
            {/* <Link to="https://github.com/mkeithX" className="text--no-decoration">
              <b></b>{"Foobar"}
            </Link> */}
          </span>
        </div>
      </div>
      <div className={clsx(styles.fooBody, "container margin-vert--lg")}>
        <h2>{"Overview"}</h2>
        <p>
          This project highlights the{" "}
          <span className="text--primary text--semibold">importance of documentation</span> in
          software development yet{" "}
          <span className="text--primary">often neglected</span> by many
          software developers, including myself. For instance, a simple{" "}
          <span className="text--primary">README</span> in your project or
          repository serves as valuable documentation. It explains why your
          project is useful, what users can do with it, and how to use it. In
          addition, it also promotes knowledge sharing among team members,
          ensuring everyone understands the codebase, architecture, and design
          decisions—especially beneficial for onboarding new developers.
        </p>
        Without proper documentation,{" "}
        <span className="text--primary">confusion can happen</span> within a
        team, leading to{" "}
        <span className="text--primary">
          miscommunication and duplicated work
        </span>
        . This results in wasted time and resources, creating costs that impacts
        the business. Effective documentation is essential to ensure everyone
        understands their roles and responsibilities clearly, preventing these
        inefficiencies and enhancing productivity.
        <br></br> <br></br>{" "}
        <span>
          If find this project helpful,  {" "}
          <Link to="https://github.com/mkeithX/mkeithx.github.io" className="text--no-decoration">
            <b>{"give it star"}</b>
     
          </Link>{" "}
          on GitHub or 
          <Link to="/feeling-lucky" className="text--no-decoration">
            <b>{" click here "}</b> 
     
          </Link>{" "}
          {" if you're feeling lucky."}
        </span>
        {/* <br></br> <br></br>{" "}
        <span>
          Further, a big thank you{" "}
          <Link to="https://github.com/mkeithX" className="text--no-decoration">
            <b></b>
            {"Kitiplex DevOps"}
          </Link>{" "}
          team for considering this boring website a valuable resources for
          software development.
        </span> */}
      </div>
    </Layout>
  );
}

export default Foobar;
