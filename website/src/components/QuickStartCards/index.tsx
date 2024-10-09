import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";
import QuickStartImageUrl from "@site/static/img/logo/terminal-no-slash.svg";
import Heading from "@theme/Heading";

type QuickStartLinkProps = {
  to: string;
  children?: ReactNode;
};

function QuickStartLink({ to, children }: QuickStartLinkProps) {
  return (
    <Link to={to}>
      {children ?? <div id="quickstartLinkLabel">website</div>}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  title: string;
  subTitle: string;
  webUrl: string;
};

function QuickStartCard({ className, title, subTitle, webUrl }: ProfileProps) {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__header")}>
          <div className={clsx("avatar")}>
            <QuickStartImageUrl
              className={clsx("avatar__photo avatar__photo--lg", styles.image)}
              title={title}
            />
            <div className="avatar__intro">
              <Heading as="h3">
                <span>{title}</span>
    
              </Heading>
              {/* <div className="avatar__name">{title}</div> */}
              <div className="avatar__subtitle">{subTitle}</div>
            </div>
          </div>
        </div>
        <div className={clsx("card__footer")}>
          <div
            className={clsx("button-group button-group--block", styles.buttons)}
          >
            {webUrl && (
              <Link className="button button--secondary" to={webUrl}>
                {"Learn more"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickStartCol(props: ProfileProps) {
  return <QuickStartCard {...props} />;
}

export function QuickStartCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Advanced Guides"
        subTitle="Tips and Best Practice for mitigating issues."
        webUrl="/docs/devops/guides-and-workarounds"
      />
      <QuickStartCol
        title="Cosmos"
        subTitle="Discover fascinating facts about the universe starting from our Solar System."
        webUrl="/cosmos"
      />
    </div>
  );
}
export function DevOpsCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Win + Rs"
        subTitle="Win utilities shortcuts"
        webUrl="/docs/devops/troubleshoot/windows-utilities"
      />
      <QuickStartCol
        title="aka.ms"
        subTitle="All about aka.ms"
        webUrl="/docs/devops/admin-center/aka-ms"
      />
    </div>
  );
}
export function ReportsCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Bugs 🪲"
        subTitle="If you find issues or inconsistencies with the documentation or have suggestions on how to improve the project in general, please feel free to file an issue."
        webUrl="/community/contributing#issues"
      />
      <QuickStartCol
        title="Request a Feature ❓"
        subTitle="For new feature requests, you can create a post through the feature requests board. Your ideas are welcome for this project!"
        webUrl="/feature-requests"
      />
    </div>
  );
}

export function ProjectsDocsRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol 
      title="Django"
      subTitle="Apps built with Django"
      webUrl="/docs/examples/django"
      />
            <QuickStartCol 
      title="Python"
      subTitle="Apps built with Python"
      webUrl="/docs/examples/django"
      />
    </div>
  );
}


