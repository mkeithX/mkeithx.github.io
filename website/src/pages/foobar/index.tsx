import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from "@theme/Heading";

function Foobar() {
  return (
    <Layout title="Foobar">
      <div className={'hero hero--dark'}>
        <div className="container">
            <Heading as="h1" className='hero__title'>
                {"Hi there!"}
            </Heading>
          <p className="hero__subtitle">
           {" We're getting this page up and running any time now. Please stay tuned."}
          </p>
        </div>
      </div>
      <div className={'container margin-vert--xl'}>
        <h2>{"Lorem Ipsum"}</h2>
        <ul>
          <li>
            📣 <strong>{"Lorem Ipsum "}</strong> {"stay tuned!"}{' '}
            <a href="#">{"Here"}</a> {"stay tuned!"}
            {"stay tuned!"}<Link to="/blog">{"stay tuned!"}</Link>
          </li>
          <li>
            🙋 <strong>{"Lorem Ipsum "}</strong> by joining the{' '}
            <a href="#">{"stay tuned!"}</a>, or
            {"stay tuned!"}{' '}
            <a href="#">
            {"stay tuned!"}
            </a>
            .
          </li>
          <li>
            🌏 <strong>{"Lorem Ipsum "}</strong> on{' '}
            <a href="#">{"stay tuned!"}</a>.
          </li>
          <li>
            🔒 <strong>{"Lorem Ipsum "}</strong> {"stay tuned!"}{' '}
            <a href="#">{"stay tuned!"}</a>
            .
          </li>
        </ul>
        <p>
          ❓ {"stay tuned!"}{' '}
          <a href="#">{"stay tuned!"}</a>.
        </p>
      </div>
      <hr></hr>
      <div className={'container margin-vert--xl'}>
        <h2>{"Almost there now!"}</h2>
        <p>
          {"Lorem Ipsum is simply dummy text of the printing and typesetting"}
          <ul>
            <li>
              <a href="#">{'Link 1'}</a>{' '}
              <i>(Link 1)</i>
            </li>
            <li>
              <a href="#">{'Link 2'}</a>{' '}
              <i>(Link 2)</i>
            </li>
            <li>
              <a href="#">{'Link 3'}</a>{' '}
              <i>(Link 3)</i>
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

export default Foobar;