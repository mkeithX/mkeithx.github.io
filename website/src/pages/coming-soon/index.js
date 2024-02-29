import clsx from 'clsx';
import React from 'react';
import Admonition from '@theme/Admonition';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './style.module.css'

export default function ComingSoon() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout title="Hello" description="Hello React Page">


      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '50vh',
          fontSize: '20px',
        }}>
        <header className={clsx(styles.ComingSoon)}>
          <header >
            <img src="img/react-logo.svg"
              display='flex'
              height={350}
              width={352}
              className="App-logo"
              alt="logo" />

          </header>
        </header>
        <p>
          {"This page is under construction."}
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>


    </Layout>
  );
}

