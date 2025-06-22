import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from "./styles.module.css";

export default function TestsComponent() {
    return (

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
            }}>
            <p>
                More <code>.mdx features</code>
                <a href='./mdx-features' target='_blank'> here</a>
            </p>

        </div>


    );
}