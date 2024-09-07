import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Built for Humans",
    Svg: require("@site/static/img/undraw_experience_design.svg").default,
    description: (
      <>
        Experience the seamless ease and intuitive functionality on both creating and managing docs.
      </>
    ),
  },

  {
    title: "React Components",
    Svg: require("@site/static/img/undraw_react.svg").default,
    description: (
      <>
        Leveraging React's component-based architecture ensuring fast
        performance and dynamic content.
      </>
    ),
  },

  {
    title: "Powered by MDX",
    Svg: require("@site/static/img/undraw_experience.svg").default,
    description: (
      <>
        For dynamic content integration, ensuring a seamless and engaging user
        experience.
      </>
    ),
  },
  {
    title: "OpenSource",
    Svg: require("@site/static/img/undraw_hello.svg").default,
    description: (
      <>
        For dynamic content integration, ensuring a seamless and engaging user
        experience.
      </>
    ),
  },
  {
    title: "Dev Friendly",
    Svg: require("@site/static/img/undraw_website.svg").default,
    description: (
      <>
 Featuring practical tips, best practices, and in-depth insights to ensure smooth and efficient software deployments.
      </>
    ),
  },

];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("container text--center")}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx("container text--center")}>
        <h2 className={styles.heroTitleTextHtml}>
          {/* <b>{"Features"}</b> */}
          {/* {"Features"} */}
        </h2>

        <div className={`row ${styles.featuresRowCenter}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
