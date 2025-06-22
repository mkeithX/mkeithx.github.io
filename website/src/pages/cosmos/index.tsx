import React, { JSX } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';
import CosmicFeatures from "./_components/CosmicFeatures";
import Head from "@docusaurus/Head";

import BannerLogo from '@site/static/img/astronaut.svg';

function CosmospageHeader(): JSX.Element {


    return (
        <header>
            <div className={clsx(styles.cosmosBanner, "hero hero--dark")}>
                <div className="container">
                    <div className="hero__subtitle">
                        <span className={clsx("text--light")}>{'The'}</span>
                    </div>
                    <Heading as="h1" className={clsx(styles.cosmosTitle)}>
                        <b>{"Universe"}</b>

                    </Heading>
                    <span className={clsx(styles.cosmosBody, "hero__subtitle margin-left-x text--light text--small")}>
                        {"From Quarks to Black Holes."}
                        <Link className={clsx(styles.indexCtas)} to={'/cosmos/genesis'}>{' Start here'}</Link>{"."}

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
            <Head>
                <meta property="og:image" content="https://mkeithx.pages.dev/img/banner/social-banner-cosmos.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://mkeithx.pages.dev/" />
            </Head>
            <CosmospageHeader />
            {/* <CosmicFeatures /> */}
        </Layout>
    );
}
