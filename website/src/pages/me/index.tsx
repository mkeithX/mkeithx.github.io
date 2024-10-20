import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import useBaseUrl from "@docusaurus/useBaseUrl";

function This(): JSX.Element {
    const {
        siteConfig: { tagline, customFields },
    } = useDocusaurusContext();

    const {
        custom_tagline,
        custom_description,
        custom_title,
        custom_header,
    } = customFields as {
        custom_tagline: string;
        custom_description: string;
        custom_header: string;
        custom_title: string;
    };
    const profilePicUrl = "https://github.com/mkeithx.png";
    const resumeUrl = useBaseUrl("./files/resume.pdf");

    return (
        <Layout title="Le Me" description="About me">
            <div className={clsx(styles.thisHead, "hero hero--dark")}>
                <div className="container">
                    <div className="avatar">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={profilePicUrl} />
                        <div className="avatar__intro">
                            {/* <div className={clsx("hero__subtitle")}>
                                <span className={clsx(styles.thisSubtitle)}>{"The"}</span>
                            </div> */}
                            <Heading as="h1" className={clsx(styles.thisTitle)}>
                                {"About"}
                            </Heading>
                            <div className={clsx("avatar__subtitle")}>
                                <span className={clsx(styles.thisSubtitle)}>{"@"}{custom_title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.thisBody, "hero hero--dark")}>
                <div className="container">
                    <div className={clsx("avatar")}>
                        <div className="avatar__intro">
                            {/* <div className="avatar__name">Hi</div> */}
                            <small className={clsx(styles.thisBody, "avatar__subtitle")}>
                                <h2 className="text text--light">Hi! I'm Keith</h2>
                                <p>
                                    I'm a independent software developer with a soft spot for the Django web framework. Right now, I'm focusing on improving my frontend skills to make better user experiences. I also work as a systems administrator at a private company, where I help manage IT infrastructure. In simple terms, I build websites and fix computers too. Outside of work, I take pride in being a loving husband and devoted dad, yet admittedly, a stubborn brother.
                                </p>
                                {""}
                                <p>
                                    My coding journey is intertwined with my love for pizza and fascination with the cosmos. Despite never dreaming of being part of the IT industry, I've embraced this path wholeheartedly.
                                </p>
                                {""}
                                <p>
                                    I graduated with a degree in Information Technology, which has provided me with a solid foundation for my career in the tech industry. Along the way, I've had the opportunity to work closely with a range of professionals, including civil engineers, business specialists, and lawyers, expanding my perspective and enhancing my skill set.


                                </p>
                                {""}
                                <p>
                                    Feel free to explore <Link className="text--no-decoration" to="/foobar">{"this website "}</Link>
                                    or check out <a target="_blank" rel="noreferrer" className="text--no-decoration" href={resumeUrl}>my resume</a>.
                                </p>

                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default This;
