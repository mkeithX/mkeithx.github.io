import React, { type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "../QuickStartCards/styles.module.css";
import clsx from "clsx";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
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
  //   children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  subTitle,
  //   children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__header")}>
          <div className={clsx("avatar")}>
            <img
              className={clsx("avatar__photo avatar__photo--lg", styles.image)}
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <div className={clsx("avatar__name")}>{name}</div>
              <div className="avatar__subtitle">{subTitle}</div>
            </div>
          </div>
        </div>
        {/* <div className="card__body">{children}</div> */}
        <div className={clsx("card__footer")}>
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--sm button--secondary" href={githubUrl}>
                <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--sm button--secondary" href={twitterUrl}>
                <FontAwesomeIcon icon={faXTwitter} size="2x"></FontAwesomeIcon>
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

export function CoreTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Keith Tan"
        subTitle="Maintainer @ Kitiplex"
        githubUrl="https://github.com/mkeithX"
        twitterUrl="https://twitter.com/mkeithtan"
      >
        {/* {"Building the web before bedtime."} */}
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Kean Ortiga"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/rkortiga"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>

      <TeamProfileCardCol
        name="doorinel"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/doorinel"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>
      <TeamProfileCardCol
        name="PrimmieDoll"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/PrimmieDoll"
        twitterUrl="https://twitter.com/"
      >
        {/* {"Building the web before bedtime."} */}
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Venice"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/Portiaporkshap"
        twitterUrl="https://twitter.com/"
      >
        {/* {"Trust me I'm an engineer."} */}
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Joei"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/JoeiX"
        twitterUrl="https://twitter.com/angajoei"
      ></TeamProfileCardCol>

      <TeamProfileCardCol
        name="PriMx"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/PriMaxima"
        twitterUrl="https://twitter.com/"
      >
        {/* {"Teammate is about to update profile. Be right back!"} */}
      </TeamProfileCardCol>

      <TeamProfileCardCol
        name="Gina"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/botgina"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>

      <TeamProfileCardCol
        name="Kiti"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/kitimi88"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>


    </div>
  );
}

export function ContributorsTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Topsy"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/topsykretts8520"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>

      <TeamProfileCardCol
        name="MeganB"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/MeganB143"
        twitterUrl="#"
      ></TeamProfileCardCol>

      <TeamProfileCardCol
        name="Johanna Lorenz"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/JLorenz143"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>

      <TeamProfileCardCol
        name="Miriam G"
        subTitle="Contributor @ Kitiplex"
        githubUrl="https://github.com/MiriamG416"
        twitterUrl="https://twitter.com/"
      ></TeamProfileCardCol>
    </div>
  );
}
