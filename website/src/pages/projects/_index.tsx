import React, { useEffect, useRef, useState } from "react";

import { useLocation } from "@docusaurus/router";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faFile,
  faGamepad,
  faLink,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";
import projects from "../../data/_Projects";

import Heading from '@theme/Heading';

const TITLE = 'My Projects';
const DESCRIPTION = "List of projects that I'm involved with.";

function CategoryIcon({ category, size = "1x" }) {
  let faIcon;
  switch (category) {
    case "Project":
      faIcon = faFile;
      break;
    case "Open Source Tool":
      faIcon = faTools;
      break;
    case "Website":
      faIcon = faChrome;
      break;
    case "Game":
      faIcon = faGamepad;
      break;
    default:
      faIcon = faFile;
  }

  return <FontAwesomeIcon alt={category} size={size} icon={faIcon} />;
}

function ProjectHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

function ProjectCards() {
  return (
    <section className="margin-top--lg margin-bottom--xxl">
      <>
      <div className={styles.projectFavorite}>
        <div className="container">
          <div className={clsx(styles.projectFavoriteHeader,'margin-bottom--md')}>

            
          </div>
          <ul className={clsx('container','clean-list',styles.projectList)}>
            {projects.map((project) => (
            <ProjectCards key={project.title} />  
            ))}

          </ul>
        </div>
      </div>
      </>
    </section>
  )
}

export function ProjectListings(): JSX.Element {
  return (
    <div className={clsx(styles.projectList)}>
      {projects.map((project) => (
        <div
          id={project.title}
          key={project.title + "-card"}
          className={clsx("bg-secondary-800 hover:bg-secondary-900 transition rounded-lg overflow-hidden")}
        
        >
          <Link
            to={project.slug}
            className="hover: no-underline hover:no-underline"
          >
            {project.imageUrl ? (
              <div className="overflow-hidden h-40 md:h-48">
                <img src={useBaseUrl(project.imageUrl)} alt={project.title} />
              </div>
            ) : (
              <div
                className={
                  project.bgColor == "alternate"
                    ? "overflow-hidden bg-danger h-40 md:h-48"
                    : "overflow-hidden bg-success h-40 md:h-48"
                }
              >
                <h2 className="m-3 inline-block">{project.title}</h2>
              </div>
            )}
            <div className="pt-4 px-4">
              <h3 className="mb-1">{project.title}</h3>
              <p className="text-s mb-2">{project.period}</p>
              <p>{project.subtitle}</p>
              <p className="text-primary-default font-bold">Read more</p>
            </div>
          </Link>

        </div>
      ))}
    </div>
  );
}

export function ProjectCards(props: { projectItem: any; }) {
  const projectItem = props.projectItem;
  return (
    <div className={clsx("text--center margin-bottom--xl px-4", styles.projectItem)}>
      <Link to={useBaseUrl("/projects")}>
        <button className="button button--outline button--primary  py-2 px-4 mb-2">
          Back
        </button>
      </Link>
      <h1>{projectItem.title}</h1>
      <h2>{projectItem.subtitle}</h2>
      {projectItem.imageUrl && (
        <img src={useBaseUrl(projectItem.imageUrl)} alt={projectItem.title} />
      )}
      <div>
        <ul>
          <li>
            <CategoryIcon category={projectItem.category} />{" "}
            {projectItem.category}
          </li>
          <li>
            <FontAwesomeIcon alt="Calendar" icon={faCalendar} />{" "}
            {projectItem.period}
          </li>
          <li>
            <FontAwesomeIcon alt="Code" icon={faCode} /> {projectItem.tech}
          </li>
          {projectItem.team && (
            <li>
              <FontAwesomeIcon alt="Team" icon={faUsers} />{" "}
              {projectItem.team.map((member, i) => (
                <span key={i}>
                  {member.link && <a href={member.link}>{member.name}</a>}
                  {!member.link && member.name}
                  {i < projectItem.team.length - 1 ? ", " : ""}
                </span>
              ))}
            </li>
          )}
        </ul>
        <b>Description</b>
        <div>{projectItem.description}</div>
        {projectItem.links && (
          <>
            <b>Links</b>
            <ul>
              {projectItem.links.map((link, i) => (
                <li key={i}>
                  <a href={link.link}>
                    <FontAwesomeIcon alt="Link" icon={faLink} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to={"/projects"}>
        <button className="border-0 rounded py-2 px-4 bg-primary-900 hover:bg-primary-800 transition  text-lg cursor-pointer">
          More projects
        </button>
      </Link>
    </div>
  );
}

function FollowUp(): JSX.Element {
  return (
    <section className={styles.directory}>
      <div className="container">
        <h3>Continue exploring?</h3>
        <nav className="pagination-nav">
          <div className="pagination-nav__item">
            <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
              <div className="pagination-nav__sublabel">Read</div>
              <div className="pagination-nav__label">My blog</div>
            </Link>
          </div>
          <div className="pagination-nav__item pagination-nav__item--next">
            <a
              className="pagination-nav__link"
              href={useBaseUrl("pdf/resume.pdf")}
            >
              <div className="pagination-nav__sublabel">Download</div>
              <div className="pagination-nav__label">My resume</div>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default function Projects() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [loaded, setLoaded] = useState(false);
  const [showProjectItem, setShowProjectItem] = useState(false);
  const [projectItem, setProjectItem] = useState(projects[0]);
  const slug = useLocation();

  useEffect(() => {
    function handleTransition() {
      let foundProject;
      if (slug.hash) {
        foundProject = projects.find((project) => project.slug == slug.hash);
      }

      if (foundProject) {
        setProjectItem(foundProject);
        setShowProjectItem(true);
        window.scrollTo(0, 0);
      } else {
        setShowProjectItem(false);
      }

      setLoaded(true);
    }

    handleTransition();
  });

  

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
      <ProjectHeader />

      </main>

      {loaded && (
        <main>
          <div className="py-6 md:py-12">
            <div className="my-0 mx-auto max-w-7xl">
              {!showProjectItem && <ProjectCards />}
              {showProjectItem && <ProjectListing projectItem={projectItem} />}
            </div>
          </div>
          <FollowUp />
        </main>
      )}
    </Layout>
  );
}