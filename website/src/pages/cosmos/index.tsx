import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from '@docusaurus/useBaseUrl';

function Cosmos(): JSX.Element {
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
        <Layout title="Cosmos" description="The Universe">
            <div className={clsx(styles.cosmosHead, "hero hero--dark")}>
                <div className="container">
                    <div className="hero__subtitle">
                        <span className={clsx(styles.heroSubTitleTextHtml, "text--light")}>{'The'}</span>
                    </div>
                    <Heading as="h1" className={clsx(styles.cosmosTitle)}>
                        {"Universe"}
                    </Heading>
                    <span className={clsx("hero__subtitle margin-left-x text--info text--light text--small")}>
                        {"Highlighting scientific discoveries, technological advancements, and influential figures in physics, astronomy, and space exploration."}
                    </span>

                </div>
                <div className={clsx(styles.buttons, 'margin-vert--md')}>
                    <Link
                        className={clsx("button button--warning button--outline button--lg")}
                        to={useBaseUrl('/cosmos/timeline')}>
                        {'Get Started'}
                    </Link>
                </div>
            </div>
            <div className={clsx(styles.cosmosBody, "hero hero--dark")}>
                <div className="container">
                    <p>

                    </p>
                </div>
            </div>

        </Layout>
    );
}

export default Cosmos;