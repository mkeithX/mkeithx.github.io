import React, { ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import clsx from "clsx";

import Image from "@theme/IdealImage";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  subTitle,
  githubUrl,
  twitterUrl,
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

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ContributorsTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Coming soon"
        subTitle="This feature will be out soon. Stay tuned."
        githubUrl="https://github.com/kitiplex"
        twitterUrl="https://twitter.com/"
      />
      <TeamProfileCardCol
        name="Coming soon"
        subTitle="This feature will be out soon. Stay tuned."
        githubUrl="https://github.com/kitiplex"
        twitterUrl="https://twitter.com/"
      />
      <TeamProfileCardCol
        name="Coming soon"
        subTitle="This feature will be out soon. Stay tuned."
        githubUrl="https://github.com/kitiplex"
        twitterUrl="https://twitter.com/"
      />
        <TeamProfileCardCol
        name="Coming soon"
        subTitle="This feature will be out soon. Stay tuned."
        githubUrl="https://github.com/kitiplex"
        twitterUrl="https://twitter.com/"
      />
    </div>
  );
}
