import React from 'react';
import clsx from 'clsx';
import { Project } from '@site/src/components/ProjectCards/Projects';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { projects } from "./_components/projectCards";



const ProjectsHeader = (): JSX.Element => {
    const {
        siteConfig: { tagline, customFields },
    } = useDocusaurusContext();

    const { custom_header, custom_description, custom_projectDescription } = customFields as {
        custom_header: string;
        custom_description: string;
        custom_projectDescription: string
    };

    return (
        <header className={clsx('hero hero--dark', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <span className={styles.heroTitleTextHtml}>
                        <div className={styles.heroBannerTitle}>
                            <b>{"Explore"}</b>

                        </div>
                    </span>
                </Heading>
                <div className={styles.heroSubtitle}>
                    <span className={styles.heroCustomSubTitleHtml}>
                        {custom_projectDescription}
                        <br />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default function Projects(): JSX.Element {
    return (
        <Layout title="Projects" description="Explore my projects">
            <ProjectsHeader />
            <main className={clsx("container margin-vert--lg")}>

                <div className={clsx(styles.section, "row")}>
                    {projects.map((project) => (
                        <Project key={project.title} {...project} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
