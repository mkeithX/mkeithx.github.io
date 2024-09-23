import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Column from "@site/src/components/Column";
import Columns from "@site/src/components/Columns";
import KitiplexDevOpsLogo from "@site/static/img/logo/kitiplex-devops.svg";
import KitimiPlatforms from "@site/static/img/logo/KitimiPlatforms-svg-logo.svg";

function Foobar(): JSX.Element {
  const {
    siteConfig: { tagline, customFields },
  } = useDocusaurusContext();

  const {
    custom_title,
  } = customFields as {
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
      <div className={"container margin-vert--lg"}>
        <Columns>
          <Column className="text--start margin-vert--lg">
            <KitiplexDevOpsLogo title="KitiplexDevOps" />
          </Column>
          <Column className="text--justify">
            <h2>{"Motivation"}</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc. 
          </Column>
        </Columns>
        
        <Columns>
          <Column className="text--justify margin-vert--lg">
            <h2>{"Build"}</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc.
          </Column>
          <Column className="text--start margin-vert--lg" children={""}>
            {/* <Kitiplex title="Kitiplex" /> */}
          </Column>
        </Columns>

        <Columns>
          <Column className="text--start margin-vert--lg">
            <KitimiPlatforms title="KitimiPlatforms" />
          </Column>
          <Column className="text--justify">
            <h2>{"Developers"}</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc.
          </Column>
        </Columns>
      </div>
    </Layout>
  );
}

export default Foobar;
