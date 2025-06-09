import React, { JSX } from 'react';
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

function This(): JSX.Element {
    const {
        siteConfig: { title, tagline, customFields },
    } = useDocusaurusContext();

    const {
        description,
        custom_tagline,
        custom_title,
        custom_header,
        custom_keyword,
    } = customFields as {
        description: string;
        custom_tagline: string;
        custom_description: string;
        custom_header: string;
        custom_title: string;
        custom_keyword: string;
    };

    const profilePicUrl = "https://github.com/mkeithx.png";

    return (
        <Layout title="About" description={description}>
            <div className={clsx(styles.thisHead, "hero hero--dark")}>
                <div className="container">
                    <div className={clsx(styles.thisAvatar, "avatar")}>
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={profilePicUrl}
                            alt="ProfileAvatar" />
                        <div className="avatar__intro">
                            <Heading as="h1" className={clsx(styles.thisTitle)}>
                                {"Keyword"}
                            </Heading>
                            <div className={clsx("avatar__subtitle")}>
                                <span className={clsx(styles.thisSubtitle)}>{custom_keyword}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.thisBody, "hero hero--dark")}>
                <div className="container">
                    <div className="avatar">
                        <div className="avatar__intro">
                            <div>
                                <h2 className="text text--light">History</h2>
                                <p>
                                    Stuff I built <i>{description}</i> <br></br>
                                    
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <h2 className="text text--light">Roadmap</h2>
                                <p>
                                    Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                                </p>


                                <p>
                                     Thank you and hope you find something useful or interesting during your visit.
                                </p>
                                {""}
                                <p>
                                    <Link
                                        className="text--no-decoration"
                                        to="https://github.com/mkeithX"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {"Keith Tan"}<br></br>
                                    </Link>
                                    {"Software Engineer"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default This;
