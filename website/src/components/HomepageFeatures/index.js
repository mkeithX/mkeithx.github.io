import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    scale: 1.3,
    title: 'Platform',
    Svg: require('@site/static/img/kitimi-svg-banner.svg').default,
    description: (
      <>
      A multi-level platform founded on 2018.
      Learn <Link to="/blog/kitimi">more</Link>.
      </>
    ),
  },
  {
    scale: 0.8,
    title: 'Open-source',
    Svg: require('@site/static/img/kitiplex-svg-banner.svg').default,
    description: (
      <>
        The central hub for contributors, authors, and maintainers within the <b>Kitimi ecosystem</b>. 
        Learn <Link to="https://kitiplex.github.io/">more</Link>.
      </>
    ),
  },
    {
    scale: 0.6,
    title: 'Docusaurus',
    Svg: require('@site/static/img/docusaurus-logo.svg').default,
    description: (
      <>
      An open-source <code>static-site</code> generator powering most of my front-end projects including this website.
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  // {
  //   scale: 0.8,
  //   title: 'WSL',
  //   Svg: require('@site/static/img/kali-logo-blue.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   scale: 1.0,
  //   title: 'Windows for Developers',
  //   Svg: require('@site/static/img/microsoft_logo.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ Svg, scale, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg transform={"scale(" + scale + ")"} className={styles.featureSvg} role="img" />
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
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
