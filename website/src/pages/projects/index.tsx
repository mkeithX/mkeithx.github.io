import React, { JSX } from 'react';
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
        <header className={clsx('hero hero--dark', styles.projectsheroBanner)}>
            <div className="container">
                <div className='hero__subtitle'>
                    <span className='text--light'>
                        {"Explore"}

                    </span>
                <Heading as="h1" className="hero__title">
                    <span className={styles.projectsheroTitleTextHtml}>
                        <div className={styles.heroBannerTitle}>
                            <b>{"More Code Samples"}</b>

                        </div>
                    </span>
                </Heading>
                </div>

                <div className={styles.heroSubtitle}>
                    <span className={styles.projectsheroCustomSubTitleHtml}>
                        {"for software devlelopment"}
                        <br />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default function Projects(): JSX.Element {
    return (
        <Layout title="SpaceHub for Developers" description="All about programming fundamentals">
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
