import React, { ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";

type WebsiteLinkProps = {
  to: string;
  children?: ReactNode;
};

function WebsiteLink({ to, children }: WebsiteLinkProps) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  title: string;
  subTitle: string;
  githubUrl: string;
};

function QuickStartCard({
  className,
  title,
  subTitle,
  githubUrl,
}: ProfileProps) {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card shadow--tl", styles.card)}>
        <div className="card__header">
        <div className={clsx("avatar")}>
            <img
              className="avatar__photo avatar__photo--lg margin-vert--sm"
              src={`/img/logo/x_code_slash.svg`}
              alt={`${title}'s avatar`}
            />
            <div className="avatar__intro">
              <div className="avatar__name">{title}</div>
              <div className="avatar__subtitle">{subTitle}</div>
            </div>
          </div>
          {/* <div className="button-group">
            {githubUrl && (
              <Link
                className="button buttom--outline button--primary"
                href={githubUrl}
              >
                {"Learn more"}
              </Link>
            )}
          </div> */}
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link
                className="button button--secondary"
                href={githubUrl}
              >
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
  return <QuickStartCard {...props} className="col col--6 margin-bottom--lg" />;
}

export function QuickStartCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Cosmos"
        subTitle="Space exploration, technological advances, and physics."
        githubUrl="/cosmos"
      />
      <QuickStartCol
        title="Guides and Gists"
        subTitle="Advanced guides IT Developers and System Admin."
        githubUrl="/docs/devops"
      />
      {/* <QuickStartCol
        title="Blog"
        subTitle="Recent updates and Releases"
        githubUrl="/blog"
      /> */}
      {/* <QuickStartCol
        title="Feature Requests"
        subTitle="Submit your feature requests."
        githubUrl="/feature-requests"
      /> */}
    </div>
  );
}
export function DevOpsCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Win + Rs"
        subTitle="Win utilities shortcuts"
        githubUrl="/docs/devops/troubleshoot/windows-utilities"
      />
      <QuickStartCol
        title="aka.ms"
        subTitle="All about aka.ms"
        githubUrl="/docs/devops/admin-center/aka-ms"
      />

    </div>
  );
}