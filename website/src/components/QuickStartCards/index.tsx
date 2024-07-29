import React, { ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";


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
  name: string;
  subTitle: string;
  githubUrl: string;
};

function QuickStartCard({
  className,
  name,
  subTitle,
  githubUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card shadow--tl">
        <div className="card__header">
          <div className="avatar">
            <img
              className="avatar__photo avatar__photo--lg margin-vert--sm"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <div className="avatar__name">{name}</div>
              <small className="avatar__subtitle">{subTitle}</small>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="button-group">
            {githubUrl && (
              <Link
                className="button button--outline button--primary"
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
        name="DevOps"
        subTitle="Advanced guides for for IT Developers and System Administrators."
        githubUrl="https://github.com/kitiplex"
      />
      <QuickStartCol
        name="SpaceHub"
        subTitle="Space exploration, technological advances, and physics."
        githubUrl="https://github.com/kitiplex"
      />
      <QuickStartCol
        name="Coming soon"
        subTitle="This feature will be out soon. Stay tuned."
        githubUrl="https://github.com/kitiplex"
      />
      <QuickStartCol
        name="Coming soon"
        subTitle="This feature will be out soon. Stay tuned."
        githubUrl="https://github.com/kitiplex"
      />
    </div>
  );
}
