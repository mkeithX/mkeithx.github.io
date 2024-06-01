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
    title: "",
    Svg: require("@site/static/img/logo/Microsoft_365.svg").default,
    description: <></>,
  },
  {
    title: "",
    Svg: require("@site/static/img/logo/NASA_Worm_logo.svg").default,
    description: <></>,
  },

  {
    title: "",
    Svg: require("@site/static/img/logo/kitiplex-svg-banner.svg").default,
    description: <></>,
  },
  // {
  //   title: "",
  //   Svg: require("@site/static/img/logo/Algolia_logo.svg").default,
  //   description: <></>,
  // },

  // {
  //   title: "",
  //   Svg: require("@site/static/img/logo/kitimi-2.svg").default,
  //   description: (
  //     <>
  //     </>
  //   ),
  // },

  // {
  //   title: "Space",
  //   Svg: require("@site/static/img/undraw_taken.svg").default,
  //   description: (
  //     <>
  //       Embark on a cosmic journey with my articles{" "}
  //       <Link to={"cosmos"}>about the universe</Link>.
  //     </>
  //   ),
  // },

  // {
  //   title: "Guides",
  //   Svg: require("@site/static/img/undraw_code_review.svg").default,
  //   description: (
  //     <>
  //       Curated list of tips, guides, project notes, and gists curated to
  //       provide valuable insights. <Link to={"docs"}>Learn more</Link>
  //       .
  //     </>
  //   ),
  // },
  // {
  //   title: "Recents",
  //   Svg: require("@site/static/img/undraw_teaching.svg").default,
  //   description: (
  //     <>
  //       Updates, releases, bulletins and all other stuff.
  //       <Link to={"blog"}> Learn more.</Link>
  //     </>
  //   ),
  // },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
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
      <div className="container text--center">
        {/* <h2 className={styles.heroTitleTextHtml}>
          <b>Feat</b>uring
        </h2> */}

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
