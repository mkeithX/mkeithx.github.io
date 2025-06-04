import React, { JSX } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

function LearnHeader(): JSX.Element {

    return (
        <header>
            <div className={clsx(styles.learnHead, "hero hero--dark")}>
                <div className="container">
                    <div className={clsx(styles.learnSubtitle, "hero__subtitle")}>
                        <span className={clsx("text--light")}>{"Explore more"}</span>
                        <Heading as="h1" className={clsx(styles.learnTitle)}>
                            <b>{"SpaceHub for Developers"}</b>
                        </Heading>
                        <span className={clsx(styles.learnBody, "text--small text--light")}>{"Snippets, code stuff and more."}</span>

                        <span className={clsx(styles.learnindexCtas, "hero__subtitle margin-left-x text--light text--small")}>
                            <Link
                                className={clsx("button button--outline button--primary button--lg")} to={'/docs/learn/react-live-demo'}>{"Live Editor"}
                            </Link>
                            <Link
                                className={clsx("button button--outline button--warning button--lg")} to={'/docs/learn/python'}>{"Python"}
                            </Link>

                        </span>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.learnBody, "hero hero--dark")}>
                <div className="container">
                    <p>

                    </p>
                </div>
            </div>
        </header>
    );
}

export default function Learn(): JSX.Element {
    return (
        <Layout title="SpaceHub for Developers" description="All about programming fundamentals">
            <Head>
                 <meta property="og:image" content="/img/banner/social-banner-dev.png"/>
                 <meta name="twitter:card" content="summary_large_image" />
                 <link rel="canonical" href="https://mkeithx.pages.dev/" />
            </Head>
            <LearnHeader />
        </Layout>
    );
}