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
          <div className="hero__subtitle">
            <span className={clsx(styles.heroSubTitleTextHtml,"text--light")}>{'The'}</span>

          </div>
          <Heading as="h1" className={clsx(styles.fooTitle)}>
            {"Author's Note"}
          </Heading>
          <span className={clsx("hero__subtitle margin-left--xs")}>
            {" | "}
            <span className="text--primary text--light text--small">
              {"The SpaceHub Project"}
            </span>
            {/* <Link to="https://github.com/mkeithX" className="text--no-decoration">
              <b></b>{"Foobar"}
            </Link> */}
          </span>
        </div>
      </div>
      <div className={clsx(styles.fooBody, "hero hero--dark")}>
        <div className="container">
          {/* <h2>{"Keyword"}</h2> */}
          <p>
            The key purpose of this project is to highlight the <span className="text--primary">importance of documentation </span>
            in software development. 
            Yet, it is often neglected by many software developers, including myself. In the fast-paced world of coding, 
            it's easy to prioritize functionality over clarity, 
            but the long-term benefits of comprehensive documentation cannot be overstated. 
            Proper documentation not only aids in maintaining and scaling projects but also 
            fosters collaboration and knowledge sharing within teams. By reflecting on our own practices 
            and advocating for better documentation, we can enhance the overall quality of our software and 
            create a more sustainable development environment.
            </p>
          <br></br>{" "}
        
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
      </div>
    </Layout>
  );
}

export default Foobar;
