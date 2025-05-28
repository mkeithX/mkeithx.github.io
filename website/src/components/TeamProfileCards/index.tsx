import React, { JSX, type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../QuickStartCards/styles.module.css";

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
  return (
    <Link to={to}>
      {children ?? <Translate id="team.profile.websiteLinkLabel">website</Translate>}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  subTitle: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  subTitle,
  children,
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
        <div className="card__body">{children}</div>
        <div className={clsx("card__footer")}>
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--sm button--secondary" href={githubUrl}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--sm button--secondary" href={twitterUrl}>
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />;
}

const teamMembers = [
  {
    name: "Keith Tan",
    subTitle: "Maintainer @ Kitiplex",
    githubUrl: "https://github.com/mkeithX",
    twitterUrl: "https://twitter.com/mkeithtan",
  },

  {
    name: "Gina",
    subTitle: "Maintainer @ Kitiplex",
    githubUrl: "https://github.com/botgina",
    twitterUrl: "https://twitter.com/",
  },

    {
    name: "Kitiplex Engineering",
    subTitle: "Maintainer @ Kitiplex",
    githubUrl: "https://github.com/kpxengineering",
    twitterUrl: "https://twitter.com/",
  },

];

const contributors = [
    {
    name: "Leo Go",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/GuLeeDev",
    twitterUrl: "https://twitter.com/GuLeeDev",
  },
  
  {
    name: "Megan",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/CodeByMegan",
    twitterUrl: "https://twitter.com/kitiplex",
  },

  {
    name: "Adele",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/CodeByAdele",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Joni Sy",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/SyJoniDev",
    twitterUrl: "https://twitter.com/",
  },
  {
    name: "Dcst0301",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/Dcst0301",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "ayitsmeprincess",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/ayitsmeprincess",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Kean Ortiga",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/rkortiga",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Venice",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/Portiaporkshap",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "PrimmieDoll",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/PrimmieDoll",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Joei",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/JoeiX",
    twitterUrl: "https://twitter.com/angajoei",
  },

  {
    name: "PriMx",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/PriMaxima",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Topsy",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/topsykretts8520",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "MeganB",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/MeganB143",
    twitterUrl: "#",
  },

  {
    name: "Johanna Lorenz",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/JLorenz143",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Miriam G",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/MiriamG416",
    twitterUrl: "https://twitter.com/",
  },

  {
    name: "Kiti",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/kitimi88",
    twitterUrl: "https://twitter.com/",
  },

];

export function CoreTeamRow(): JSX.Element {
  return (
    <div className="row">
      {teamMembers.map((member, index) => (
        <TeamProfileCardCol key={index} {...member} children="Guides and code samples from Kitimi. Although written in Python, the same principles can be applied to other programming languages." />
      ))}
    </div>
  );
}

export function ContributorsTeamRow(): JSX.Element {
  return (
    <div className="row">
      {contributors.map((member, index) => (
        <TeamProfileCardCol key={index} {...member} children="Guides and code samples from Kitimi. Although written in Python, the same principles can be applied to other programming languages." />
      ))}
    </div>
  );
}
