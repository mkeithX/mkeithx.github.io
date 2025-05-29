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
    } = customFields as {
        description: string;
        custom_tagline: string;
        custom_description: string;
        custom_header: string;
        custom_title: string;
    };

    const profilePicUrl = "https://github.com/mkeithx.png";

    return (
        <Layout title="About" description={description}>
            <div className={clsx(styles.thisHead, "hero hero--dark")}>
                <div className="container">
                    <div className="avatar">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={profilePicUrl}
                            alt="ProfileAvatar" />
                        <div className="avatar__intro">
                            <Heading as="h1" className={clsx(styles.thisTitle)}>
                                {"mkeithX"}
                            </Heading>
                            <div className={clsx("avatar__subtitle")}>
                                <span className={clsx(styles.thisSubtitle)}>{"about"}</span>
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
                                <h3 className="text text--light">Hello, world!</h3>
                                <p>
                                    I'm Keith. I’m an independent software engineer with a soft spot for web development and a true aficionado of Django, Python’s web framework. While I work as a systems administrator at a private company, I’m also focused on improving my frontend skills to enhance user experience.
                                </p>
                                <p>
                                    I earned my degree in Information Technology when ReactJS was about a year old. Despite never dreaming of being part of the IT industry, I’ve embraced this path wholeheartedly, and I’m blessed to have a wonderful family that supports me.
                                </p>
                                Currently, I’m working on something cool and, of course, maintaining the projects I’ve authored and contributed to, including <Link
                                    className="text--no-decoration"
                                    to="/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {"this website"}
                                </Link>. 

                                <p>
                                    Feel free to explore and hope you enjoy!
                                </p>
                                {""}
                                <p>
                                    Thank you for visiting!
                                </p>
                                {/* <p>
                                <Link
                                    className="text--no-decoration"
                                    to="/feeling-lucky"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {"Keith"}
                                </Link>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default This;
