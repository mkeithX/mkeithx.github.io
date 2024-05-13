import React from "react";
import Link from "@docusaurus/Link";
import Heading from '@theme/Heading';
import styles from "./styles.module.css";
import clsx from "clsx";

export type Case = {
  title: string;
  preview: string;
  description: string | React.ReactNode;
  website: string;
  source?: string;
  tags: string[];
};

function ProjectCard(props: Case) {
  return (
    <article className="card shadow--md" style={{ height: "100%"}}>
      <div className={clsx('card__image', styles.cardImage)}>
      <img
          src={props.preview}
          alt={props.title}
          title={props.title}
          className={styles.cardImage}
        />
      </div>
      {/* <div
        className={clsx("card__image", styles.showcaseCardImage)}
        onClick={() => window.open(props.website)}
      >
        <img
          src={props.preview}
          alt={props.title}
          title={props.title}
          className={styles.cardImage}
        />
      </div> */}
      <div className="card__body">

        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
          <Link href={props.website} className={styles.showcaseCardLink}>
            {props.title}
          </Link>
          </Heading>
        </div>

        {/* <Link to={props.website}>
          <h4>{props.title}</h4>
        </Link> */}
        <p className={styles.showcaseCardBody}>{props.description}</p>
      </div>
      <div className="card__footer">
        <section className="margin-bottom--md">
          {props.tags.map((item) => (
            <span key={item} className="badge badge--secondary badge--sm margin-right--xs">
              {item}
            </span>
          ))}
        </section>
        <div className="button-group button-group--block">
          <button
            className="button button--primary button--block"
            onClick={() => window.open(props.website)}
          >
            Docs
          </button>
          {props.source && (
            <button
              className="button button--secondary button--block"
              onClick={() => window.open(props.source)}
            >
              Source
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;