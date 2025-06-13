import React, { JSX } from 'react';
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from '@docusaurus/Head';
import SpaceLogo from '@site/static/img/astronaut.svg'
import useBaseUrl from '@docusaurus/useBaseUrl';

function SpacePageHeader(): JSX.Element {
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
            <div className={clsx(styles.spacePageBanner, "hero hero--dark")}>
                <div className="container">
                    <SpaceLogo
                        className={styles.spacePageLogo}
                        title=""
                        width={160} // 160
                        height={160} // 180

                    />
                    <div className={clsx(styles.spacePageSubtitle)}>
                        {/* {'Discover'} */}
                        <span className={clsx("text--light")}>

                        </span>

                    </div>
                    <Heading as="h1" className={clsx(styles.spacePageTitle)}>
                        {"Stuff about Universe"}
                    </Heading>
                    <span className={clsx("hero__subtitle margin-left--xs")}>
                        {""}
                        <span className="text--light text--small">
                            {"From Quarks to Black Holes"}
                        </span>
                    </span>
                    <div className={clsx(styles.indexCtas, 'margin-vert--md')}>
                        <Link
                            className={clsx("button button--outline button--primary button--lg")}
                            to="/cosmos/timeline">
                            {'Explore'}
                        </Link>
                        <Link
                            className={clsx("button button--secondary button--lg")}
                            to={"https://eyes.nasa.gov/apps/solar-system/#/home"}>
                            {'NASA'}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Space(): JSX.Element {
    const {
        siteConfig: { title, customFields },
    } = useDocusaurusContext();
    return (
        <Layout>
            <main>
                <SpacePageHeader />
            </main>

        </Layout>
    );
}
