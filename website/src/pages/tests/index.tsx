import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

function DogfoodingHeader(): JSX.Element {

    return (
        <header>
            <div className={clsx(styles.testsHead, 'hero hero--dark')}>
                <div className='container'>
                    <div className='hero__subtitle'>
                        <span className={("text--light")}>{"The"}
                        </span>
                        <Heading as="h1" className={clsx(styles.testsTitle)}>
                            <b>{"SpaceHub DogFooding"}</b>
                            
                        </Heading>
                        <span className={clsx(styles.testsBody, "hero__subtitle margin-left-x text--light text--small")}>
                            {"...where all testing begins."}
                            <Link className={styles.indexCtas} to={'/tests/example'}>{" Let's go"}</Link>{"!"}

                        </span>
                    </div>
                </div>

            </div>
            <div className={clsx(styles.testsBody, "hero hero--dark")}>
                <div className="container">
                    <p>

                    </p>
                </div>
            </div>
        </header>
    );
}

export default function Tests(): JSX.Element {
    return (
        <Layout title="Dogfooding" description="Playground for extending APIs and extra plugin instances for testing">
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <DogfoodingHeader />
        </Layout>
    );
}