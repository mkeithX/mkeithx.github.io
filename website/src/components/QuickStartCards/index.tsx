import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";
import QuickStartImageUrl from "@site/static/img/logo/terminal-no-slash.svg";

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
              <div className="avatar__name">{title}</div>
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
        webUrl="/docs/devops/troubleshoot-like-a-boss"
      />
      <QuickStartCol
        title="Cosmos"
        subTitle="Space exploration, technological advances, and physics."
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
