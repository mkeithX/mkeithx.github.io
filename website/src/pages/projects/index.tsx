import React from "react";
import Layout from "@theme/Layout";

import ProjectCard from "./_components/ProjectCards";
import { cases } from "./_data";

function ProjectHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>My projects</h1>
      <p>List of projects that I'm Involved with</p>
      {/* <a
        className="button button--primary"
        href="https://github.com/mkeithX"
        target="_blank"
        rel="noreferrer"
      >
        View Source
      </a> */}
    </section>
  );
}

function ProjectCards() {
  return (
    <section className="container">
      <div className="row">
        {cases.map((item) => (
          <div key={item.title} className="col col--3 margin-bottom--lg">
            <ProjectCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <Layout title="Projects">
      <main className="margin-vert--lg">
        <ProjectHeader />
        <ProjectCards />
      </main>
    </Layout>
  );
}

export default Projects;