import React, { ReactNode } from "react";
// import Translate from "@docusaurus/Translate";
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
        <div id="team.profile.websiteLinkLabel">website</div>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  title: string;
  subTitle: string;
  webUrl: string;
};

function QuickStartCard({
  className,
  title,
  subTitle,
  webUrl,
}: ProfileProps) {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__header")}>
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
          {/* <div className="button-group button-group--block">
            {webUrl && (
              <Link
                className="button buttom--outline button--primary"
                href={webUrl}
              >
                {"Learn more"}
              </Link>
            )}
          </div> */}
        </div>
        <div className={clsx("card__footer")}>
          <div className={clsx("button-group button-group--block", styles.buttons)}>
            {webUrl && (
              <Link
                className="button button--secondary"
                to={webUrl}
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
  return <QuickStartCard {...props} />;
}

export function QuickStartCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Advanced Troubleshooting"
        subTitle="Tips and Best Practice for mitigating issues."
        webUrl="/docs/devops/troubleshoot-like-a-boss"
      />
      <QuickStartCol
        title="Cosmos"
        subTitle="Space exploration, technological advances, and physics."
        webUrl="/cosmos"
      />

      {/* <QuickStartCol
        title="Feature Requests"
        subTitle="Submit your feature requests."
        webUrl="/feature-requests"
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