import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from '@docusaurus/useBaseUrl';

function CosmospageHeader(): JSX.Element {
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
        <header>
            <div className={clsx(styles.cosmosHead, "hero hero--dark")}>
                <div className="container">
                    <div className="hero__subtitle">
                        <span className={clsx(styles.heroSubTitleTextHtml, "text--light")}>{'The'}</span>
                    </div>
                    <Heading as="h1" className={clsx(styles.cosmosTitle)}>
                        {"Universe"}
                    </Heading>
                    <span className={clsx("hero__subtitle margin-left-x text--info text--light text--small")}>
                        {"Highlighting scientific discoveries, technological advancements, physics, astronomy, and space exploration."}

                    </span>
                    <div className={clsx(styles.buttons, 'margin-vert--md')}>
                        <Link
                            className={clsx("button button--secondary button--lg")}
                            to={useBaseUrl('/cosmos/timeline')}>
                            {'Get Started'}
                        </Link>
                    </div>
                </div>

            </div>
            <div className={clsx(styles.cosmosBody, "hero hero--dark")}>
                <div className="container">
                    <p>

                    </p>
                </div>
            </div>

        </header>
    );
}

export default function Cosmos(): JSX.Element {
    const {
        siteConfig: { title, tagline, customFields },
    } = useDocusaurusContext();
    const { custom_description } = customFields as { custom_description: string };

    return (
        <Layout title="Cosmos" description="The Universe">
            <CosmospageHeader />

        </Layout>
    );
}
