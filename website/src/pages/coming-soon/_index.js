import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import React from 'react';
import Layout from '@theme/Layout';



export default function ComingSoon() {
  const { siteConfig } = useDocusaurusContext();
  return (
    
    <Layout title="Hello" description="Hello React Page">
    <div className="App">
      <header className="App-header">
        <img src="img/react-logo.svg"
        height={250}
        alignItems="center"
        className="App-logo" alt="logo" />

      </header>
    </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>

        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}