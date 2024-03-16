import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function ProjectCards({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card">
        <div className="card__image">
          <img
            className="card__image"
            src={`${githubUrl}.png`}
            alt={`${name}'s avatar`}
          />
          <div className="card__body">
            <Heading as="h3" className="avatar__name">
              {name}
            </Heading>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link
                className="button button--primary button--block margin-top--sm"
                to={githubUrl}
              >
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link
                className="button button--secondary margin-top--sm"
                to={twitterUrl}
              >
                Twitter
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCardCol(props: ProfileProps) {
  return <ProjectCards {...props} className="col col--4 margin-bottom--lg" />;
}


export function MyProjectsRow(): JSX.Element {
  return <div className="row">
    <ProjectCardCol
        name="Keith"
        githubUrl="https://github.com/kitiplex"
        twitterUrl="https://twitter.com/kitiplex"
      >
        This is project Number 01.
      </ProjectCardCol>
      <ProjectCardCol
        name="Test Keith"
        githubUrl="https://github.com/mkeithx"
        twitterUrl="https://twitter.com/mkeithtan"
      >
        This is project Nubmer 2.
      </ProjectCardCol>
      <ProjectCardCol
        name="Test Keith"
        githubUrl="https://github.com/kitimi88"
        twitterUrl="https://twitter.com/mkeithtan"
      >
        This is project Nubmer 03.
      </ProjectCardCol>
  </div>;
}

export function OtherStuffRow(): JSX.Element {
  return <div className="row">{/* Placeholder for OtherStuffRow */}</div>;
}
