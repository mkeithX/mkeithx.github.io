import React, { Children, JSX, type ReactNode } from "react";
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
  xUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  subTitle,
  children,
  githubUrl,
  xUrl,
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
            {xUrl && (
              <Link className="button button--sm button--secondary" href={xUrl}>
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
    xUrl: "https://twitter.com/mkeithtan",
  },

  {
    name: "Gina",
    subTitle: "Maintainer @ Kitiplex",
    githubUrl: "https://github.com/botgina",
    xUrl: "https://twitter.com/",
  },

    {
    name: "Kitiplex Engineering",
    subTitle: "Maintainer @ Kitiplex",
    githubUrl: "https://github.com/kpxengineering",
    xUrl: "https://twitter.com/",
  },
    {
    name: "Kitiplex InfraOps",
    subTitle: "Maintainer @ Kitiplex",
    githubUrl: "https://github.com/kpxcoredev",
    xUrl: "https://twitter.com/",
  },
];

const contributors = [
    {
    name: "Leo Go",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/GuLeeDev",
    xUrl: "https://twitter.com/GuLeeDev",
  },
  
  {
    name: "Megan",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/CodeByMegan",
    xUrl: "https://twitter.com/kitiplex",
  },

  {
    name: "Adele",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/CodeByAdele",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Joni Sy",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/SyJoniDev",
    xUrl: "https://twitter.com/",
  },
  {
    name: "Dcst0301",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/Dcst0301",
    xUrl: "https://twitter.com/",
  },

  {
    name: "ayitsmeprincess",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/ayitsmeprincess",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Kean Ortiga",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/rkortiga",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Venice",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/Portiaporkshap",
    xUrl: "https://twitter.com/",
  },

  {
    name: "PrimmieDoll",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/PrimmieDoll",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Joei",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/JoeiX",
    xUrl: "https://twitter.com/angajoei",
  },

  {
    name: "PriMx",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/PriMaxima",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Topsy",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/topsykretts8520",
    xUrl: "https://twitter.com/",
  },

  {
    name: "MeganB",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/MeganB143",
    xUrl: "#",
  },

  {
    name: "Johanna Lorenz",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/JLorenz143",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Miriam G",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/MiriamG416",
    xUrl: "https://twitter.com/",
  },

  {
    name: "Kiti",
    subTitle: "Contributor @ Kitiplex",
    githubUrl: "https://github.com/kitimi88",
    xUrl: "https://twitter.com/",
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
