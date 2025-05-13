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
                        <span className={("text--light")}>{"SpaceHub For"}</span>
                        <Heading as="h1" className={clsx(styles.learnTitle)}>
                            <b>{"Developers"}</b>
                        </Heading>
                        <span className={clsx(styles.learnBody, "hero__subtitle margin-left-x text--light text--small")}>
                            {"where all testing begins."}
                            <Link className={styles.indexCtas} to={'/docs/learn'}>{" Let's go"}</Link>{"!"}

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