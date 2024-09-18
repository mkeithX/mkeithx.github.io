import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    scale: 0.8,
    title: "Easy Navigation",
    Svg: require("@site/static/img/undraw_experience_design.svg").default,
    description: (
      <>
        Explore and manage your repositories with an intuitive interface and
        powerful search features. <Link to="/projects">more</Link>.
      </>
    ),
  },
  {
    scale: 0.8,
    title: "Detailed Tutorials",
    Svg: require("@site/static/img/undraw_react.svg").default,
    description: (
      <>
        Access step-by-step tutorials tailored for your projects, guiding you
        from setup to advanced techniques.{" "}
      </>
    ),
  },
  {
    scale: 0.8,
    title: "Interactive Samples",
    Svg: require("@site/static/img/undraw_website.svg").default,
    description: (
      <>
        Engage with live code examples and experiments directly within the
        documentation for hands-on learning.
      </>
    ),
  },
  {
    scale: 0.8,
    title: "Expert Tips",
    Svg: require("@site/static/img/undraw_hello.svg").default,
    description: (
      <>
        For dynamic content integration, ensuring a seamless and engaging user
        experience.
      </>
    ),
  },
  {
    scale: 1.0,
    title: "Windows for Developers",
    Svg: require("@site/static/img/undraw_code_review.svg").default,
    description: (
      <>
        Gain insights from top developers in your organization, with best
        practices and advice to enhance your coding skills.
      </>
    ),
  },
];

function Feature({ Svg, scale, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={"text--center"}>
        <Svg
          transform={"scale(" + scale + ")"}
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
      <div className={clsx("row", styles.featuresRowCenter)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
