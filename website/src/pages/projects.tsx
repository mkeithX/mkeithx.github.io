import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/ProjectCards/Projects";

const dataDir = "./data/projects";
const projects: ProjectData[] = [
  {
    title: "Python Starters",
    description:
      "Basic Python examples for starters.",
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
    description: "Hub for contributors, authors and mainteners within the platform.",
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
    description: "Building web application with Python.",
    url: "https://github.com/mkeithX/flask-tutorial-demo",
    image: require(`${dataDir}/default.png`),

  },
  {
    title: "Django Custom User model",
    description: "Customize Django's base user model with PostgreSQL.",
    url: "/projects",
    image: require(`${dataDir}/default-soon.png`),

  },
];

const title = "Projects";
const description = "This section highlights some of the projects and demos  I've authored and contributed to.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{"Welcome"}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}