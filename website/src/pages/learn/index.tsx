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
                    <div className="hero__subtitle">
                        <span className={("badge badge--emphasis text--small text--light")}>{"beta"}</span>
                        <Heading as="h1" className={clsx(styles.learnTitle)}>
                            <b>{"SpaceHub for Developers"}</b>
                        </Heading>
                        {"Snippets, code stuff and more."}
                        <span className={clsx(styles.indexCtas, "hero__subtitle margin-left-x text--light text--small")}>
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
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <LearnHeader />
        </Layout>
    );
}