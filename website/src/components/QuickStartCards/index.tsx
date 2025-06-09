import React, { JSX, ReactNode } from "react";
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
      {children ?? <div id="QuickStartLinkLabel">website</div>}
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
              className={clsx("avatar__photo avatar__photo--lg")}
              title={title}
              width={350}
            />
            <div className={clsx("avatar__intro")}>
              <Heading as="h3">
                {title}
                {/* <span className="margin--vert-sm"><b>{title}</b></span> */}
    
              </Heading>
              <div className="avatar__subtitle">{subTitle}
              {webUrl && (
              <Link className="text--no-decoration" to={webUrl}>
                {" "}{"Take me there."}
              </Link>
            )}

              </div>

            </div>
          </div>
        </div>
        {/* <div className={clsx("card__footer")}>
          <div
            className={clsx("button-group button-group--block", styles.buttons)}
          >
            {webUrl && (
              <Link className="button button--secondary" to={webUrl}>
                {"Learn more"}
              </Link>
            )}
          </div>
        </div> */}
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
        title="Guides"
        subTitle="Advanced tips, guides and best practices for mitigating issues."
        webUrl="/docs/how-tos"
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
        webUrl="/docs/system-administration/cli"
      />
      <QuickStartCol
        title="aka.ms"
        subTitle="M365 Portals & Admin Centers"
        webUrl="/docs/system-administration/ms-admin-portals"
      />
    </div>
  );
}
export function ReportsCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        title="Report Bugs🪲"
        subTitle=" Help us help you: Report those pesky bugs!"
        webUrl="/community"
      />
      <QuickStartCol
        title="Request a Feature❓"
        subTitle="Your ideas are welcome. Help us build the future!"
        webUrl="/feature-request"
      />
    </div>
  );
}

export function MyProjectsDocsRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol 
      title="Project One"
      subTitle="Subtitle One"
      webUrl="https://mkeithx.github.io"
      />
      <QuickStartCol 
      title="Project Two"
      subTitle="Subtitle Two"
      webUrl="https://github.com/mkeithX"
      />
    </div>
  );
}

// export function ProjectsDocsRow(): JSX.Element {
//   return (
//     <div className="row">
//       <QuickStartCol 
//       title="Django"
//       subTitle="Apps built with Django"
//       webUrl="/docs/examples/django"
//       />
//             <QuickStartCol 
//       title="Python"
//       subTitle="Apps built with Python"
//       webUrl="/docs/examples/django"
//       />
//     </div>
//   );
// }


