import React, { JSX } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

function CosmospageHeader(): JSX.Element {


    return (
        <header>
            <div className={clsx(styles.cosmosHead, "hero hero--dark")}>
                <div className="container">
                    <div className="hero__subtitle">
                        <span className={clsx("text--light")}>{'The'}</span>
                    </div>
                    <Heading as="h1" className={clsx(styles.cosmosTitle)}>
                        {"Universe"}
                    </Heading>
                    <span className={clsx(styles.cosmosBody, "hero__subtitle margin-left-x text--light text--small")}>
                        {"From Quarks to Black Holes."}
                        <Link className={styles.indexCtas} to={'/cosmos/timeline'}>{' Start here'}</Link>{"."}

                    </span>
                    {/* <div className={clsx(styles.indexCtas, 'text--no-decoration margin-vert--md')}>
                        <Link
                            className={clsx("button button--secondary button--lg")}
                            to={useBaseUrl('/cosmos/timeline')}>
                            {'Get Started'}
                        </Link>
                    </div> */}
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

    return (
        <Layout title="The Universe" description="From Quarks to Black Holes and Beyond">
            <CosmospageHeader />

        </Layout>
    );
}
