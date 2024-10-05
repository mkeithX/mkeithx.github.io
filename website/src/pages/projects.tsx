import React from "react";
import Layout from "@theme/Layout";
import { Project, ProjectData } from "../components/ProjectCards/Projects";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const dataDir = "./data/projects";

// Define the project data in a more structured way
const projects: ProjectData[] = [
  {
    title: "Python Starters",
    description: "Basic Python examples for starters.",
    url: "https://github.com/mkeithX/python-starters",
    image: require(`${dataDir}/default.png`),
  },
  {
    title: "MKX Website",
    description: "A unified docs for IT Developers and Astronomers.",
    url: "https://mkeithx.pages.dev",
    image: require(`${dataDir}/default.png`),
  },
  {
    title: "Kitimi Platforms",
    description: "Hub for contributors, authors and maintainers within the platform.",
    url: "https://kitiplex.github.io",
    image: require(`${dataDir}/ms-banner-kitiplex.png`),
  },
  {
    title: "IUIU",
    description: "Knowledge Base for awesome people by awesome people.",
    url: "https://kitiplex.github.io/iuiu",
    image: require(`${dataDir}/sc-iuiu.png`),
  },
  {
    title: "Flask Tutorial - Demo",
    description: "Building web applications with Python.",
    url: "https://github.com/mkeithX/flask-tutorial-demo",
    image: require(`${dataDir}/default.png`),
  },
  {
    title: "django-crud-demo",
    description: "Simple crud built with Django.",
    url: "https://github.com/mkeithX/django-crud-demo",
    image: require(`${dataDir}/djang_mkx_demo.png`),
  },
];

const title = "Projects";
const description = "This section highlights some of the projects and demos I've authored and contributed to.";

const Projects: React.FC = (): JSX.Element => {
  return (
    <Layout title={title} description={description}>
      <main className={clsx("container margin-vert--lg")}>
        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <div className={styles.heroBannerTitle}>
            {"Welcome"}
            </div>
          </span>
        </Heading>
        <div className={styles.heroSubtitle}>
          <span className={styles.heroCustomSubTitleHtml}>
            <b>{description}</b>
          </span>
        </div>
        <hr></hr>
        <div className={clsx(styles.section,"row")}>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
